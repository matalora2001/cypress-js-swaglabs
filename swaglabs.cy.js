describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/v1/')

    //variables que almacenan los datos de auth del usuario
    const username = 'standard_user'
    const password = 'secret_sauce'   

    cy.get('#user-name').type(username)
    cy.get('#password').type(password)

    cy.get('.btn_action').click()

    
    cy.get('#item_2_title_link').click()
    cy.get('.inventory_details_price').should('have.text', '$7.99')

    cy.get('.btn_primary').click()

   cy.get('.inventory_details_back_button').click({force: true})
   //.should('have.text', '<- Back')

   cy.get('.app_logo')

//

    cy.get('#item_4_title_link').click()
    cy.get('.inventory_details_price').should('have.text', '$29.99')

    cy.get('.btn_primary').click()

   cy.get('.inventory_details_back_button').click({force: true})
   //.should('have.text', '<- Back')

   cy.get('.app_logo')

   cy.get('.shopping_cart_badge').should('have.text', '2')

    cy.get('.svg-inline--fa').click()

    cy.get('.subheader').should('have.text', 'Your Cart')
    cy.get('.checkout_button').click()

    //llenando formulario
    const firstname = 'Blue'
    const lastname = 'Brown'
    const zipcode = '91000'

    cy.get('#first-name').type(firstname)
    cy.get('#last-name').type(lastname)
    cy.get('#postal-code').type(zipcode)

    cy.get('.btn_primary').click()

    
    cy.get('.summary_total_label').should('have.text', 'Total: $41.02')
    cy.get('.btn_action').click()

    cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
  })



})