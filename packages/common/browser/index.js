import ContactUsForm from './contact-us-form.vue';
import ExactTargetTrackReferrer from './exact-target/track-referrer.vue';

export default (Browser) => {
  // @todo this should be removed once contact us is moved to core.
  Browser.registerComponent('CommonContactUsForm', ContactUsForm);
  Browser.registerComponent('ExactTargetTrackReferrer', ExactTargetTrackReferrer);
};
