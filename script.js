let squaresContainer = document.querySelector("#squares-container");

let colorPicker = document.querySelector("#color-picker");

// let blackButton = document.querySelector("#black");
// let whiteButton = document.querySelector("#white");
// let blueButton = document.querySelector("blue");
// let redButton = document.querySelector("red");

let currentColor = "black";
let colorDiv = document.querySelector("#black");

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

    squaresContainer.addEventListener("mousedown", (event) => {
        event.preventDefault();
        changeColor(event.target)
        mouseDownEvent(squaresContainer, func);
    });

    squaresContainer.addEventListener("mouseup", () => {
        mouseUpEvent(squaresContainer, func);
    });

    squaresContainer.addEventListener("mouseleave", () => {
        mouseLeaveEvent(squaresContainer, func);
    });

    colorPicker.addEventListener("click", e => {
        selectColor(e.target);
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

function selectColor(element) {
    colorDiv.classList.remove("selected-color");

    switch(element.id) {
        case "black":
            currentColor = "black";
            break;
        case "white":
            currentColor = "white";
            break;
        case "blue":
            currentColor = "blue";
            break;
        case "red":
            currentColor = "red";
            break;
    };
    
    colorDiv = document.querySelector(`#${element.id}`);
    element.classList.add("selected-color");
}

// pencil by <a href="https://www.freepik.com/free-vector/pencil_5028180.htm#fromView=search&page=1&position=0&uuid=8b012b02-dc8e-4401-8877-ade6763f877a">Image by gstudioimagen on Freepik</a>