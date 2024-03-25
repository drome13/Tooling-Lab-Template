describe(`template spec`, () => {
  it(`types name, selects option from dropdown, and confirms history log is correct`, () => {
    
    let name = `David Rome`;
    let choice = `rock`;

  

    cy.visit(`http://127.0.0.1:8082/`); 

    // Type your name
    cy.get(`#username`).type(name);
    cy.get(`#start-game-button`).click();

    // Select option from dropdown
    cy.get(`#user-selection`).select(choice);
    cy.get(`#go-button`).click();


    //verify history
    cy.get(`#game-history`)
    .first()
    .should(`contain.text`, name)
    .and(`contain.text`,choice)
  })
})