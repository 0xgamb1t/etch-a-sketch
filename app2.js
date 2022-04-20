// 1. create a grid of divs
// 2. 


const gridSlider = document.querySelector('.slider')
let gridSize = gridSlider.value

console.log(gridSize)

const drawingBoard = document.querySelector('.board')
drawingBoard.style.display = `grid`

const colorPicker = document.querySelector('.box_color_picker')
console.log(colorPicker.value);
let nextColor = colorPicker.value


//creates a grid of boxes based on user input > first default value
function createBoxes(boxCount) {
    for (let i = 0; i < boxCount * boxCount; i++) {
        const box = drawingBoard.appendChild(document.createElement('div'));
        box.classList.add('box', `box${i + 1}`)
        drawingBoard.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`

    }           
}

createBoxes(gridSize);

//change box color to selected nextColor
function colorChangeEvent() {
    const boxes = document.querySelectorAll('.box')
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            nextColor = colorPicker.value
            box.style.backgroundColor = nextColor
            console.log(nextColor)
        })
    });
}

colorChangeEvent();

//Reseting the grid -> removing boxes, creating new boxes w/ same old properties
function reset() {
    document.querySelectorAll('.box').forEach(e => e.remove());
    gridSize = gridSlider.value
    createBoxes(gridSlider.value);
    colorChangeEvent();
}

const resetBtn = document.querySelector('.reset');
resetBtn.onclick = function (){reset()};



//Changing Size on slider change
const changeSize = gridSlider.onchange = function() {
    reset();
    console.log(gridSize)
}


//make rainbow color pattern
//toggle grid 'on' 'off'
const gridColor = document.querySelector('.grid_color')
let nextGridColor = gridColor.value
nextGridColor = gridColor.value

console.log(nextGridColor)


const gridToggleBtn = document.querySelector('.grid_toggle')

gridToggleBtn.toggleAttribute('enabled');
console.log

const toggleGrid = gridToggleBtn.onclick = function() {    
    
        if (gridToggleBtn.textContent = `Grid ' on '`) {
            boxes = document.querySelectorAll('.box')
            boxes.forEach(box => {
                console.log(gridToggleBtn.textContent)
                gridToggleBtn.textContent = `Grid ' on '`
                box.style.outline = `2px solid ${nextGridColor}`
                console.log(gridToggleBtn.textContent)
        });   
    }   else {
                boxes = document.querySelectorAll('.box')
                boxes.forEach(box => {
                    gridToggleBtn.textContent = `Grid ' off '`
                    box.style.outline = `10px solid ${nextGridColor}`
                    console.log(gridToggleBtn.textContent)
        })
    }
}



