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
    let otherCharacters = "%*()?!@#~-+/$&=<>_";
    let numberCharacters = "0123456789";
    let resultChar;
    
    btnGeneration.addEventListener("click", createPassword);    
    
    function createPassword() {

      function generateChar(lengthArray) {
        let characters = "";
        for (let i = 1; i < arguments.length; i++) {
            characters += arguments[i];
        }
        let random = Math.floor(Math.random() * lengthArray);
        resultChar = characters[random];
      }

      function checkSettings() {
        if (upperChars.checked == true && engChars.checked == true && specialChars.checked == true && numbers.checked == true && lowerChars.checked == true) {
            generateChar(78, numberCharacters, engLowerLang, engUpperLang, otherCharacters);
        } else if (upperChars.checked == true && rusChars.checked == true && specialChars.checked == true && numbers.checked == true && lowerChars.checked == true) {
            generateChar(92, numberCharacters, rusLowerLang, rusUpperLang, otherCharacters);
        } else if (upperChars.checked == true && engChars.checked == true && specialChars.checked == true && numbers.checked == true) {
            generateChar(53, numberCharacters, engUpperLang, otherCharacters);
        } else if (lowerChars.checked == true && engChars.checked == true && specialChars.checked == true && numbers.checked == true) {
            generateChar(53, numberCharacters, engLowerLang, otherCharacters);
        } else if (upperChars.checked == true && rusChars.checked == true && specialChars.checked == true && numbers.checked == true) {
            generateChar(60, numberCharacters, rusUpperLang, otherCharacters);
        } else if (lowerChars.checked == true && rusChars.checked == true && specialChars.checked == true && numbers.checked == true) {
            generateChar(60, numberCharacters, rusLowerLang, otherCharacters);
        } else if (upperChars.checked == true && engChars.checked == true && lowerChars.checked == true && numbers.checked == true) {
            generateChar(60, engLowerLang, engUpperLang, numberCharacters);
        } else if (upperChars.checked == true && rusChars.checked == true && lowerChars.checked == true && numbers.checked == true) {
            generateChar(74, rusLowerLang, rusUpperLang, numberCharacters);
        } else if (upperChars.checked == true && engChars.checked == true && lowerChars.checked == true && specialChars.checked == true) {
            generateChar(68, engLowerLang, engUpperLang, otherCharacters);
        } else if (upperChars.checked == true && rusChars.checked == true && lowerChars.checked == true && specialChars.checked == true) {
            generateChar(82, rusLowerLang, rusUpperLang, otherCharacters);
        } else if (upperChars.checked == true && engChars.checked == true && lowerChars.checked == true) {
            generateChar(50, engLowerLang, engUpperLang);
        } else if (upperChars.checked == true && rusChars.checked == true && lowerChars.checked == true) {
            generateChar(64, rusLowerLang, rusUpperLang);
        } else if (upperChars.checked == true && engChars.checked == true && numbers.checked == true) {
            generateChar(35, numberCharacters, engUpperLang);
        } else if (lowerChars.checked == true && engChars.checked == true && numbers.checked == true) {
            generateChar(35, numberCharacters, engLowerLang);
        } else if (lowerChars.checked == true && rusChars.checked == true && numbers.checked == true) {
            generateChar(42, numberCharacters, rusLowerLang);
        } else if (upperChars.checked == true && rusChars.checked == true && numbers.checked == true) {
            generateChar(42, numberCharacters, rusUpperLang);
        } else if (upperChars.checked == true && engChars.checked == true && specialChars.checked == true) {
            generateChar(43, otherCharacters, engUpperLang);
        } else if (lowerChars.checked == true && engChars.checked == true && specialChars.checked == true) {
            generateChar(43, otherCharacters, engLowerLang);
        } else if (lowerChars.checked == true && rusChars.checked == true && specialChars.checked == true) {
            generateChar(50, otherCharacters, rusLowerLang);
        } else if (upperChars.checked == true && rusChars.checked == true && specialChars.checked == true) {
            generateChar(50, otherCharacters, rusUpperLang);
        } else if (specialChars.checked == true && numbers.checked == true) { 
            generateChar(28, otherCharacters, numberCharacters);
        } else if (upperChars.checked == true && engChars.checked == true) {
            generateChar(25, engUpperLang);
        } else if (upperChars.checked == true && rusChars.checked == true) {
            generateChar(32, rusUpperLang);
        } else if (lowerChars.checked == true && engChars.checked == true) {
            generateChar(25, engLowerLang);
        } else if (lowerChars.checked == true && rusChars.checked == true) {
            generateChar(32, rusLowerLang);
        } else if (specialChars.checked == true) {
            generateChar(18, otherCharacters);
        } else if (numbers.checked == true) {
            generateChar(10, numberCharacters);
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
        passwordResult.style.animation = "type 5s steps(50, end) 1";
      }

      generatePassword();
    }
}