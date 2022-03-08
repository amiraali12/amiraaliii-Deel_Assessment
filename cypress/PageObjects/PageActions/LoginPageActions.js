/// <reference types="cypress"/>
const loc = require("../../Locators.json")
const ur = require("../../fixtures/URL.json")
export default class LoginPage{
    // Open the url to login to deel website 
    Visit (){
       return cy.visit(ur.LoginPageURL)
    }
   // Fill in the email
    FillEmail(username){
        const field= cy.get(loc.LoginPage.usernameField)
        field.clear()
        field.type(username)
        return this
    }
    // Fill in the password
    FillPassword(password){
        const field= cy.get(loc.LoginPage.PasswordField)
        field.clear()
        field.type(password)
        return this
    }

      // click on login button 
    submit(){
        const button = cy.get(loc.LoginPage.LoginBtn)
        button.click()
    }

}