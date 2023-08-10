export function range() {
    const rangeSettings = document.getElementById("rangeSettings");
    const rangeText = document.getElementById("rangeText");

    rangeSettings.oninput = function() {
        rangeText.value = rangeSettings.value;
    }
}