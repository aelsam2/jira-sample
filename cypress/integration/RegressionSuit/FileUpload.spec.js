///<reference types="cypress"/>


describe("login functionality", function(){
   
it ("login with valid credentials", function()
{ cy.visit('/')
cy.get('.ng-tns-c70-2:nth-child(2)').click();
cy.get('#mat-option-3 > .mat-option-text').click();
cy.get('.ng-tns-c70-4:nth-child(2)').click();
cy.get('#mat-option-38 > .mat-option-text').click();
cy.get('.fillBtn').click();

cy.get('[title="Test 2"]').click();
cy.wait(5000)
cy.get(':nth-child(2) > .step-circle-container > .tick-image').click();
cy.wait(5000)
cy.get('.upload-link').click();


})
})