const OmedaRapidIdentityX = () => import(/* webpackChunkName: "incd-omeda-rapid-idenity-x" */ '@parameter1/base-cms-marko-web-omeda-identity-x/browser/rapid-identify.vue');

export default (Browser) => {
  Browser.register('OmedaRapidIdentityX', OmedaRapidIdentityX, {
    on: {
      'encrypted-id-found': (encryptedId) => {
        if (encryptedId && window.p1events) {
          window.p1events('setIdentity', `omeda.incd.customer*${encryptedId}~encrypted`);
        }
      },
    },
  });
};
