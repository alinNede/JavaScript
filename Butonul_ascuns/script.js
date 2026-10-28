let numberOfButtons = 0;
let buttonsToload = 0;
let winnerId = undefined;
const numberInput = document.getElementById("number-input");
const containerButton = document.getElementById("table");
const generator = document.getElementById("button-addon");

function addButton() {
    button = document.createElement("button");
    button.id = "button-" + numberOfButtons.toString();
    button.type = "button";
    button.className = "btn btn-outline-secondary btn-lg";
    button.textContent = "Button " + numberOfButtons.toString();
    ++numberOfButtons; 
    containerButton.appendChild(button);
    containerButton.appendChild(document.createElement("br"));
}

function loadButtons() {
    containerButton.innerHTML = "";
    numberOfButtons = 0;
    while (buttonsToload > 0) {
        addButton();
        --buttonsToload;
    }
    winnerId = selectWinner();
}

function selectWinner() {
    return Math.floor(Math.random() * numberOfButtons);
}

let revealButton = function() {
    if (this.id == "button-" + winnerId.toString()) {
        this.textContent = "Winner";
        this.className = "btn btn-success btn-lg";
    } else {
        this.textContent = "Lost";
        this.className = "btn btn-danger btn-lg";
    }
}

function addListenerToButtons() {
    let buttonElements = document.getElementsByClassName("btn btn-outline-secondary btn-lg");
    for (let i = 0; i < buttonElements.length ; ++i) {
        buttonElements[i].addEventListener("click", revealButton);
    }
}

generator.addEventListener("click", function() {
    buttonsToload = parseInt(numberInput.value);
    loadButtons();
    addListenerToButtons();
});




