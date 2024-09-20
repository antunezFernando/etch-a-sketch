const mainContainer = document.querySelector("#main-container");

createSquares(40)

function createSquares(num) {
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