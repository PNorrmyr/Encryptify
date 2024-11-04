import React from 'react'
import DecryptButton from './DecryptButton'

describe('<DecryptButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DecryptButton />)
  })
})