const getBehaviors = ((key, websiteBehaviorAttributeId) => {
  const behaviors = {
    imcd: {
      behaviors: { logIn: 12, verifyEmail: 13, submitProfile: 14 },
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
            footer: 16123
          }
        },
        contentGateType: {
          id: 9,
          valueIds: { default: 16125, metered: 16126, printPreview: 16128 },
        },
      }
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
  };
};
