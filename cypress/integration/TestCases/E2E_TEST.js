/// <reference types="cypress"/>
import GeneraInfo from "../../PageObjects/PageActions/FillGeneralInfo";
import LoginPage from "../../PageObjects/PageActions/LoginPageActions";
import PaymentInfo from "../../PageObjects/PageActions/FillInPayment";
import DefineDatess from "../../PageObjects/PageActions/DefinDates";
import BenifitsExtras from "../../PageObjects/PageActions/BenifitsExtras";
import HomePage from "../../PageObjects/PageActions/HomePage";
import Contract from "../../PageObjects/PageActions/CreateContract";
const ur = require("../../fixtures/URL.json")
 describe('Test suit', ()=>{

    
    before(function(){
       cy.fixture('LoginPage').then(function(data){
           globalThis.data = data
       })
       
    })
    
    it('Valid login ', function(){
        const lp= new LoginPage()
        lp.Visit()
        lp.FillEmail(data.email)
        lp.FillPassword(data.password)
        lp.submit()
        cy.wait(5000)
        cy.url().should("include",ur.HomePageURL)
    })
    it('Verification to go for the fixed rate contract page', function(){
        const fixedrate = new HomePage()
        fixedrate.ClickOnSideBar()
        fixedrate.ClickOnCreateContract()
        fixedrate.verify(ur.CreateContractURL)
        fixedrate.ClickOnFixedRate()
        fixedrate.verify(ur.FixedRateContractURL)
        
        
    })
    it('Fill in the general info', function(){

        const info = new GeneraInfo()
        info.Fillname('amira')
        info.TaxResidence('United State')
        info.DefineState('Colorado')
        info.DefineJob('3D Artist')
        info.SeniorLevel('Junior (Individual Contributor Level 1)')
        info.ScopeOfWork('Testing')
        info.SetDate()
        cy.wait(3000)
        info.Next()

        
    })
    it('Fill in the Payment info', function(){
        const pay = new PaymentInfo()
        pay.Currency('GBP - British Pound')
        pay.PaymentRate('1000')
        pay.Frequency('Weekly')
        pay.Next()
        

      
        
    })
    it('Proceed next for the define dates tap', function(){
        const Date = new DefineDatess()
        Date.Next()
    })

    it('Proceed next for the Benifits and extras', function(){
        const ex = new BenifitsExtras()
        ex.Next()
    })
    it('Verify that the contract created successfully ', function(){
        const c = new Contract()
        c.Create()
    })
    

    
 })