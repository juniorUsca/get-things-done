context("Correcto funcionamiento de ruta principal (REGISTER)", () => {
    beforeEach(()=> {
        cy.visit("http://localhost:3000")
    })

    it("Se encontro el register", () =>{
        cy.get("h1").contains("Create Account");
    })

    it('Prueba de llenado de campos en login', () =>{
        cy.get('#signUp').click()
        cy.get('[name="name"]').type('UsuarioTest')
        cy.get('[name="emailReg"]').type('test1@test.com')
        cy.get('[name="passwordReg"]').type('test12345')
        cy.get('#sign-up').click()
    })

    it("Registro con facebook?", () =>{
        cy.get("#facebook").click()
    })

    it("Login con google", () =>{
        cy.get("#google").click();
    })

    it("Login con GitHub", () =>{
        cy.get("#github").click();
    })
})