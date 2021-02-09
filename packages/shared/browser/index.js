import DefaultTheme from '@parameter1/base-cms-marko-web-theme-default/browser';
import GTM from '@parameter1/base-cms-marko-web-gtm/browser';
import GAM from '@parameter1/base-cms-marko-web-gam/browser';
import GCSE from '@parameter1/base-cms-marko-web-gcse/browser';
import RevealAd from '@parameter1/base-cms-marko-web-reveal-ad/browser';
import SocialSharing from '@parameter1/base-cms-marko-web-social-sharing/browser';
import PhotoSwipe from '@parameter1/base-cms-marko-web-photoswipe/browser';
import IdentityX from '@parameter1/base-cms-marko-web-identity-x/browser';

import ContactUs from '@industrial-media/package-contact-us/browser';

const NewsletterSignup = () => import(/* webpackChunkName: "shared-newsletter-signup" */ './newsletter-signup/index.vue');

export default (Browser) => {
  DefaultTheme(Browser);
  GTM(Browser);
  GAM(Browser);
  GCSE(Browser);
  RevealAd(Browser);
  SocialSharing(Browser);
  PhotoSwipe(Browser);
  ContactUs(Browser);
  IdentityX(Browser);

  Browser.register('SharedNewsletterSignup', NewsletterSignup);
};
