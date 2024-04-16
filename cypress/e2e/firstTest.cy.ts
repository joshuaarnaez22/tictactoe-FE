describe("demo", () => {
  it("checks if Start new game button exist and working", () => {
    cy.visit(" http://localhost:5173/");

    cy.get('[data-testid="new-game"]')
      .should("exist")
      .should("contain", "Start New Game")
      .click();

    cy.get('[data-testid="player-1"]')
      .should("exist")
      .focus()
      .type(generateRandomName(5));

    cy.get('[data-testid="player-2"]')
      .should("exist")
      .focus()
      .type(generateRandomName(5));

    cy.get('[data-testid="start-game"]')
      .should("exist")
      .should("contain", "Start Game")
      .click();

    cy.get('[data-testid="board"]').should("exist");

    cy.get('[data-testid="board"]').should("exist");
    cy.get('[data-testid="reset-game"]')
      .should("exist")
      .should("contain", "Reset");
    cy.get('[data-testid="score-p1"]').should("exist");
    cy.get('[data-testid="score-p2"]').should("exist");
    cy.get('[data-testid="score-draw"]').should("exist");

    for (let i = 0; i <= 8; i++) {
      cy.get(`[data-testid="box-${i}"]`).should("exist");
    }

    cy.get('[data-testid="box-0"]').click();
    cy.get('[data-testid="box-8"]').click();
    cy.get('[data-testid="box-3"]').click();
    cy.get('[data-testid="box-4"]').click();
    cy.get('[data-testid="box-6"]').click();

    cy.get('[data-testid="span-score-p1"]')
      .invoke("text")
      .then((initialCount) => {
        const count = Number(initialCount);
        expect(count).to.equal(1);
      });

    cy.get('[data-testid="span-score-p2"]')
      .invoke("text")
      .then((initialCount) => {
        const count = Number(initialCount);
        expect(count).to.equal(0);
      });

    cy.get('[data-testid="span-score-draw"]')
      .invoke("text")
      .then((initialCount) => {
        const count = Number(initialCount);
        expect(count).to.equal(0);
      });

    cy.get('[data-testid="title"]')
      .should("exist")
      .should("contain", "Game Over");

    cy.get('[data-testid="stop"]').should("exist").should("contain", "Stop");

    cy.get('[data-testid="continue"]')
      .should("exist")
      .should("contain", "Continue");

    cy.get('[data-testid="continue"]').click();
    cy.get('[data-testid="reset-game"]')
      .should("exist")
      .should("contain", "Reset");
    cy.get('[data-testid="score-p1"]').should("exist");
    cy.get('[data-testid="score-p2"]').should("exist");
    cy.get('[data-testid="score-draw"]').should("exist");

    cy.get('[data-testid="span-score-p1"]')
      .should("exist")
      .should("contain", "1");
    cy.get('[data-testid="span-score-p2"]')
      .should("exist")
      .should("contain", "0");
    cy.get('[data-testid="span-score-draw"]')
      .should("exist")
      .should("contain", 0);

    cy.get('[data-testid="box-2"]').click();
    cy.get('[data-testid="box-4"]').click();
    cy.get('[data-testid="box-6"]').click();
    cy.get('[data-testid="box-0"]').click();
    cy.get('[data-testid="box-8"]').click();
    cy.get('[data-testid="box-3"]').click();
    cy.get('[data-testid="box-5"]').click();

    cy.get('[data-testid="span-score-p1"]')
      .invoke("text")
      .then((initialCount) => {
        const count = Number(initialCount);
        expect(count).to.equal(1);
      });

    cy.get('[data-testid="span-score-p2"]')
      .invoke("text")
      .then((initialCount) => {
        const count = Number(initialCount);
        expect(count).to.equal(1);
      });

    cy.get('[data-testid="span-score-draw"]')
      .invoke("text")
      .then((initialCount) => {
        const count = Number(initialCount);
        expect(count).to.equal(0);
      });

    cy.get('[data-testid="title"]')
      .should("exist")
      .should("contain", "Game Over");

    cy.get('[data-testid="stop"]').should("exist").should("contain", "Stop");

    cy.get('[data-testid="continue"]')
      .should("exist")
      .should("contain", "Continue");

    cy.get('[data-testid="continue"]').click();
    cy.get('[data-testid="reset-game"]')
      .should("exist")
      .should("contain", "Reset");
    cy.get('[data-testid="score-p1"]').should("exist");
    cy.get('[data-testid="score-p2"]').should("exist");
    cy.get('[data-testid="score-draw"]').should("exist");

    cy.get('[data-testid="span-score-p1"]')
      .should("exist")
      .should("contain", "1");
    cy.get('[data-testid="span-score-p2"]')
      .should("exist")
      .should("contain", "1");
    cy.get('[data-testid="span-score-draw"]')
      .should("exist")
      .should("contain", 0);

    // cy.get('[data-testid="reset-game"]')
    //   .should("exist")
    //   .should("contain", "Reset")
    //   .click();

    // for (let i = 0; i <= 8; i++) {
    //   cy.get(`[data-testid="box-${i}"]`)
    //     .invoke("text")
    //     .then((inititalText) => {
    //       const empty = inititalText;
    //       expect(empty.trim()).to.equal("");
    //     });
    // }
  });
});

const generateRandomName = (len: number) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < len; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
};
