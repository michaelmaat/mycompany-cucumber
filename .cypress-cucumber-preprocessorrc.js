module.exports = {
  // Paths are relative to the {application}-e2e folder, since this config is loaded separately for every e2e app.
  stepDefinitions: [
    './src/e2e/**/*.ts',
    '../../libs/shared/cypress/util-steps/src/lib/**/*.ts',
  ],
  json: {
    enabled: false,
  },
  omitFiltered: true,
};
