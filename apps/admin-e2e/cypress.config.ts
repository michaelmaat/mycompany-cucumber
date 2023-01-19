import { getCypressOptions } from '@mycompany/shared/cypress/config-options/util-cypress';
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';
import setupNodeEvents from './src/plugins/index';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename),
    ...getCypressOptions('admin'),
    baseUrl: 'https://google.com',
    setupNodeEvents,
  },
});
