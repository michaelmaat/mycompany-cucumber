export class WaitHelper {
  public static getForDownload(): Cypress.Chainable<undefined> {
    return cy.wait(100);
  }
}
