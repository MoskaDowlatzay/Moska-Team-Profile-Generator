const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

function multipleChoice() {
    const questions = [
      {
        name: "name",
        message: "What is your team managers name?",
      },
      {
          type:"list",
          name: "role",  
          message: "Enter one of the following roles.", 
          choices: ["Manager","Engineer","Intern"]
      }
    ];

    inquirer.prompt(questions).then((answers) => {
      if (answers.options === "Option 1") {
        one();
      } else if ((answers.options = "Option 2")) {
        two();
      } else if ((answers.options = "Option 3")) {
        three();
      }
    });
  }
  function one() {
    const questions = [
        {
          name: "name",
          message: "What is your team managers name?",
        },
        {
            type:"list",
            name: "role",  
            message: "Enter one of the following roles.", 
            choices: ["Manager","Engineer","Intern"]
        }
      ];
  
  }

    // Code to add an Engineer 
  function Engineer() {
    const questions = [
        {
          name: "name",
          message: "What is your team managers name?",
        },
        {
            type:"list",
            name: "role",  
            message: "Enter one of the following roles.", 
            choices: ["Manager","Engineer","Intern"]
        }
      ];
  
  }

    // Code to add an Intern 
  function Intern() {
    const questions = [
        {
          name: "name",
          message: "What is your team managers name?",
        },
        {
            type:"list",
            name: "role",  
            message: "Enter one of the following roles.", 
            choices: ["Manager","Engineer","Intern"]
        }
      ];
  
  }
  
  multipleChoice();