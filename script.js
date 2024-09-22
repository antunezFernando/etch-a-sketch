let infoDiv = document.querySelector("#info-div");
let infoContainer = document.querySelector("#info-container");
let infoButton = document.querySelector("#info-button");
let infoText = document.querySelector("#info-text");
let sidebarExpanded = false;
let squaresContainer = document.querySelector("#squares-container");

let canvasColor = "white";
let amountOfSquares = 16;

let squaresInput = document.querySelector("#number-squares");
let squaresInputButton = document.querySelector("#submit-number");
squaresInputButton.onclick = () => {
    createGrid(+squaresInput.value, canvasColor);

};

let clearButton = document.querySelector("#clear-button");
clearButton.onclick = () => {
    squaresContainer.classList.add("shake-animation");
    createGrid(amountOfSquares, canvasColor);

};

let canvasColorInput = document.querySelector("#canvas-color");
let canvasColorButton = document.querySelector("#submit-color");
canvasColorButton.onclick = () => {
    createGrid(amountOfSquares, canvasColorInput.value);
};

let eraser = document.querySelector("#eraser");

let colorPicker = document.querySelector("#color-picker");

let currentColor = "black";
let colorDiv = document.querySelector("#black");

let customColorElement = document.querySelector("#custom");
customColorElement.style.backgroundColor = getRandomColorString();

let customColorInput = document.querySelector("#custom-color-input");
customColorInput.onchange = () => {
    currentColor = customColorInput.value;
};

window.setInterval(() => {
    customColorElement.style.backgroundColor = getRandomColorString();
}, 500);

initializeEventListeners();
createGrid(16, canvasColor);

function createGrid(number, bgColor) {
    if(typeof number !== "number" || number > 100 || number < 1) {
        alert("The input must be a number between 1 and 100")
        return
    }
    
    squaresContainer.textContent = "";
    amountOfSquares = number;
    canvasColor = bgColor;

    for(let i = 0; i < number; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row-div");
        for(let j = 0; j < number; j++) {
            let squareDiv = document.createElement("div");
            squareDiv.style.backgroundColor = canvasColor;
            squareDiv.classList.add("square");
            rowDiv.appendChild(squareDiv);
        }
        squaresContainer.appendChild(rowDiv);
    }
}

function initializeEventListeners() {
    infoButton.addEventListener("click", () => {
        if(sidebarExpanded) {
            infoButton.setAttribute("src", "./images/menu.png");
        } else {
            infoButton.setAttribute("src", "./images/arrow.png");
        }
        infoDiv.classList.toggle("expanded");
        infoDiv.classList.toggle("condensed");
        infoText.classList.toggle("shown");
        infoText.classList.toggle("hidden");
        sidebarExpanded = !sidebarExpanded;
    });

    let func = (event) => {
        mouseOverEvent(event);
    };

    squaresContainer.addEventListener("mousedown", (e) => {
        e.preventDefault();
        changeSquareColor(e.target)
        mouseDownEvent(squaresContainer, func);
    });

    squaresContainer.addEventListener("mouseup", () => {
        mouseUpEvent(squaresContainer, func);
    });

    squaresContainer.addEventListener("mouseleave", () => {
        mouseLeaveEvent(squaresContainer, func);
    });

    squaresContainer.addEventListener("animationend", () => {
        squaresContainer.classList.remove("shake-animation");
    });

    colorPicker.addEventListener("click", (e) => {
        selectColor(e.target);
    });

    colorPicker.addEventListener("mouseover", (e) => {
        applyStyleOnHover(e.target);
    });

    colorPicker.addEventListener("mouseout", (e) => {
        removeStyleOnLeave(e.target);
    });
}

function mouseDownEvent(element, functionForMouseOver) {
    element.addEventListener("mouseover", functionForMouseOver);
}

function mouseOverEvent(event) {
    changeSquareColor(event.target);
}

function mouseUpEvent(element, functionToRemove) {
    element.removeEventListener("mouseover", functionToRemove);
}

function mouseLeaveEvent(element, functionToRemove) {
    element.removeEventListener("mouseover", functionToRemove);
}

function changeSquareColor(element) {
    if(element.classList.contains("square")) {
        element.style.backgroundColor = currentColor;
    }
}

function selectColor(element) {
    if(element.classList.contains("color-button") || element.classList.contains("eraser-button")) {
        colorDiv.classList.remove("selected-color");
        if(element.id == "eraser") {
            currentColor = canvasColor;
            colorDiv = document.querySelector("#eraser");
            squaresContainer.style.cursor = "url(./images/eraser.png), auto";
        } else if (element.id === "custom-color-input") {
            colorDiv = document.querySelector("#custom");
            squaresContainer.style.cursor = "url(./images/pencil.png), auto";
        } else {
            currentColor = element.id;
            colorDiv = document.querySelector(`#${element.id}`);
            squaresContainer.style.cursor = "url(./images/pencil.png), auto";
        }
        colorDiv.classList.remove("hover-button");
        colorDiv.classList.add("selected-color");
    }
}

function getRandomColorString() {
    return `rgb(${getRandomNumber(255)}, ${getRandomNumber(255)}, ${getRandomNumber(255)})`;
}

function applyStyleOnHover(element) {
    if(element.classList.contains("color-button") || element.classList.contains("eraser-button")) {
        if(element.id === "custom-color-input") {
            if(!customColorElement.classList.contains("selected-color")) {
                customColorElement.classList.add("hover-button");
            }
        } else {
            if(!element.classList.contains("selected-color")) {
                element.classList.add("hover-button");
            }
        }
    }
}

function removeStyleOnLeave(element) {
    if(element.classList.contains("color-button") || element.classList.contains("eraser-button")) {
        if(element.id === "custom-color-input") {
            customColorElement.classList.remove("hover-button");
        } else {
            element.classList.remove("hover-button");
        }
    }
}

function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit);
}