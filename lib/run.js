const inquirer = require("inquirer");
const SVG = require("./svg");
const { createCircle, createTriangle, createSquare } = require("./shapes");
const { writeFile } = require("fs/promises");

class RUN {
  run() {
    return inquirer
      .prompt([
        {
          name: "text",
          type: "input",
          message:
            "Enter Your logo Text. Must be no more then 3 characters.",
          validate: (text) =>
            text.length <= 3 ||
            "The message cannot have more than 3 characters.",
        },
        {
          name: "textColor",
          type: "input",
          message: "Enter the color of your text",
        },
        {
          name: "shapeType",
          type: "list",
          message: "Select a shape for your logo",
          choices: ["circle", "square", "triangle"],
        },
        {
          name: "shapeColor",
          type: "input",
          message: "Enter the color for your shape",
        },
      ])
      .then(({ text, textColor, shapeType, shapeColor }) => {
        let shape;
        switch (shapeType) {
          case "triangle":
            shape = createTriangle(shapeColor);
            break;

          case "square":
            shape = createSquare(shapeColor);
            break;

          case "circle":
            shape = createCircle(shapeColor);
            break;
        }

        const svg = new SVG();
        svg.setText(text, textColor);
        svg.setShape(shape);
        return writeFile("logo.svg", svg.render());
      })
      .then(() => {
        console.log("Generated logo.svg and created file");
      });
  }
}

module.exports = RUN;
