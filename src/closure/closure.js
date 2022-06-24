function greeting() {
    let userName = "Andres";

    function dislayUserName() {
        return `Hello ${userName}`;
    }
    return dislayUserName;
}

const g = greeting();
console.log(g);
console.log(g());