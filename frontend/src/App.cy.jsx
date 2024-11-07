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


  describe('Error message when user types in more than 100 characters', () => {
    it('Types in to many characters and fails to encrypt message', () => {
      const testMessage = 'Test to type in over onehundreed characters to receive an error stating that the input text cannot be greater than 100 characters';

      cy.get('.input-field').type(testMessage);
      cy.get('.encrypt-btn').click();

      cy.get('.decrypted-text').should('be.empty');
      cy.get('.error').should('be.visible');
      cy.get('.error').contains('Input text cannot be greater than 100 characters.');

    })
  })

  describe('Error message when empty string or whitespace is given', () => {
    beforeEach(() => {
      cy.get('.input-field').clear();
    })

    it('Gets error message when trying to encrypt empty string', () => {
      cy.get('.encrypt-btn').click();

      cy.get('.decrypted-text').should('be.empty');
      cy.get('.error').should('be.visible');
      cy.get('.error').contains('Please enter text to encrypt.');

    })

    it('Gets error message when trying to encrypt whitespace', () => {
      const whitespace = " ";

      cy.get('.input-field').type(whitespace);
      cy.get('.encrypt-btn').click();

      cy.get('.decrypted-text').should('be.empty');
      cy.get('.error').should('be.visible');
      cy.get('.error').contains('Please enter text to encrypt.');

    })

    it('Gets error message when trying to decrypt empty string', () => {
      cy.get('.decrypt-btn').click();

      cy.get('.encrypted-text').should('be.empty');
      cy.get('.error').should('be.visible');
      cy.get('.error').contains('Please enter text to decrypt.');

    })

    it('Gets error message when trying to decrypt whitespace', () => {
      const whitespace = " ";

      cy.get('.input-field').type(whitespace);
      cy.get('.decrypt-btn').click();

      cy.get('.encrypted-text').should('be.empty');
      cy.get('.error').should('be.visible');
      cy.get('.error').contains('Please enter text to decrypt.');

    })
  })

})