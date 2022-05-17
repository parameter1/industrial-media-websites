<template>
  <div v-if="active" id="brightcove-floating-player">
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

export default {
  components: {
    IconX,
  },
  props: {
    identityParams: {
      type: String,
      default: '',
    },
    enabled: {
      type: Boolean,
      default: false,
    },
    accountId: {
      type: String,
      required: true,
    },
    videoId: {
      type: String,
      default: null,
    },
    playlistId: {
      type: String,
      default: null,
    },
    playerId: {
      type: String,
      default: null,
    },
    embedId: {
      type: String,
      default: 'default',
    },
  },
  data: () => ({
    player: null,
    open: true,
    error: null,
    iconMods: ['light'],
  }),
  computed: {
    active() {
      return this.enabled && this.open;
    },
  },
  async mounted() {
    if (this.enabled) {
      try {
        const { ref } = await brightcovePlayerLoader({
          accountId: this.accountId,
          playerId: this.playerId,
          embedId: this.embedId,
          videoId: this.videoId,
          playlistId: this.playlistId,
          refNode: this.$el,
          embedOptions: {
            responsive: {
              maxWidth: '340px',
            },
          },
        });
        this.player = ref;

        const { identityParams } = this;
        this.player.ready(function setIdentityParams() {
          const player = this;
          if (!player.ima3) return;
          player.ima3.adMacroReplacement = function leadManagementReplacer(url) {
            if (!url) return url;
            const addr = new URL(url);
            addr.searchParams.set('cust_params', identityParams);
            return addr.toString();
          };
        });
        this.open = true;
      } catch (e) {
        const { error } = console;
        error(e);
      }
    }
  },
  methods: {
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

#brightcove-floating-player .btn {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 3;
  height: 32px;
  width: 32px;
}

#brightcove-floating-player .vjs-control-bar div[class*="vjs-overlay-background"] {
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
