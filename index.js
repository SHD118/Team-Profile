const inqurier = require("inquirer")
const fs = require("fs")
var managerArray = []
var internArray = []
var employeeArray = []
var engineerArray = [];
var htmlCode;
promptManager()

function promptManager ()  {
    inqurier.prompt([
        {
            type: "input",
            message: "what is your name",
            name: "name"
        },
        {
            type: "input",
            message: "what is your id",
            name: "id"
        },
        {
            type: "input",
            message: "what is your email",
            name: "email"
        },
        {
            type: "input",
            message: "what is your office number",
            name: "officeNumber"
        },
        
    ])
        .then((data) => {
            console.log("here")
        managerArray.push(new Manager (data.name, data.id, data.email, data.officeNumber))
        selectRole()
    })
}

function promptIntern ()  {
    inqurier.prompt([
        {
            type: "input",
            message: "what is your name",
            name: "name"
        },
        {
            type: "input",
            message: "what is your id",
            name: "id"
        },
        {
            type: "input",
            message: "what is your email",
            name: "email"
        },
        {
            type: "input",
            message: "what is your school",
            name: "school"
        },
        
    ])
        .then((data) => {
            console.log("here3")
        internArray.push(new Intern (data.name, data.id, data.email, data.school))
        selectRole()
        })

}

function promptEngineer() {
    inqurier.prompt([
        {
            type: "input",
            message: "what is your name",
            name: "name"
        },
        {
            type: "input",
            message: "what is your id",
            name: "id"
        },
        {
            type: "input",
            message: "what is your email",
            name: "email"
        },
        {
            type: "input",
            message: "what is your github",
            name: "github"
        },
        
    ])
    .then((data) => {
       engineerArray.push(new Engineer (data.name, data.id, data.email, data.github))
       selectRole()
    })
    
}

function selectRole() {
    inqurier.prompt([
        {
            type: "list",
            choices: ["Intern", "Engineer", "Finishing building your team"],
            message: "Pick a role",
            name: "role"
        }
    ])
    .then((data) => {
        if (data.role === "Engineer") {
            promptEngineer();
        }
        if (data.role === "Intern") {
            promptIntern();
        }
        if (data.role === "Finishing building your team") {
            GenerateManager(managerArray);
            //generate egineer cards
            if (engineerArray) {
                GenerateEngineer(engineerArray);
            }
            if (internArray) {
                GenerateIntern(internArray);
            }
            renderHTML()
            init()
            console.log(renderHTML());

        }
     }) 
}
function renderHTML() {
    htmlCode= `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
       
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css" />
        
        <title>Document</title>
    </head>

    <header>
    
    <!-- Jumbotron -->
    <div class="p-5 text-center bg-danger my-5">
      <h1 class="mb-3">Heading</h1>
      <h4 class="mb-3">Subheading</h4>
      <a class="btn btn-primary" href="" role="button">Call to action</a>
    </div>
    <!-- Jumbotron -->
  </header>
    <body>
    <div class="container">`
        
         htmlCode +=employeeArrayReturn()
    htmlCode += `</div >
         </div>
    </body>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
   </html> `
    return htmlCode;
}