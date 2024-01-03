import GCSE from '@parameter1/base-cms-marko-web-gcse/browser';
import ContactUs from '@parameter1/base-cms-marko-web-contact-us/browser';
import MonoRail from '@parameter1/base-cms-marko-web-theme-monorail/browser';
import GlobalFloatingVideoPlayer from './floating-video-player.vue';
import brightcoveGAMPlayer from './brightcove-gam-player.vue';

export default (Browser) => {
  GCSE(Browser);
  ContactUs(Browser);
  MonoRail(Browser);
  Browser.register('GlobalFloatingVideoPlayer', GlobalFloatingVideoPlayer);
  Browser.register('BrightCoveGAMPlayer', brightcoveGAMPlayer);
};
