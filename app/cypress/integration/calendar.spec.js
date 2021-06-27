context("Correcto enrutamiento a la pagina de calendario", () => {
    beforeEach(()=> {
        cy.visit("http://localhost:3000/calendar")
    })

    it("OK?", () =>{
        cy.get("title").contains("Calendario");
    })
});