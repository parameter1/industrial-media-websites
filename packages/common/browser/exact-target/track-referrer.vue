<template>
  <div class="exact-target-track-referrer" />
</template>

<script>
import buildUrl from '../../exact-target/build-url';

export default {
  props: {
    payload: {
      type: Object,
      default: () => ({}),
    },
  },

  created() {
    const { payload } = this;
    if (payload && payload.d) {
      payload.d.ts = Date.now();
      const url = buildUrl(payload);
      fetch(url);
    }
  },
};
</script>
