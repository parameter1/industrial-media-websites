<template>
  <form @submit.prevent="handleSubmit">
    <fieldset :disabled="isLoading">
      <div class="row">
        <div class="col-lg-8 mb-block">
          <div class="node-list node-list--flush-x node-list--flush-y">
            <div class="node-list__nodes">
              <div v-for="newsletter in newsletters" :key="newsletter.id" class="node-list__node">
                <div class="node node--flush">
                  <div class="node__contents">
                    <div class="node__body">
                      <div class="node__contents node__contents--body">
                        <h5 class="node__title">
                          {{ newsletter.name }}
                        </h5>
                        <div class="node__text d-flex mb-2">
                          <div class="custom-control custom-radio">
                            <input
                              :id="`${newsletter.id}-yes`"
                              v-model="form.choices[newsletter.id]"
                              :value="true"
                              type="radio"
                              class="custom-control-input"
                            >
                            <label
                              :for="`${newsletter.id}-yes`"
                              class="custom-control-label"
                            >
                              Yes
                            </label>
                          </div>
                          <div class="custom-control custom-radio ml-3">
                            <input
                              :id="`${newsletter.id}-no`"
                              v-model="form.choices[newsletter.id]"
                              :value="false"
                              type="radio"
                              class="custom-control-input"
                            >
                            <label
                              :for="`${newsletter.id}-no`"
                              class="custom-control-label"
                            >
                              No
                            </label>
                          </div>
                        </div>
                        <div class="node__text node__text--teaser">
                          {{ newsletter.description }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="newsletter-signup-fields">
            <div class="form-group">
              <label for="signup.email">Email Address *</label>
              <input
                id="signup.email"
                v-model="form.email"
                required="true"
                class="form-control"
                type="email"
              >
            </div>
            <div class="form-group">
              <label for="signup.confirm-email">Confirm Email Address *</label>
              <input
                id="signup.confirm-email"
                v-model="form.confirmEmail"
                required="true"
                class="form-control"
                type="email"
              >
            </div>
            <div class="form-group">
              <label for="signup.first-name">First Name *</label>
              <input
                id="signup.first-name"
                v-model="form.row.firstName"
                required="true"
                class="form-control"
                type="text"
              >
            </div>
            <div class="form-group">
              <label for="signup.last-name">Last Name *</label>
              <input
                id="signup.last-name"
                v-model="form.row.lastName"
                required="true"
                class="form-control"
                type="text"
              >
            </div>
            <div class="form-group">
              <label for="signup.company-name">Company Name</label>
              <input
                id="signup.company-name"
                v-model="form.row.companyName"
                class="form-control"
                type="text"
              >
            </div>
            <div class="form-group">
              <label for="signup.job-title">Job Title</label>
              <input
                id="signup.job-title"
                v-model="form.row.title"
                class="form-control"
                type="text"
              >
            </div>
            <div class="form-group">
              <label for="signup.phone-number">Phone #</label>
              <input
                id="signup.phone-number"
                v-model="form.row.phone"
                class="form-control"
                type="tel"
              >
            </div>
            <button class="btn btn-primary" type="submit">
              {{ buttonLabel }}
            </button>
            <div v-if="error" class="alert alert-danger mt-3">
              Error: {{ error.message }}
            </div>
            <div v-if="hasSubmitted" class="alert alert-success mt-3">
              Your email preferences has been saved. Thank you!
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  </form>
</template>

<script>
export default {
  props: {
    /**
     * Note: each newsletter.id **must** be setup as the marketing
     * cloud data extension customer key.
     */
    newsletters: {
      type: Array,
      default: () => [],
    },
  },

  data: () => ({
    form: {
      email: '',
      confirmEmail: '',
      /**
       * Note: these fields **must** be supported by the marketing cloud data extension.
       */
      row: {
        firstName: '',
        lastName: '',
        companyName: '',
        title: '',
        phone: '',
      },
      choices: {},
    },
    isLoading: false,
    hasSubmitted: false,
    error: null,
  }),

  computed: {
    buttonLabel() {
      if (this.isLoading) return 'Saving...';
      return 'Submit';
    },
  },

  methods: {
    async handleSubmit() {
      this.isLoading = true;
      this.error = null;
      this.hasSubmitted = false;
      try {
        if (this.form.email !== this.form.confirmEmail) {
          throw new Error('The supplied email addresses do not match.');
        }
        const response = await fetch('/__newsletter-signup', {
          method: 'POST',
          credentials: 'same-origin',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(this.form),
        });
        const json = await response.json();
        if (!response.ok) throw new Error(json.message || 'An unknown, fatal error occurred.');
        this.hasSubmitted = true;
      } catch (e) {
        this.error = e;
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
