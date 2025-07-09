window.onload = function() {
    changeGridSize();
    main()
}


const gridButton = document.querySelector('button');
    gridButton.addEventListener('click', function(event) {
        const gridSize = prompt('New Grid Size(0-100)');
        checkGridSize(gridSize);
    })


function getRandomColor() { 
    var color = '#'; 
    var letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0'];
    color += letters[Math.floor(Math.random() * letters.length)];
    return color
}


function checkGridSize(gridSize) {
    if (gridSize > 100) {
        return alert('Exceeded Maximum value!');
    } else if (gridSize < 0) {
        alert('Invalid Dimension Size');
    } else if (gridSize === '' || gridSize === undefined){
        changeGridSize();
        return alert('No Input! Changing to default grid.')
    } else {
        changeGridSize(gridSize);
    }
}


function changeGridColor(gridItem){
    const gridStyle = gridItem.style;
    if (gridStyle.backgroundColor === '' ) {
        gridStyle.backgroundColor = getRandomColor();
        gridStyle.opacity = '0.1'
    } else {
        gridStyle.opacity = parseFloat(gridStyle.opacity) + 0.1;
    }
}


function changeGridSize(gridSize=16) {
    const findGrid = document.querySelector('#grid-container');
    findGrid.remove();

    const mainContainer = document.querySelector('#main-container');
    const newGridContainer = document.createElement('div');
    newGridContainer.id = 'grid-container';
    mainContainer.append(newGridContainer);

    for (let i = 0; i < gridSize; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-column');
        gridItem.id = `grid-column-${i}`
        newGridContainer.appendChild(gridItem);
    }

    for (let i=0; i < gridSize; i++) {
        const gridColumn = document.querySelector(`#grid-column-${i}`);
        const gridColumnCounter = document.querySelectorAll('.grid-column');
        for (let j=0; j < gridColumnCounter.length; j++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-row');
            gridItem.id = `grid-row-${j}`
            gridColumn.appendChild(gridItem);
            }
        }
    main();
    }


function main() {
    const gridItems = document.querySelectorAll('.grid-row');
    gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', function(event){
        changeGridColor(event.target);
    }))
}
    





