import React from 'react'
import App from './App'

describe('<App />', () => {
  
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)
  })



  describe('User can type in text and encrypt message displaying encrypted text', () => {

    it('Types in text in input field', ()=> {
      cy.mount(<App />);
      cy.get('.input-field').type('Encrypt this message');
      cy.get('.encrypt-btn').click();
      cy.get('.encrypted-text').is('visible');
    })
  })
})