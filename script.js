const mainContainer = document.querySelector("#main-container");

createSquares(16)

function createSquares(num) {
    if(typeof num !== "number" || num > 100 || num < 1) {
        alert("The input must be a number between 1 and 100")
        return
    }
    for(let i = 0; i < num; i++) {
        let rowDiv = document.createElement("div");
        for(let j = 0; j < num; j++) {
            let squareDiv = document.createElement("div");
            squareDiv.classList.add("square");
            squareDiv.style.width = `${90/num}vh`;
            squareDiv.style.height = `${90/num}vh`;
            rowDiv.appendChild(squareDiv);
        }
        mainContainer.appendChild(rowDiv);
    }
}