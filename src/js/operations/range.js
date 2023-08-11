export function range() {
    let rangeSettings = document.getElementById("rangeSettings");
    let rangeText = document.getElementById("rangeText");

    rangeSettings.oninput = function() {
        rangeText.value = rangeSettings.value;
    }
}