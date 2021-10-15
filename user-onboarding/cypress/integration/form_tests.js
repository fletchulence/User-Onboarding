describe('User App', ()=>{
  beforeEach(() =>{
    cy.visit('http://localhost:3000')
  })

  const firstNameInput = () => cy.get('input[name=firstName]')
  const lastNameInput = () => cy.get('input[name=lastName]')
  const emailInput = () => cy.get('input[name=email]')
  const passwordInput = () => cy.get('input[name=password]')
  const termsCheckbox = () => cy.get('input[name=serviceTerms]')
  const submitBtn = () => cy.get('button[id="submitBtn"]')

  it('sanity check to make sure this is working', () =>{
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
  })

  describe('all elements should exist', () =>{
    it('all elements should exist', () =>{
      firstNameInput().should('exist')
      lastNameInput().should('exist')
      emailInput().should('exist')
      passwordInput().should('exist')
      termsCheckbox().should('exist')
      submitBtn().should('exist')
    })
  })

  describe('All input areas are working properly', () =>{
    it('First name and last name are taking inputs', ()=>{
      firstNameInput().type('something');
      lastNameInput().type('something');
      // submitBtn().click();
      firstNameInput().should('have.value', 'something');
      lastNameInput().should('have.value', 'something');
    })
    it('Email is taking input', () => {
      emailInput().type('something')
      passwordInput().type('something')
      emailInput().should('have.value', 'something')
      passwordInput().should('have.value', 'something')
    })
  })

  describe('The submit button works properly', () =>{
    it('If one input is left blank, the submit button is still disabled', () => {
      firstNameInput().type('firstname');
      lastNameInput().type('lastname');
      emailInput().type('email@email.com');
      passwordInput().type('password');
      termsCheckbox().check(); //? all things should be filled -- submit enabled
      termsCheckbox().uncheck(); 
      submitBtn().should('be.disabled');
      termsCheckbox().check();
      passwordInput().clear();
      submitBtn().should('be.disabled');
      passwordInput().type('password');
      emailInput().clear();
      submitBtn().should('be.disabled');
      emailInput().type('email@email.com');
      lastNameInput().clear();
      submitBtn().should('be.disabled');
      lastNameInput().type('lastname');
      firstNameInput().clear();
      submitBtn().should('be.disabled');
    })
    it('Submit button does not display until all things are filled properly', () => {
      submitBtn().should('be.disabled');
      firstNameInput().type('firstname');
      submitBtn().should('be.disabled');
      lastNameInput().type('lastname');
      emailInput().type('email@email.com');
      submitBtn().should('be.disabled');
      passwordInput().type('password');
      submitBtn().should('be.disabled');
      termsCheckbox().click();
      submitBtn().should('not.be.disabled');
    })
  })

  describe('Errors show properly', () => {
    it('first name errors show', ()=> {
      firstNameInput().type('blah_blah');
      firstNameInput().clear();
      cy.contains('required');
      cy.contains('first');
    })
    it('last name errors show', ()=> {
      lastNameInput().type('blah_blah');
      lastNameInput().clear();
      cy.contains('required');
      cy.contains('last');
    })
    it('password errors show', ()=> {
      passwordInput().type('blah_blah');
      passwordInput().clear();
      cy.contains('required');
      cy.contains('password');
    })
    it('errors show for email', ()=>{
      emailInput().type('blah_blac');
      cy.contains('valid');
      emailInput().type('email@email.com');
      emailInput().clear();
      cy.contains('required');
      cy.contains('email');
    })
  })

  describe('form submits', () =>{
    it('data shows in DOM', () =>{
      firstNameInput().type('firstname');
      lastNameInput().type('lastname');
      emailInput().type('email@email.com');
      passwordInput().type('password');
      termsCheckbox().check();
      submitBtn().click();
      cy.contains('firstname')
      cy.contains('lastname')
      cy.contains('email@email.com')
      cy.contains('accepted')
    })
  })

})