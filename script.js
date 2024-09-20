const squaresContainer = document.querySelector("#squares-container");

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

        let func = (event) => {
            mouseOverEvent(event);
        }

        squaresContainer.addEventListener("mousedown", (event) => {
            event.preventDefault();
            mouseDownEvent(squaresContainer, func);
        })

        squaresContainer.addEventListener("mouseup", () => {
            mouseUpEvent(squaresContainer, func);
        })
    }
}

function changeColor(div, color) {
    div.style.backgroundColor = color;
}

function mouseDownEvent(element, func) {
    element.addEventListener("mouseover", func);
}

function mouseOverEvent(event) {
    changeColor(event.target, "black");
}

function mouseUpEvent(element, functionToRemove) {
    element.removeEventListener("mouseover", functionToRemove);
}