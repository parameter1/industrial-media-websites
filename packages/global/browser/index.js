import GCSE from '@parameter1/base-cms-marko-web-gcse/browser';
import ContactUs from '@parameter1/base-cms-marko-web-contact-us/browser';
import MonoRail from '@parameter1/base-cms-marko-web-theme-monorail/browser';

export default (Browser) => {
  GCSE(Browser);
  ContactUs(Browser);
  MonoRail(Browser);
};
