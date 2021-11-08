const getTitle = () => cy.get("[data-testid=home-main-title]")
context("Home page", () => {
    it("should navigate to the home page", () => {
        cy.visit("/")
        getTitle().should("have.text", "Next.js TS App")
    })
})
