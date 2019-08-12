// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import { extendCypress } from '@laura-wert/vue-test-helpers'

extendCypress(Cypress, cy)

Cypress.Commands.add('errorGetRequest', (url, msg) => {
  cy.fixture('Error').then((error) => {
    error.message = msg
  }).as('fxError')
  return cy.route({
    url,
    method: 'GET',
    response: '@fxError',
    status: 400,
  })
})
