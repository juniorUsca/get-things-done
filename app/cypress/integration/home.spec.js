/// <reference types="cypress"/>

context("Correcto funcionamiento de ruta principal (LOGIN)", () => {
    beforeEach(()=> {
        cy.visit("http://localhost:3000")
    })

    it("Se encontro el login", () =>{
        cy.get("h1").contains("Sign In");
    })


    it('Prueba de llenado de campos en login', () =>{
        cy.get('[name="email"]').type('test@test.com')
        cy.get('[name="password"]').type('test1234')
        cy.get('#sign-in').click()
    })

    it("Login con facebook", () =>{
        cy.get("#facebook").click()
    })

    it("Login con google", () =>{
        cy.get("#google").click();
    })

    it("Login con GitHub", () =>{
        cy.get("#github").click();
    })

});

