const container = document.querySelector(".container");

for (let i = 0; i < 16*16; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('grid-square');
    squareDiv.style.padding = 0;
    squareDiv.style.width = '30px';
    squareDiv.style.height = '30px';
    squareDiv.style.border = '2px solid grey';
    container.appendChild(squareDiv);
}

