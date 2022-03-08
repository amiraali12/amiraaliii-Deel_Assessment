/// <reference types="cypress"/>
const on = require("../../Locators.json")

export default class Contract{
    Create(){
        
            cy.get(on.CreateContract).click()
        
    
    }
 
 
}