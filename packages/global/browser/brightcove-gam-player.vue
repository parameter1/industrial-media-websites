<template>
  <div style="height: 0;">
    <div class="billboard-leave-behind-observer" />
    <div :class="blockClasses">
      <div v-if="canDisplay" :class="containerClasses">
        <div :class="backgroundClasses" />
        <div :class="adClasses">
          <a :href="href" target="_blank">
            <img
              v-if="src"
              :class="imageClasses()"
              :href="href"
              :src="src"
            >
            <img
              v-if="mobileSrc"
              :class="imageClasses('mobile')"
              :href="href"
              :src="mobileSrc"
            >
          </a>
        </div>
        <button
          v-if="closeable"
          :class="buttonClasses"
          title="Close Advertisement"
          @click="close"
        >
          &times;
        </button>
      </div>
    </div>
  </div>
</template>

<script>
const block = 'billboard-leave-behind';

const parseJson = (str) => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return {};
  }
};

export default {
  props: {
    closeable: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      visible: false,
      initialized: false,
      hasClosed: false,
      href: null,
      src: null,
      mobileSrc: null,
    };
  },
  computed: {
    canDisplay() {
      if ((this.src || this.mobileSrc) && this.href) return true;
      return false;
    },
    adClasses() {
      return `${block}__ad`;
    },
    blockClasses() {
      const classes = [block];
      if (this.visible && !this.hasClosed) {
        return [...classes, `${block}--visible`];
      }
      return classes;
    },
    containerClasses() {
      const blockClass = `${block}__container`;
      const classes = [blockClass];
      if (this.src) classes.push(`${blockClass}--with-desktop`);
      if (this.mobileSrc) classes.push(`${blockClass}--with-mobile`);
      return classes;
    },
    buttonClasses() {
      return `${block}__close`;
    },
    backgroundClasses() {
      return `${block}__background`;
    },
  },
  created() {
    // window.addEventListener('message', this.listener);
    const { googletag } = window;
    if (!googletag) {
      console.warn('The googletag object was not found. Bailing early.');
    }

    window.addEventListener('message', this.listener);
    googletag.cmd.push(() => {
      this.slot = googletag.defineOutOfPageSlot('/137873098/IEN/default_brightcove', 'hooplah').addService(googletag.pubads());
      const div = document.createElement('div');
      div.id = 'hooplah';
      div.dataset.path = this.path;
      this.$el.appendChild(div);
      googletag.pubads().refresh([this.slot], { changeCorrelator: false });
    });
    this.observer = new IntersectionObserver((event) => {
      if (event[0].isIntersecting) {
        this.visible = false;
      } else {
        this.display();
      }
    }, {
      threshold: 0,
    });
  },
  mounted() {
    this.observer.observe(this.$el.querySelector('.billboard-leave-behind-observer'));
  },
  beforeDestroy() {
    window.removeEventListener('message', this.listener);
  },
  methods: {
    imageClasses(type = 'desktop') {
      return [`${block}__image`, `${block}__image--${type}`];
    },
    listener(event) {
      const payload = parseJson(event.data);
      console.log(payload);
      if (['href'].every((k) => payload[k]) && ['lb1300x100', 'lb600x100'].some((j) => payload[j])) {
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', () => {
            this.setProps(payload);
            this.display();
          });
        } else {
          // attempt to set props and display if requirments are met.
          this.setProps(payload);
          this.display();
        }
      }
    },
    close() {
      this.hasClosed = true;
      this.visible = false;
    },
    display() {
      if (this.canDisplay && !this.hasClosed) this.visible = true;
    },
    setProps(payload) {
      const { lb1300x100, lb600x100, href } = payload;
      this.src = lb1300x100;
      this.mobileSrc = lb600x100;
      this.href = href;
      // This will add a class to the related top leaderboard to be able to adjust styling.
      document.querySelector('[data-gam-path*="top-leaderboard"]').classList.add('ad-container--template-leaderboard-4x1');
    },
  },
};
</script>
