const container = document.querySelector(".container");

const INITIAL_SIZE = 16;
createGrid(INITIAL_SIZE);

const btn = document.querySelector(".btn");

btn.addEventListener('click', resizeGrid);


function createGrid(size) {
    for (let i = 0; i < size*size; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('grid-square');
        squareDiv.style.padding = 0;
        squareDiv.style.boxSizing = "border-box";
        squareDiv.style.border = '0.5px solid grey';
        squareDiv.style.flex =  "1 1 calc(100% / " + size + ")";
        
        container.appendChild(squareDiv);
    }

    let gridSquares = document.querySelectorAll(".grid-square");

    gridSquares.forEach(gridSquare => {
        gridSquare.addEventListener('mouseover', () => {
            let [r, g, b] = generateRandomColor();
            gridSquare.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });
    });
}

function resizeGrid() {
    let newSize = prompt("Enter grid size(1-80)");
    if (newSize === null) return;
    newSize = parseInt(newSize);

    while (isNaN(newSize) || newSize < 1 || newSize > 80) {
        if (isNaN(newSize)) newSize = prompt("Invalid input! (Enter integer)\nEnter grid size");
        else newSize = prompt("Invalid Input!\nEnter Integer within range")
        

        if (newSize === null) return;

        newSize = parseInt(newSize);
    }

    while (container.firstChild) container.removeChild(container.firstChild);

    createGrid(newSize);
}

function generateRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return [r, g, b];
}