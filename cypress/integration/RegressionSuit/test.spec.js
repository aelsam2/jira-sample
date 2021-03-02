///<reference types="cypress"/>
import HomePage from '../PageElements/HomePage'
const homePage = new HomePage()

describe("login functionality", function(){
    before(function() {
        cy.on('uncaught:exception', (err, runnable) => {
           
            expect(err.message).to.include('something about the error')
            done()
            return false
          })
         // cy.visit("www.google.com/intl/en-GB/gmail/about/#")
          cy.wait(2000)
          cy.visit('/')
          cy.wait(2000)
          cy.get('.jss26:nth-child(2)').click();
        //   cy.contains("Use another account").click()
        //   cy.get('[id="identifierId"]').clear().type("aelsam2gmail.com")
        //   cy.get('[class="VfPpkd-vQzf8d"]').click()
        //   cy.get('[type="password"]').clear().type("1234")
        //   cy.contains("Next").click()
        // cy.visit('/')

    })
it ("login with valid credentials", function()
{  
    cy.wait(2000)
    cy.get('[id="email,first_name@_eq,last_name@_like,emp_id"]').click();
    cy.get('[id="email,first_name@_eq,last_name@_like,emp_id"]').type('180');
 cy.get('[class="MuiTableBody-root datagrid-body jss114"]').should("contain","180").should("contain","Sujith")
    
  

    
    
})

it ("login with valid credentials", function()
{ 
cy.get('.MuiButtonBase-root:nth-child(2) .jss99').click();

cy.get('#first_name').type('Jagani');
cy.get('#last_name').type('Vasan');


cy.get('#dob').click();
cy.get('#dob').type('2021-01-20');
cy.get('#personal_email').type('Jagani@getnada.com');
cy.get('#phone_number').type('09446756890');
cy.get('#alternate_contact_number').type('8745678903');

cy.get('#highest_academic_degree').type('Be');
cy.get('#institution_name').type('el tech');
cy.get('#blood_group').type('B+');
cy.get('#parent_name').type('Sujan');
cy.get('#aadhaar').type('678935670');;
cy.get('#pan').type('123hy4679');

cy.get('#emp_id').type('1245');
cy.get('#email').type('jans@perfo.com');
cy.get('#username').type('jansi');
cy.get('#join_date').click();
cy.get('#join_date').type('2021-01-08');

cy.get('.Mui-selected').dblclick();
cy.get('body').click();
cy.get('.MuiList-root > .MuiButtonBase-root:nth-child(7)').click();
cy.get('body').click();
cy.get('.MuiPaper-root:nth-child(3) .MuiButtonBase-root:nth-child(1)').click();

cy.get('#reportee_id').type('Akhila');
cy.get('body').click();
cy.get('.Mui-focusVisible').click();
cy.get('body').click();
cy.get('.Mui-focusVisible').click();
cy.get('body').click();
cy.get('.Mui-focusVisible').click();


cy.get('#emp_cost').type('120000');
cy.get('#emp_billing_cost').type('123456');

cy.get('#bank_name').type('HDFC');
cy.get('#branch_name').type('Technopark');
cy.get('#account_number').type('4567890268');
cy.get('#ifsc_code').type('qwerty679');

cy.get('#address\.houseName').type('dfg');
cy.get('#address\.streetName').type('vas');
cy.get('#address\.city').type('kkbb');
cy.get('#address\.state').type('kl');
cy.get('#address\.country').type('india');
cy.get('#address\.postalCode').type('639784');

cy.get('#prior_experience').type('10.3');

cy.get('.jss201 > path').click();

  

    
    
})
})