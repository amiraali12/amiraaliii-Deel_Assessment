/// <reference types="cypress"/>
const on = require("../../Locators.json")

export default class DefineDatess{
    Next(){
        cy.get(on.DefineDates.NextBtn).click()
    }

}