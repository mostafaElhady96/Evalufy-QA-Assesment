export class LandingPage {
    // locators
    //landing page
    firstnameInput='input[name="firstName"]';
    lastnameInput='input[name="lastName"]';
    emailInput='input[name="email"]';
    startbutton='.v-btn__content > span';
    
    //terms and conditions
    termsAndConditions='.layout > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple'
    
    //startassessment button
   // startassesmentbutton= '.text-transofrm-none'
    
   //firstquestion page
    firstQuestionInput='input[data-vv-as="Question"]';
    //next button
    nextButton='.text-transofrm-none'
    // second question page
    secondQuestionselect='div[class="v-select__selections"]';

    // fourth question page
    fourthQuestionTextArea='textarea[data-vv-name="Long text"]';
    
   
    //methods
    enterFirstName(firstname) {
        cy.get(this.firstnameInput).first().type(firstname, {force:true});
    }
    enterLastName(lastname) {
        cy.get(this.lastnameInput).first().type(lastname, {force:true});
    }       
    enterEmail(email) {
        cy.get(this.emailInput).first().type(email, {force:true});
    }
    clickStartButton() {
        cy.get(this.startbutton).should('be.visible').click();
    }

    //check terms and conditions
    checkTermsAndConditions() {
        cy.get(this.termsAndConditions).should('be.visible').click();
    }
    //Click on start button
    clickStartButton() {
        cy.get(this.startbutton).should('be.visible').click();
    }


    //Answer first question
    answerFirstQuestion(answer) {
        cy.get(this.firstQuestionInput).type(answer);
    }
    clickNextButton() {
        cy.get(this.nextButton).should('be.visible').click();
    }

    // Answer second question
    clickonsecondQuestion() {
        cy.get(this.secondQuestionselect).click({force:true});
        cy.contains('Egypt').click({force:true});
    }
 
    //answer third question
    answerThirdQuestion(answer) {
        cy.contains('Money').click();
    }

    //answer fourth question
    answerFourthQuestion(answer) {
        cy.get(this.fourthQuestionTextArea).click().type(answer);
    }

}