
console.log("It's working!")
// Default values
defaultBackgroundColor = 'white'
defaultColorChange = 'blue'

//Chosen Values
selectedBackgroundColor = 'red'
gridSize = 4

const drawingBoard = document.querySelector('.board');
const rows = document.querySelectorAll('.row');
// const grid = document.createElement('div')

function createGridOf(numBox) {
    // creates rows and columns based on the 'gridSize' value
    drawingBoard.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    drawingBoard.style.gridTemplateColumns = `repeat(${gridSize}, ${gridSize})`;
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
           //  console.log(pixelText[counter])
            
        

            
        }

    }
}

createGridOf(gridSize)

// functions
// 1. add numbers to boxes
// 2. change color when clicked
// 3. color select option
// 4. reset option
// 5. 

const boxes = document.querySelectorAll(".box")

function addNumberToBoxes() {
    i = 1;
    boxes.forEach(element => {
        element.textContent = i;
        //element.style.backgroundColor = "blue"
        i += 1; 
    });
}

addNumberToBoxes();

function changeBoxColor() {

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            inputColor = document.querySelector('.color_picker').value;

            box.style.backgroundColor = inputColor
            console.log("make it Shake")
        })
    })
}

changeBoxColor();



// function gridToggle(){
//     if ();
//     drawingBoard
// }





