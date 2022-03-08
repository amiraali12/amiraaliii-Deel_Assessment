/// <reference types="cypress"/>
const on = require("../../Locators.json")

export default class GeneraInfo{
    // fill in the Contract name
    Fillname(name){
        const Cname= cy.get(on.FixedRatePage.GeneralInfoPage.ContractName)
        Cname.clear()
        Cname.type(name)
        return this
        
    }
    //Choose the tax residence 
    TaxResidence(tax){
       cy.get(on.FixedRatePage.GeneralInfoPage.ResidenceTax).type(tax)
       cy.get(on.FixedRatePage.GeneralInfoPage.dropDown).click()
    }
    // Choose state 
    DefineState(state){

       cy.get(on.FixedRatePage.GeneralInfoPage.State).type(state)
       cy.get(on.FixedRatePage.GeneralInfoPage.dropDown).click()
       
    }
    // Choose the job title 
    DefineJob(job){
        cy.get(on.FixedRatePage.GeneralInfoPage.JobTitle).type(job)
        cy.get('.suggestions-box').click()
    }
    //choose senior level
    SeniorLevel(level){
        cy.get(on.FixedRatePage.GeneralInfoPage.SeniorLevel).type(level)
        cy.get(on.FixedRatePage.GeneralInfoPage.dropDown).click()
     }
    //Write the scope of work
    ScopeOfWork(text){
        cy.get(on.FixedRatePage.GeneralInfoPage.ScopeOfWork).type(text)
        
     }
    // state the start date of the contract
    SetDate(){
        cy.get(on.FixedRatePage.GeneralInfoPage.StartDate).click()
        cy.get(".react-calendar__month-view__days > :nth-child(7)").click()

        
    }
    // Click on next 
Next(){
    cy.get(on.FixedRatePage.GeneralInfoPage.NextBtn).click()
}

















}