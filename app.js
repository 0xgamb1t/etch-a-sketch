
console.log("It's working!")

// Default values
defaultBackgroundColor = 'white'
defaultColorChange = 'black'

const resetBtn = document.querySelector('.reset');
const gridBtnToggle = document.querySelector('.grid_toggle');
const gridSlider = document.querySelector('.slider');
const click = document.querySelector('.click');

const boxes = document.getElementsByName('.box');
let changeColorEventType = 'click'
let gridValue = gridSlider.value



//const boxes = document.querySelectorAll(".box")

// 1. add numbers to boxes

/*
function addNumberToBoxes() {
    let board = document.querySelector('.board')
    let boxes = board.querySelectorAll('.box');
    boxes.forEach((element, index) => {
        element.textContent = index + 1;
        //element.style.backgroundColor = "blue"
    });
}

addNumberToBoxes();
*/
function clickToMouseover() {
    click.addEventListener('click', () =>{
        if (click.textContent == "' click '") {
            click.textContent = " ' hover ' "
            // changeColorEventType = 'mouseover'
            console.log('clicked me!')
            console.log(changeColorEventType)
            // changeBoxColor();


            //add event listener 'mouseover' to all boxes
            //run function that allows boxes to change color


        } else {
            click.textContent = "' click '"
            // changeColorEventType = 'click'
            console.log('clicked me!2nd')
            console.log(changeColorEventType)

            //remove event listener 'mouseover' to boxes
            //run function that allows boxes to change color
        }
        
    })
    
}

clickToMouseover()


// 2. change color when clicked -> based on inputColor
function changeBoxColor() {
    const boxes = document.querySelectorAll('.box');
    
    console.log(click.textContent)
    if (click.textContent == "' click '") {}
    boxes.forEach(box => {
        box.addEventListener(`${changeColorEventType}`, () => {
            inputColor = document.querySelector('.color_picker').value;
            box.style.backgroundColor = inputColor
            console.log("abracadabra")
            //console.log(changeColorEventType);
        })
    })
}



// 3. gridToggle option
function gridToggle(){
    const boxes = document.querySelectorAll('.box');
    gridBtnToggle.addEventListener('click', () => {
        boxes.forEach(el => {
            el.classList.toggle('grid-on');
        })
        console.log('grid toggle clicked!')
    });
    
}

// 4. reset button
function resetToggle(){
    const boxes = document.querySelectorAll('.box')

    resetBtn.addEventListener('click', () => {
        boxes.forEach(function (el) {
            el.style.backgroundColor = null;
        })
        console.log('reset clicked!')
    });  
}

// 5. change grid size function


const counterText = document.querySelector('#box-size-value')

function sizeCounter() {
    counterText.textContent = gridSlider.value

}

sizeCounter(gridSlider.value)



// 6. light & dark mode

function newGrid(){
    gridSlider.onchange = function() {
        rangeValue = gridSlider.value
        createGrid(gridSlider.value)
        sizeCounter(gridSlider.value)
    }
}

newGrid();
// changeBoxColor();
// createGrid(gridSlider.value)





// function styleCornerBoxes() {
//     boxes.forEach(box => {
//         if (box == .style.borderRadius = '8px'
//     });
// }

// styleCornerBoxes()


function createGrid(boxNum) {
    
    const drawingBoard = document.querySelector('.board');
    const boxes = document.querySelectorAll('.row')
    boxes.forEach((div) => div.remove());

    // creates rows and columns based on the 'gridSize' value
    /*
    drawingBoard.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    drawingBoard.style.gridTemplateColumns = `repeat(${gridSize}, 1fr`;
    */

    let counter = 0
    
    for (let i = 0; i < boxNum; i++) {
        const row = drawingBoard.appendChild(document.createElement('div'));
        row.className = "row"
        for (x = 0; x < boxNum; x++) {
            const column = row.appendChild((document.createElement('div')));
            column.classList.add('box', `number${counter + 1}`,`column${x + 1}`) 
            counter += 1
            // console.log(counter)            
        
        }
    }

    
    gridToggle();
    resetToggle();
    changeBoxColor();
    //console.log(changeColorEventType)

}

//console.log(gridSlider.value)
createGrid(gridSlider.value)




// let num = 5;
// let outputString = `Your output is: ${num}`;
// console.log(outputString);
// console.log(num)

// num = 6;
// console.log(outputString);
// console.log(num)
