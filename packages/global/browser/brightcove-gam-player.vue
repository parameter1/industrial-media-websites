<template>
  <div>
    <div v-if="open" id="brightcove-gam-player">
      <button
        id="brightcove-gam-player-button"
        class="btn btn-dark text-light p-0"
        type="button"
        title="Close video player"
        @click="close"
      >
        <icon-x :modifiers="iconMods" />
      </button>
      <slot />
    </div>
    <div id="brightcove-gam-player-backup-wrapper" style="display: none;">
      <button
        id="brightcove-gam-player-backup-button"
        class="btn btn-dark text-light p-0"
        type="button"
        title="Close Ad"
        @click="closeBackup"
      >
        <icon-x :modifiers="iconMods" />
      </button>
      <div id="brightcove-gam-player-backup" />
    </div>
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
      this.open = false;
      return;
    }
    const { googletag } = window;
    if (!googletag) {
      warn('The googletag object was not found. Bailing early.');
      this.open = false;
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
      // you must have a accountId, playerID & (videoId || playlistId)
      if (
        ['bcAccountId', 'bcPlayerId'].every((j) => payload[j])
        && ['bcPlaylistId', 'bclVideoId'].some((k) => payload[k])
      ) {
        try {
          const { ref } = await brightcovePlayerLoader({
            accountId: payload.bcAccountId,
            playerId: payload.bcPlayerId,
            embedId: payload.embedId || 'default',
            // use videoId over playlistId, should be more specific
            videoId: payload.bcVideoId,
            ...(!payload.bcVideoId && { playlistId: payload.bcPlaylistId }),
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
          // append trasnparent tracking pixel
          const tracker = document.createElement('img');
          tracker.setAttribute('src', payload.VIEW_URL_UNESC);
          tracker.style.display = 'none';
          document.getElementById('brightcove-gam-player').appendChild(tracker);

          document.getElementById('brightcove-gam-player-button').classList.add('active');
        } catch (e) {
          const { error } = console;
          error(e);
        }
      } else if (['bcAdClickUrl', 'bcAdImagePath'].every((j) => payload[j])) {
        const anchorElem = document.createElement('a');
        anchorElem.setAttribute('href', payload.bcAdClickUrl);
        anchorElem.setAttribute('target', '_blank');
        anchorElem.setAttribute('rel', 'noopener noreferrer');
        anchorElem.setAttribute('title', payload.bcAdTitle || 'CLICK HERE FOR MORE INFORMATION');
        anchorElem.onclick = () => {
          if (!window.p1events) return;
          window.p1events('trackGamSlot', { action: 'CLick', slot: this.slot });
        };
        const imgElem = document.createElement('img');
        imgElem.setAttribute('src', payload.bcAdImagePath);
        imgElem.setAttribute('alt', payload.bcAdTitle || 'CLICK HERE FOR MORE INFORMATION');
        anchorElem.appendChild(imgElem);
        document.getElementById('brightcove-gam-player-backup').appendChild(anchorElem);
        document.getElementById('brightcove-gam-player-backup').setAttribute('class', 'ad-container--with-label');
        document.getElementById('brightcove-gam-player-backup-wrapper').setAttribute('style', '');
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
    closeBackup() {
      if (document.getElementById('brightcove-gam-player-backup-wrapper')) {
        document.getElementById('brightcove-gam-player-backup-wrapper').remove();
      }
    },
  },
};
</script>
