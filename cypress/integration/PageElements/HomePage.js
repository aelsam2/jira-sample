///<reference types="cypress"/>
class HomePage{
    LoginButton(){
      return cy.get(".sign-in")
    }

}export default HomePage