export function password() {
    const passwordLength = document.getElementById("rangeText");
    const upperChars = document.getElementById("upperCase");
    const lowerChars = document.getElementById("lowerCase");
    const specialChars = document.getElementById("specialCharacters");
    const numbers = document.getElementById("numbers");
    const engChars = document.getElementById("eng");
    const rusChars = document.getElementById("rus");
    const btnGeneration = document.getElementById("btnGeneration");
    const resultBlock = document.querySelector(".result");
    const passwordResult = document.getElementById("passwordResult");

    let engUpperLang = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let engLowerLang = "abcdefghijklmnopqrstuvwxyz";
    let rusUpperLang = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
    let rusLowerLang = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    let otherCharacters = "%*()?!@#~";
    let numberCharacters = "0123456789";
    let resultChar;
    
    btnGeneration.addEventListener("click", createPassword);    

    function createPassword() {

        function generateNumber() {
            resultChar = Math.floor(Math.random() * 10);
        }
        
        function generateOtherChar() {
            let random = Math.floor(Math.random() * 8);
            resultChar = otherCharacters[random];
        }

        function generateEngLowerChar() {
            let random = Math.floor(Math.random() * 25);
            resultChar = engLowerLang[random];
        }

        function generateEngUpperChar() {
            let random = Math.floor(Math.random() * 25);
            resultChar = engUpperLang[random];
        }

        function generateRusUpperChar() {
            let random = Math.floor(Math.random() * 32);
            resultChar = rusUpperLang[random];
        }

        function generateRusLowerChar() {
            let random = Math.floor(Math.random() * 32);
            resultChar = rusLowerLang[random];
        }

        function generateNumbersAndOtherChar() {
            let characters = otherCharacters + numberCharacters;
            let random = Math.floor(Math.random() * 18);
            resultChar = characters[random];
        }

        function generateEngUpperAndNumbers() {
            let characters = engUpperLang + numberCharacters;
            let random = Math.floor(Math.random() * 35);
            resultChar = characters[random];
        }

        function generateEngLowerAndNumbers() {
            let characters = engLowerLang + numberCharacters;
            let random = Math.floor(Math.random() * 35);
            resultChar = characters[random];
        }

        function generateRusUpperAndNumbers() {
            let characters = rusUpperLang + numberCharacters;
            let random = Math.floor(Math.random() * 42);
            resultChar = characters[random];
        }

        function generateRusLowerAndNumbers() {
            let characters = rusLowerLang + numberCharacters;
            let random = Math.floor(Math.random() * 42);
            resultChar = characters[random];
        }

        function generateEngUpperAndSpecialChars() {
            let characters = engUpperLang + otherCharacters;
            let random = Math.floor(Math.random() * 33);
            resultChar = characters[random];
        }

        function generateEngLowerAndSpecialChars() {
            let characters = engLowerLang + otherCharacters;
            let random = Math.floor(Math.random() * 33);
            resultChar = characters[random];
        }

        function generateRusUpperAndSpecialChars() {
            let characters = rusUpperLang + otherCharacters;
            let random = Math.floor(Math.random() * 40);
            resultChar = characters[random];
        }

        function generateRusLowerAndSpecialChars() {
            let characters = rusLowerLang + otherCharacters;
            let random = Math.floor(Math.random() * 40);
            resultChar = characters[random];
        }

        function checkSettings() {
            if (upperChars.checked == true && engChars.checked == true && numbers.checked == true) {
                generateEngUpperAndNumbers();
            } else if (lowerChars.checked == true && engChars.checked == true && numbers.checked == true) {
                generateEngLowerAndNumbers();
            } else if (lowerChars.checked == true && rusChars.checked == true && numbers.checked == true) {
                generateRusLowerAndNumbers();
            } else if (upperChars.checked == true && rusChars.checked == true && numbers.checked == true) {
                generateRusUpperAndNumbers();
            } else if (upperChars.checked == true && engChars.checked == true && specialChars.checked == true) {
                generateEngUpperAndSpecialChars();
            } else if (lowerChars.checked == true && engChars.checked == true && specialChars.checked == true) {
                generateEngLowerAndSpecialChars();
            } else if (lowerChars.checked == true && rusChars.checked == true && specialChars.checked == true) {
                generateRusLowerAndSpecialChars();
            } else if (upperChars.checked == true && rusChars.checked == true && specialChars.checked == true) {
                generateRusUpperAndSpecialChars();
            } else
            if (specialChars.checked == true && numbers.checked == true) { 
                generateNumbersAndOtherChar();
            } else if (upperChars.checked == true && engChars.checked == true) {
                generateEngUpperChar();
            } else if (upperChars.checked == true && rusChars.checked == true) {
                generateRusUpperChar();
            } else if (lowerChars.checked == true && engChars.checked == true) {
                generateEngLowerChar();
            } else if (lowerChars.checked == true && rusChars.checked == true) {
                generateRusLowerChar();
            } else if (specialChars.checked == true) {
                generateOtherChar();
            } else if (numbers.checked == true) {
                generateNumber();
            }
        }

        function generatePassword() {
            let length = passwordLength.value;
            let password = "";
            for (let i = 0; i < length; i++) {
                checkSettings();
                password += resultChar;
            }
            resultBlock.classList.add("show");
            passwordResult.innerText = password;
        }
        generatePassword();

    }
}