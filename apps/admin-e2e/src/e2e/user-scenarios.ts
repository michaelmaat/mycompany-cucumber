/* eslint-disable cypress/require-data-selectors */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import { When } from '@badeball/cypress-cucumber-preprocessor';
import { WaitHelper } from '../../../../libs/shared/cypress/helpers/util-wait/src/lib/cypress-wait.helper';

import { surgeons } from '../fixtures/surgeons';

When('this fails because google does not have data cy tags', () => {
  cy.visit('https://duckduckgo.com/');
  WaitHelper.default();
  cy.dataCy('dummy');
});

When('this succeeds', () => {
  cy.visit('https://duckduckgo.com/');
  WaitHelper.default();
  cy.get('input[name="q"]').type(surgeons.default.name);
  cy.get('#search_button_homepage').click();
});
