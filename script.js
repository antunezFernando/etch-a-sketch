let squaresContainer = document.querySelector("#squares-container");

let colorPicker = document.querySelector("#color-picker");

let currentColor = "black";
let colorDiv = document.querySelector("#black");

let customColor = document.querySelector("#custom");
customColor.style.backgroundColor = getRandomColorString();

window.setInterval(() => {
    customColor.style.backgroundColor =
    getRandomColorString()
}, 1000);

initializeEventListeners();
createSquares(64)

function createSquares(number) {
    if(typeof number !== "number" || number > 100 || number < 1) {
        alert("The input must be a number between 1 and 100")
        return
    }

    for(let i = 0; i < number; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row-div");
        for(let j = 0; j < number; j++) {
            let squareDiv = document.createElement("div");
            squareDiv.classList.add("square");
            rowDiv.appendChild(squareDiv);
        }
        squaresContainer.appendChild(rowDiv);
    }
}

function initializeEventListeners() {
    let func = (event) => {
        mouseOverEvent(event);
    };

    squaresContainer.addEventListener("mousedown", (e) => {
        e.preventDefault();
        changeColor(e.target)
        mouseDownEvent(squaresContainer, func);
    });

    squaresContainer.addEventListener("mouseup", () => {
        mouseUpEvent(squaresContainer, func);
    });

    squaresContainer.addEventListener("mouseleave", () => {
        mouseLeaveEvent(squaresContainer, func);
    });

    colorPicker.addEventListener("click", (e) => {
        selectPredefinedColor(e.target);
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
    changeColor(event.target);
}

function mouseUpEvent(element, functionToRemove) {
    element.removeEventListener("mouseover", functionToRemove);
}

function mouseLeaveEvent(element, functionToRemove) {
    element.removeEventListener("mouseover", functionToRemove);
}

function changeColor(element) {
    element.style.backgroundColor = currentColor;
}

function selectPredefinedColor(element) {
    if(element.id !== "row-one" && element.id !== "row-two" && element.id !== "color-picker") {
        colorDiv.classList.remove("selected-color");
        currentColor = element.id;
        colorDiv = document.querySelector(`#${element.id}`);
        colorDiv.classList.remove("hover-button");
        colorDiv.classList.add("selected-color");
    }
}

function getRandomColorString() {
    return `rgb(${getRandomNumber(255)}, ${getRandomNumber(255)}, ${getRandomNumber(255)})`;
}

function applyStyleOnHover(element) {
    if(element.id !== "row-one" && element.id !== "row-two" && element.id !== "color-picker") {
        if(!element.classList.contains("selected-color")) {
            element.classList.add("hover-button");
        }
    }
}

function removeStyleOnLeave(element) {
    if(element.id !== "row-one" && element.id !== "row-two" && element.id !== "color-picker") {
        element.classList.remove("hover-button");
    }
}

function getRandomNumber(limit) {
    let num = Math.floor(Math.random() * limit);
    return num;
}

// pencil by <a href="https://www.freepik.com/free-vector/pencil_5028180.htm#fromView=search&page=1&position=0&uuid=8b012b02-dc8e-4401-8877-ade6763f877a">Image by gstudioimagen on Freepik</a>