export function copyPassword() {
    const result = document.getElementById("passwordResult");
    const btnCopy = document.getElementById("btnCopy");
    const resultCopy = document.getElementById("resultCopy");
    const copiedPassword = document.getElementById("copiedPassword");

    btnCopy.addEventListener("click", () => {
        let text = result.innerText;
        navigator.clipboard.writeText(text)
        .then(() => {
            copiedPassword.innerText = result.innerText;
            resultCopy.innerHTML = `Пароль "${copiedPassword.innerText}" скопирован`;
        })
        .catch(err => {
            copiedPassword.style.borderBotttom = "1px solid red";
            copiedPassword.innerText = result.innerText;
            resultCopy.innerHTML = `Пароль "${copiedPassword.innerText}" не был скопирован`;
            console.error("Error in copying text: ", err);
        });
    });
}