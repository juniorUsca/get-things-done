context("Correcto enrutamiento a la pagina de welcome", () => {
    beforeEach(()=> {
        cy.visit("http://localhost:3000/welcome")
    })

    it("OK?", () =>{
        cy.get("h2").contains("Get Things");
    })
});