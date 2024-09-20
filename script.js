let squaresContainer = document.querySelector("#squares-container");

let currentColor = "black";

initializeEventListeners();
createSquares(16)

function createSquares(num) {
    if(typeof num !== "number" || num > 100 || num < 1) {
        alert("The input must be a number between 1 and 100")
        return
    }

    for(let i = 0; i < num; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row-div");
        for(let j = 0; j < num; j++) {
            let squareDiv = document.createElement("div");
            squareDiv.classList.add("square");
            rowDiv.appendChild(squareDiv);
        }
        squaresContainer.appendChild(rowDiv);
    }
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

function changeColor(element) {
    element.style.backgroundColor = currentColor;
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
}

// pencil by <a href="https://www.freepik.com/free-vector/pencil_5028180.htm#fromView=search&page=1&position=0&uuid=8b012b02-dc8e-4401-8877-ade6763f877a">Image by gstudioimagen on Freepik</a>