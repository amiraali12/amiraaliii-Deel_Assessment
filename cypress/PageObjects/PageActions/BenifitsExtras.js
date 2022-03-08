/// <reference types="cypress"/>
const on = require("../../Locators.json")

export default class BenifitsExtras{
    Next(){
        cy.get(on.BenefitsExtras.NextBtn).click()
    }

}