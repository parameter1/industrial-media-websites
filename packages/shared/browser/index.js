import DefaultTheme from '@base-cms/marko-web-theme-default/browser';
import GTM from '@base-cms/marko-web-gtm/browser';
import GAM from '@base-cms/marko-web-gam/browser';
import GCSE from '@base-cms/marko-web-gcse/browser';
import RevealAd from '@base-cms/marko-web-reveal-ad/browser';
import SocialSharing from '@base-cms/marko-web-social-sharing/browser';
import PhotoSwipe from '@base-cms/marko-web-photoswipe/browser';
import IdentityX from '@base-cms/marko-web-identity-x/browser';

import ContactUs from '@industrial-media/package-contact-us/browser';

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
};
