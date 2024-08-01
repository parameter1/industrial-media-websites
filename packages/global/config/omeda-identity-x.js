const { getOmedaCustomerRecord } = require('@parameter1/base-cms-marko-web-omeda-identity-x/omeda-data');
const { get, getAsArray } = require('@parameter1/base-cms-object-path');

const getBehaviors = ((key, websiteBehaviorAttributeId) => {
  const behaviors = {
    imcd: {
      behaviors: { logIn: 12, verifyEmail: 13, submitProfile: 14 },
      behaviorAttributes: {
        website: {
          id: 3,
          valueId: websiteBehaviorAttributeId,
        },
        actionSource: {
          id: 2,
          valueIds: {
            default: 16105,
            newsletterSignup: 16106,
            comments: 16107,
            contentGate: 16104,
          },
        },
        newsletterSignupType: {
          id: 4,
          valueIds: {
            default: 16111,
            pushdown: 16109,
            inlineContent: 16115,
            inlineSection: 16113,
            footer: 16108,
          },
        },
        contentGateType: {
          id: 5,
          valueIds: { default: 16110, metered: 16112, printPreview: 16114 },
        },
      },
    },
    lynchm: {
      behaviors: { logIn: 15, verifyEmail: 16, submitProfile: 17 },
      behaviorAttributes: {
        website: {
          id: 8,
          valueId: websiteBehaviorAttributeId,
        },
        actionSource: {
          id: 7,
          valueIds: {
            default: 16130,
            newsletterSignup: 16132,
            comments: 16134,
            contentGate: 16127,
          },
        },
        newsletterSignupType: {
          id: 6,
          valueIds: {
            default: 16129,
            pushdown: 16124,
            inlineContent: 16133,
            inlineSection: 16131,
            footer: 16123,
          },
        },
        contentGateType: {
          id: 9,
          valueIds: { default: 16125, metered: 16126, printPreview: 16128 },
        },
      },
    },
  };
  return behaviors[key];
});

module.exports = ({
  omedaConfig,
  idxConfig,
  rapidIdentProductId,
  websiteBehaviorAttributeId,
  // Passed through, if specified.
  appendPromoCodeToHook = [],
  appendBehaviorToHook = [],
  appendDemographicToHook = [],
}) => {
  const { brandKey } = omedaConfig;
  const { behaviors, behaviorAttributes } = getBehaviors(brandKey, websiteBehaviorAttributeId);
  return {
    clientKey: omedaConfig.clientKey,
    brandKey: omedaConfig.brandKey,
    appId: omedaConfig.appId,
    inputId: omedaConfig.inputId,
    rapidIdentProductId,
    idxConfig,
    behaviors,
    behaviorAttributes,
    appendPromoCodeToHook,
    appendBehaviorToHook,
    appendDemographicToHook,
    onAuthenticationSuccessFormatter: (async ({
      req,
      payload,
      loginSource,
      additionalEventData,
    }) => {
      // BAIL if omedaGraphQLCLient isnt available return payload.
      if (!req.$omedaGraphQLClient) return payload;

      const identityXOptInHooks = req.app.locals.site.getAsObject('identityXOptInHooks');
      const omeda = req.app.locals.site.getAsObject('omeda');
      if (identityXOptInHooks.onAuthenticationSuccess) {
        const { productIds, promoCode } = identityXOptInHooks.onAuthenticationSuccess;
        const { user } = payload;

        const found = getAsArray(user, 'externalIds')
          .find(({ identifier, namespace }) => identifier.type === 'encrypted'
            && namespace.provider === 'omeda'
            && namespace.tenant === omeda.brandKey);

        // BAIL if no encryptedCustomerId and return payload
        if (!found) return payload;
        const encryptedCustomerId = get(found, 'identifier.value');

        // Retrive the omeda customer
        const omedaCustomer = await getOmedaCustomerRecord({
          omedaGraphQLClient: req.$omedaGraphQLClient,
          encryptedCustomerId,
        });
        // Get the current user subscriptions
        const subscriptions = getAsArray(omedaCustomer, 'subscriptions');
        // For each autoOptinProduct check if they have a subscription.
        // Sign the user up if they do not

        const newSubscriptions = productIds.filter(
          (id) => !subscriptions.some(({ product }) => product.deploymentTypeId === id),
        );
        if (newSubscriptions && newSubscriptions.length) {
          // eslint-disable-next-line no-param-reassign
          additionalEventData.autoSignups = [];
          const deploymentTypes = newSubscriptions.map((id) => {
            // eslint-disable-next-line no-param-reassign
            additionalEventData.autoSignups.push({
              userId: user.id,
              productId: id,
              loginSource,
            });
            return { id, optedIn: true };
          });
          return ({
            ...payload,
            deploymentTypes,
            promoCode,
            appendPromoCodes: [
              { promoCode },
            ],
          });
        }
      }
      return payload;
    }),
  };
};
