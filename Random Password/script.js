const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+-={}[]|;<>?/";
const allChar = upperCase + lowerCase + number + symbol;
const createPassword = () => {
    let pass = "";
    pass += upperCase[Math.floor(Math.random() * upperCase.length)];
    pass += lowerCase[Math.floor(Math.random() * upperCase.length)];
    pass += number[Math.floor(Math.random() * upperCase.length)];
    pass += symbol[Math.floor(Math.random() * upperCase.length)];

    while(12 > pass.length){
        pass += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passwordBox.value = pass;
}

async function copyPassword() {
    try {
        await navigator.clipboard.writeText(passwordBox.value);
    } catch (err) {
        console.error("Cannot copy:", err);
    }
}
