import { When } from '@badeball/cypress-cucumber-preprocessor';
/* eslint-disable-next-line @nrwl/nx/enforce-module-boundaries */
import { WaitHelper } from '../../../../libs/shared/cypress/helpers/util-wait/src/lib/cypress-wait.helper';

// import { WaitHelper } from '@mycompany/shared/cypress/helpers/util-wait';

When('this fails because google does not have data cy tags', () => {
  cy.visit('https://google.com');
  WaitHelper.getForDownload();
  cy.dataCy('dummy');
});

When('this succeeds', () => {
  cy.visit('https://google.com');
  WaitHelper.getForDownload();
});
