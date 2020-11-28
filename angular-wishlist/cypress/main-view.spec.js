const { createYield } = require("typescript")

describe('ventana principal', () => {
    it('tiene encabezado correcto y en español por defecto', () => {
        cy.visit('http://localhost:4200');
        cy.contains('angular-wishlist');
        cy.get('h1 b').should('contain', 'HOLA es')
    });
});