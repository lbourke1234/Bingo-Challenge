



const add76Cells = function() {
    let noOfCells = 76
    let cellsNode = document.getElementById('cells')
    for (let i = 1; i <= noOfCells; i++) {
        let newCellNode = document.createElement('div')
        newCellNode.innerText = i
        newCellNode.classList.add('cells')
        cellsNode.appendChild(newCellNode)
    }
}

const buttonClick = function(event) {
    let usedNos = []
    let randomNumber = Math.floor(Math.random() * 77);

    let currentlySelectedNumber = document.querySelector('.selected-number')
    if (currentlySelectedNumber !== null) {
        currentlySelectedNumber.classList.remove('selected-number')
    }

    // let buttonClickNode = event.target
    // buttonClickNode.classList.add('selected')

    console.log(randomNumber);
    let numberCellsNode = document.getElementsByClassName('cells')
    console.log(numberCellsNode)
    for (let i = 0; i< numberCellsNode.length; i++) {
        // for ( let j = 0; j < usedNos.length; j++){
            // if (randomNumber !== usedNos[j]) {
                if (randomNumber === parseInt(numberCellsNode[i].innerText)) {
                    if (numberCellsNode !== null) {
                        numberCellsNode[i + 1].classList.add('selected-number')
                        usedNos.push(parseInt(numberCellsNode[i].innerText))
                    }
                }  
            // }    
        // } 
    }
}

add76Cells()