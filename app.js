
console.log("It's working!")
// Default values
defaultBackgroundColor = 'white'
defaultColorChange = 'black'

//Chosen Values
selectedBackgroundColor = 'red';
gridSize = 10;

const drawingBoard = document.querySelector('.board');
const rows = document.querySelectorAll('.row');
const resetBtn = document.querySelector('.reset');
const gridBtn = document.querySelector('.grid_toggle');
// const grid = document.createElement('div')

function createGridOf(numBox) {
    // creates rows and columns based on the 'gridSize' value
    // drawingBoard.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    // drawingBoard.style.gridTemplateColumns = `repeat(${gridSize}, ${gridSize})`;
    //rows.style.gridRow = `span 1`;

    //
    let counter = 0
    for (let i = 0; i < numBox; i++) {
        const row = drawingBoard.appendChild(document.createElement('div'));
        row.className = "row"
        for (x = 0; x < numBox; x++) {
            const column = row.appendChild((document.createElement('div')));
            column.classList.add('box', `number${counter + 1}`,`column${x + 1}`) 
            counter += 1
            // console.log(counter)            
        }

    }
}

createGridOf(gridSize)

const boxes = document.querySelectorAll(".box")

// 1. add numbers to boxes

function addNumberToBoxes() {
    i = 1;
    boxes.forEach(element => {
        element.textContent = i;
        //element.style.backgroundColor = "blue"
        i += 1; 
    });
}

addNumberToBoxes();


// 2. change color when clicked -> based on inputColor

function changeBoxColor() {

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            inputColor = document.querySelector('.color_picker').value;

            box.style.backgroundColor = inputColor
            console.log("abracadabra")
        })
    })
}

changeBoxColor();



// functions
// 3. gridToggle option


function gridToggle(){
    gridBtn.addEventListener('click', () => {
        boxes.forEach(el => {
            el.style.border = '1px solid black';
        })
        console.log('grid toggle clicked!')
    });
    
}

gridToggle();
// 4. reset button


function resetToggle(){
    resetBtn.addEventListener('click', () => {
        boxes.forEach(function (el) {
            el.style.backgroundColor = defaultBackgroundColor;
        })
        console.log('reset clicked!')
    });
    
}

resetToggle();


// 5. grid size function


