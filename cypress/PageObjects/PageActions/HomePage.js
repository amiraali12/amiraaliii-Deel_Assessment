/// <reference types="cypress"/>
const on = require("../../Locators.json")

export default class HomePage{
    // Click on the side bar
    ClickOnSideBar(){
        const sidebar = cy.get(on.HomePage.SideBarBTN)
        sidebar.click()
    }
    // Click on Create Contract 
    ClickOnCreateContract(){
        const create = cy.get(on.HomePage.CreateContractBtn)
        create.click()
    }
     
     // click on Fixed rate contract 
   ClickOnFixedRate(){
    const button = cy.get(on.HomePage.FixedRateContract)
    button.click()
   }
   // Verify that the page navigation is correct through URL 
   verify(value){
       cy.url().should("include",value)
   }




}