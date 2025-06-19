let userInput = " Alice JOhnson  |   Alice@example.com   |  Javascript developer and cofee Enthusiast. I love Javascript!   ";

let update = userInput.split("|");
console.log(update)
for (let i = 0; i < update.length; i++) {
    if (i == 0) {
        update[i] = update[i].trim().toUpperCase();
    }
    else {
        update[i] = update[i].trim();
    }

}
console.log(update);

let bio = update[update.length - 1];
let email = update[update.length - 2];
let name = update[update.length - 3];
console.log(bio.includes("Javascript"))

console.log(bio.replaceAll("Javascript", " js"));
console.log(bio.slice(0, 12));
console.log(email.includes("@") && email.endsWith(".com"));
console.log(name);


let separate = "-".repeat(30);
let finalprofilie = `

${separate}
    
userProfile:
Name   : ${name},
Email : ${email},
Bio : ${bio}
 ${separate}


`;

console.log(finalprofilie)