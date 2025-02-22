// go back to ifElsechallenge github and add repo 

const readline = require('readline-sync');

let orcaAge = readline.question("How old are you? ") // GIVES USERS THE OPPRTUNITY TO ANSWER THE QUESTION


//let orcaAge = 6;

if (orcaAge > 20) {
    console.log("You are an adult");    
} else if (orcaAge <= 19 && orcaAge >=13) { 
    console.log("You are a teenager.");    
} else {
    console.log("You are a child.");    
}
