let keyCombination = "";
let action = "";

function configureKeyAction() {
    const keyInput = document.getElementById("keyInput");
    const actionInput = document.getElementById("actionInput");

    keyCombination = keyInput.value.trim();
    action = actionInput.value.trim();

    if (keyCombination !== "" && action !== "") {
        alert(`Key combination "${keyCombination}" configured for action: ${action}`);
        resetInputs();
    } else {
        alert("Please enter both key combination and action.");
    }
}

function resetInputs() {
    document.getElementById("keyInput").value = "";
    document.getElementById("actionInput").value = "";
}
