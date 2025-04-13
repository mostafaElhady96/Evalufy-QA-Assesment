import {LandingPage} from './Pages/landingpage.spec.js'

const page = new LandingPage()
describe('Evalufy QA Assesment tests', () => {

  beforeEach(()=>{
    cy.viewport(1280, 720) 
    cy.visit('https://test.evalufy.com/en/public/a144eab1-c731-c74c-cd6f-c5fb8fd84865')
    cy.get('b').should('be.visible')
  })

  
  
  it('End to End ', () => {
    page.enterFirstName('Mostafa')
    page.enterLastName('Elhady')
    const randomEmail = `testuser_${Math.random().toString(36).substring(2, 10)}@gmail.com`

    page.enterEmail(randomEmail)
    page.clickStartButton() 
    
    page.checkTermsAndConditions()
    page.clickStartButton() 

  
    page.clickNextButton()
    page.answerFirstQuestion('Mostafa')  
    cy.wait(1000)
    page.clickNextButton()

    page.clickonsecondQuestion()
    page.clickNextButton()

    page.answerThirdQuestion()
    page.clickNextButton()

    page.answerFourthQuestion('i am software test Engineer')
    page.clickNextButton()
    
    // i want to choose a date more dynamic by using for loop but i was limited by the time
    cy.get('input[aria-label="Choose a Date"]').click()
    cy.contains('15').click({force:true})
    page.clickNextButton()
 
    //click on start recording button
    cy.contains('Record Now').click({force:true}) 
    cy.wait(1000)
    // unfortunately i was not able to click on stop recoding 
    cy.contains('Stop Recording').click({force:true})
    
    })











  })
