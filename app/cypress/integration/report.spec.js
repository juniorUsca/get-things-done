context("Correcto enrutamiento a la pagina de Reporte", () => {
    beforeEach(()=> {
        cy.visit("http://localhost:3000/report")
    })

    it("OK?", () =>{
        cy.get("label").contains("Nombre");
    })

    it('Prueba de llenado de campos formulario', () =>{
        cy.get('#fname').type('My User')
        cy.get('#subject').type('Me parece una muy buena aplicacion ningun reclamo :)')
        cy.get('#sub-mit').click()
    })
});