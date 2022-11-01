const cellElements = document.querySelectorAll('[data-cell]')
const boardelement=document.getElementById('board')
const X_Class='x'
const O_Class='o'
const startButton=document.getElementById('start')
const Xbutton=document.getElementById('x_button')
const Obutton=document.getElementById('o_button')
const Restartbutton=document.getElementById('restart_button')
let circleturn
restart_button.addEventListener('click',()=>{
    cellElements.forEach(cell=>{
        cell.classList.remove(X_Class,O_Class)
    })
})
x_button.addEventListener('click',()=>{
    circleturn=false
})
o_button.addEventListener('click',()=>{
    circleturn=true
})
startButton.addEventListener('click',startGame)

function startGame(){
boardhoverclass()
cellElements.forEach(cell=>{
    cell.addEventListener('click',handleClick,{once:true})
})
}
function handleClick(e){
    console.log('clicked')
    const cell=e.target
const currentClass=circleturn ? O_Class : X_Class
placeMark(cell,currentClass)
swapTurns()
boardhoverclass()
}

function placeMark(cell,currentClass){
    cell.classList.add(currentClass)
}

function swapTurns(){
    circleturn=!circleturn
}

function boardhoverclass(){
board.classList.remove(O_Class)
board.classList.remove(X_Class)
if(circleturn){
    board.classList.add(O_Class)
} else{
    board.classList.add(X_Class)
}
}