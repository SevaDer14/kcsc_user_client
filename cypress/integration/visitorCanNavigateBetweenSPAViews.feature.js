/* eslint-disable no-undef */
describe('visitor cna navigate between views', () => {
  describe('Index View', () => {
    before(() => {
      cy.visit('/');
    });
    it('is expected to display view subtitle', () => {
      cy.get('[data-cy=header-logo]')
        .should('have.attr', 'alt')
        .should('equal', 'Kensington & Chelsea Social Council');

      cy.get('[data-cy=header-subtitle]').should(
        'contain.text',
        'Self care for better health'
      );
    });
    it('is expected to display footer', () => {
      cy.get('[data-cy=application-footer]').within(() => {
        cy.get('[data-cy=logo]').should('be.visible');
        cy.get('[data-cy=about]').should(
          'contain.text',
          'Community Health West London is a Community Interest Company made up'
        );
        cy.get('[data-cy=email]').should(
          'contain.text',
          'info@communityhealthwestlondon.org.uk'
        );
        cy.get('[data-cy=phone]').should(
          'contain.text',
          'Phone: 0207 243 9806'
        );        
        cy.get('[data-cy=navigation]').within(() => {
          cy.get('[data-cy=link]').should('have.length', 2);
          cy.get('[data-cy=link]').eq(0).should('contain', 'home');
          cy.get('[data-cy=about]').eq(1).should('contain', 'about');
        });
      });
    });
  });

  describe('About View', () => {
    before(() => {
      cy.visit('/about');
    });
    it('is expected to display view subtitle', () => {
      cy.get('[data-cy=header-subtitle]').should('contain.text', 'About us');
    });
  });

  describe('Search View', () => {
    before(() => {
      cy.visit('/search');
    });
    it('is expected to display view subtitle', () => {
      cy.get('[data-cy=header-subtitle]').should('contain.text', 'Search');
    });
  });
});
