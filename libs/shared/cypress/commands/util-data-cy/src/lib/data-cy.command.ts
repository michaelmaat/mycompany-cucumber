export class DataCyCommand {
  public static dataCy(
    value: string,
    options?: Partial<
      Cypress.Loggable &
        Cypress.Timeoutable &
        Cypress.Withinable &
        Cypress.Shadow
    >
  ): Cypress.Chainable<JQuery> {
    // Cypress escapeSelector is needed to match data cy tags with a special characters in the value like a dot or slash
    return cy.get(`[data-cy=${Cypress.$.escapeSelector(value)}]`, options);
  }
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    // Disable interface I prefix to match Cypress default
    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface Chainable {
      dataCy(
        value: string,
        options?: Partial<
          Cypress.Loggable &
            Cypress.Timeoutable &
            Cypress.Withinable &
            Cypress.Shadow
        >
      ): Cypress.Chainable<JQuery>;
    }
  }
}

Cypress.Commands.add('dataCy', DataCyCommand.dataCy);
