import React from "react";
import Quiz from "../../client/src/components/Quiz";
import { mount } from "cypress/react";

describe("Quiz Component", () => {
  it("renders the start button", () => {
    mount(<Quiz />);
    cy.get("button").contains("Start Quiz").should("be.visible");
  });
});
