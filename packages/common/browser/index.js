const ContactUsForm = () => import(/* webpackChunkName: "common-contact-us-form" */ './contact-us-form.vue');
const ExactTargetTrackReferrer = () => import(/* webpackChunkName: "common-exact-target-track-referrer" */ './exact-target/track-referrer.vue');

export default (Browser) => {
  // @todo this should be removed once contact us is moved to core.
  Browser.registerComponent('CommonContactUsForm', ContactUsForm);
  Browser.registerComponent('ExactTargetTrackReferrer', ExactTargetTrackReferrer);
};
