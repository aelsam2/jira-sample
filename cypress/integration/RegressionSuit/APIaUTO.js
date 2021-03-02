///<reference types="cypress"/>
describe("API auto", function(){
   let username = 'damsUdcd'

it ("POST API", function()
{   
    cy.request({
        method: 'POST',
        url: 'https://api-test.surfboard.one/api/v1/reserve-usernames/reserve-username?username=`${username}`',
    }).its('headers')
    .its('content-type')
    .should('include', 'application/json').its('statusCode')
    .should('equal', 200);
    })

    it.only ("POST API", function()
{   
    cy.request({
        method: 'POST',
        url: 'https://api-test.surfboard.one/api/v1/reserve-usernames/reserve-username?username=damsUdcd',
    }).as('API')
    cy.get('@API').its('body.data')
    .should('include', { username: "damsUdcd" })
    cy.get('@API').its('body').should('include', { statusCode: 200 })
    })
    

    
    
})
