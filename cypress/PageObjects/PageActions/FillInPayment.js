/// <reference types="cypress"/>
const on = require("../../Locators.json")

export default class PaymentInfo{

    // Choose currency  dropdown
    Currency (curr){
        cy.get(on.PaymentInfo.Currency).type(curr)
        cy.get('.deel-ui__select__option-container').click()

    }
    // Define the Payment rate text
    PaymentRate(text){
        cy.get(on.PaymentInfo.Rate).type(text)
      //  cy.get('.deel-ui__input-component__suffix').should('include','GBP')

    }

    // Define the payment frequency dropdown
    Frequency(freq){
        cy.get(on.PaymentInfo.Frequency).type(freq)
        cy.get('#react-select-7-option-0 > .deel-ui__select__option-container').click()

    }
    
    Next(){
        cy.get(on.PaymentInfo.Nextbtn).click()
    }

}