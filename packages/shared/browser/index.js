import DefaultTheme from '@parameter1/base-cms-marko-web-theme-default/browser';
import GTM from '@parameter1/base-cms-marko-web-gtm/browser';
import GAM from '@parameter1/base-cms-marko-web-gam/browser';
import GCSE from '@parameter1/base-cms-marko-web-gcse/browser';
import RevealAd from '@parameter1/base-cms-marko-web-reveal-ad/browser';
import SocialSharing from '@parameter1/base-cms-marko-web-social-sharing/browser';
import PhotoSwipe from '@parameter1/base-cms-marko-web-photoswipe/browser';
import ContactUs from '@industrial-media/package-contact-us/browser';
import IdentityX from '@parameter1/base-cms-marko-web-identity-x/browser';
import P1Events from '@parameter1/base-cms-marko-web-p1-events/browser';
import OmedaRapidIdentityX from '@parameter1/base-cms-marko-web-omeda-identity-x/browser/rapid-identify.vue';

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
  P1Events(Browser);

  Browser.register('SharedNewsletterSignup', NewsletterSignup);
  Browser.register('OmedaRapidIdentityX', OmedaRapidIdentityX, {
    on: {
      'encrypted-id-found': (encryptedId) => {
        if (encryptedId && window.p1events) {
          window.p1events('setIdentity', `omeda.indm.customer*${encryptedId}~encrypted`);
        }
      },
    },
  });
};
