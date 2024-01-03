<template>
  <div v-if="open" id="brightcove-floating-player" class="brightcove-gam-player">
    <button
      class="btn btn-dark text-light p-0"
      type="button"
      title="Close video player"
      @click="close"
    >
      <icon-x :modifiers="iconMods" />
    </button>
    <slot />
  </div>
</template>

<script>
import IconX from '@parameter1/base-cms-marko-web-icons/browser/x.vue';
import brightcovePlayerLoader from '@brightcove/player-loader';

const { warn } = console;

const parseJson = (str) => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return {};
  }
};

export default {
  components: {
    IconX,
  },
  props: {
    identityParams: {
      type: String,
      default: '',
    },
    olyEncId: {
      type: String,
      default: '',
    },
    path: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      autoPlayObserver: null,
      player: null,
      open: true,
      error: null,
      iconMods: ['light'],
    };
  },
  created() {
    if (!this.path) {
      warn('GAM path was not defined, bailing early.');
      return;
    }
    const { googletag } = window;
    if (!googletag) {
      warn('The googletag object was not found. Bailing early.');
      return;
    }
    window.addEventListener('resize', this.handleScreenResize);
    window.addEventListener('message', this.listener);
    googletag.cmd.push(() => {
      this.slot = googletag.defineOutOfPageSlot(this.path, 'brightcove-gam-ad').addService(googletag.pubads());
      const div = document.createElement('div');
      div.id = 'brightcove-gam-ad';
      div.dataset.path = this.path;
      div.style = 'height: 1px;';
      this.$el.appendChild(div);
      googletag.pubads().refresh([this.slot], { changeCorrelator: false });
    });
  },
  destroyed() {
    window.removeEventListener('resize', this.handleScreenResize);
  },
  beforeDestroy() {
    window.removeEventListener('message', this.listener);
  },
  methods: {
    async listener(event) {
      const payload = parseJson(event.data);
      const brightcoveKeys = ['bcAccountId', 'bcPlayerId', 'bcPlaylistId'];
      if (brightcoveKeys.every((j) => payload[j])) {
        try {
          const { ref } = await brightcovePlayerLoader({
            accountId: payload.bcAccountId,
            playerId: payload.bcPlayerId,
            embedId: payload.embedId || 'default',
            videoId: payload.bcVideoId,
            playlistId: payload.bcPlaylistId,
            refNode: this.$el,
            options: {
              autoplay: false,
            },
            embedOptions: {
              responsive: {
                maxWidth: '340px',
              },
            },
          });
          this.player = ref;

          const { identityParams, olyEncId } = this;
          this.player.ready(function setIdentityParams() {
            const player = this;
            if (olyEncId) player.bcAnalytics.client.setUser(olyEncId);
            if (!player.ima3) return;
            player.ima3.adMacroReplacement = function leadManagementReplacer(url) {
              if (!url) return url;
              const addr = new URL(url);
              addr.searchParams.set('cust_params', identityParams);
              return addr.toString();
            };
          });
          this.player.pause();
          this.open = true;
          this.setAutoPlayObserver();
        } catch (e) {
          const { error } = console;
          error(e);
        }
      }
    },
    setAutoPlayObserver() {
      if (this.autoPlayObserver) this.autoPlayObserver.disconnect();
      const header = document.getElementsByClassName('site-header')[0];
      const rootMargin = `-${header.offsetTop + header.offsetHeight}px 0px 0px 0px`;
      const options = {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin,
      };
      this.autoPlayObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.intersectionRatio || entry.intersectionRatio <= 0.75) {
            this.player.pause();
          } else {
            this.player.play();
          }
        });
      }, options);
      this.autoPlayObserver.observe(this.$el);
    },
    handleScreenResize() {
      this.setAutoPlayObserver();
    },
    close() {
      this.player.pause();
      this.player.reset();
      this.open = false;
    },
  },
};
</script>

<style scoped>
#brightcove-floating-player {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  min-width: 340px;
  box-shadow: 5px 5px 15px 5px #000000;
  z-index: 1;
}

#brightcove-floating-player >>> .btn {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 3;
  height: 32px;
  width: 32px;
}

#brightcove-floating-player >>> .video-js .vjs-overlay {
  background-color: transparent;
}

.page-rail #brightcove-floating-player {
  position: sticky;

  top: 150px;
  right: initial;
  bottom: initial;

  min-width: initial;
  max-width: 340px;

  margin-right: auto;
  margin-left: auto;
}

@media (max-width: 1100px) {
  .page-rail #brightcove-floating-player {
    top: 120px;
  }
}

@media (max-width: 992px) {
  .page-rail #brightcove-floating-player {
    position: relative;
    top: initial;
  }
}

@keyframes slide-top {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(calc(-90px - 1rem));
  }
}

.marko-web-gam-fixed-ad-bottom.marko-web-gam-fixed-ad-bottom--visible
~ #brightcove-floating-player {
  animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
</style>
