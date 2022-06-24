// function scope

function greeting() {
    let userName = "Andres";
    console.log(userName);

    if (userName === "Andres") {
        console.log(`Hello ${userName}!`)
    }
}

greeting();
console.log(userName); // La variable no es accesible