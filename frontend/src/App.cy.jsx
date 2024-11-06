import React from 'react'
import App from './App'

describe('<App />', () => {
    beforeEach(() => {
      cy.mount(<App />);
    })
 

  describe('User can type in text, encrypt it, and then decrypt the message', () => {
    it('Encrypts and then decrypts a message', () => {
      const testMessage = 'Test message to encrypt and decrypt';
  
      cy.get('.input-field').type(testMessage);
  
      
      cy.get('.encrypt-btn').click();
  
     
      cy.get('.encrypted-text').should('be.visible').and('not.be.empty');
  
     
      cy.get('.decrypt-btn').click();
  
      cy.get('.decrypted-text')
        .should('be.visible')
        .and('contain', testMessage);
    });
  })
})