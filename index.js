const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordBtn = document.getElementById("password-btn")
const firstPasswordEl = document.getElementById("first-password-el")
const secondPasswordEl = document.getElementById("second-password-el")
const buttons = document.querySelectorAll('.copy');
let firstPassword = ""
let secondPassword = ""
let passwordLength = 15

function getRandomChar() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generatePassword() {
    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        password += getRandomChar()
    }
    return password
}



console.log(firstPassword)
passwordBtn.addEventListener("click", function() {
    firstPassword = generatePassword()
    secondPassword = generatePassword()
    firstPasswordEl.textContent = firstPassword
    secondPasswordEl.textContent = secondPassword
})

function copyToClipboard(elementId) {
    const content = document.getElementById(elementId).innerText;
    alert('Copied to clipboard!');
}

buttons.forEach(button => {
    button.addEventListener("click", function() {
        copyToClipboard(button.id)
    })
})