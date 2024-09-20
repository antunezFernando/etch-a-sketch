const mainContainer = document.querySelector("#squares-container");

createSquares(50)

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
            squareDiv.addEventListener("mouseenter", (e) => {
                changeColor(e.target, "black");
            });
            rowDiv.appendChild(squareDiv);
        }
        mainContainer.appendChild(rowDiv);
    }
}

function changeColor(div, color) {
    div.style.backgroundColor = color
}