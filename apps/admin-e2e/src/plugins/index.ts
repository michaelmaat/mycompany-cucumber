import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import webpackPreprocessor from '@cypress/webpack-preprocessor';
import { getWebpackOptions } from '@mycompany/shared/cypress/config-options/util-webpack';

export default async (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> => {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    webpackPreprocessor({
      webpackOptions: getWebpackOptions(config),
    })
  );

  // Add current application to the Cypress environment object
  config.env = config.env || {};

  return config;
};
