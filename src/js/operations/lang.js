export function lang() {
    let upperCaseInput = document.getElementById("upperCase");
    let lowerCaseInput = document.getElementById("lowerCase");
    let engInput = document.getElementById("eng");
    let rusInput = document.getElementById("rus");

    upperCaseInput.addEventListener("change", isLang);
    lowerCaseInput.addEventListener("change", isLang);

    function isLang() {
        if (upperCaseInput.checked == false && lowerCaseInput.checked == false) {
            engInput.checked = false;
            rusInput.checked = false;
            engInput.disabled = true;
            rusInput.disabled = true;
        } else if(upperCaseInput.checked == true || lowerCaseInput.checked == true) {
            engInput.disabled = false;
            rusInput.disabled = false;
            engInput.checked = true;
        }
    }
}