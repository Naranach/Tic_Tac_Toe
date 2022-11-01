const cellElements = document.querySelectorAll('[data-cell]')
const boardelement=document.getElementById('board')
const X_Class='x'
const O_Class='o'
const win_combinations=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const startButton=document.getElementById('start')
const Xbutton=document.getElementById('x_button')
const Obutton=document.getElementById('o_button')
const Restartbutton=document.getElementById('restart_button')
const PlayerButton=document.getElementById('player_button')
const ComputerButton=document.getElementById('computer_button')
const result=document.getElementById('message')
let circleturn
startButton.disabled=true
Xbutton.disabled=true
Obutton.disabled=true
Restartbutton.disabled=true
startButton.addEventListener('click',()=>{
    startGame()
    Xbutton.disabled=true
Obutton.disabled=true
PlayerButton.disabled=true
ComputerButton.disabled=true
startButton.disabled=true
Restartbutton.disabled=false

})

PlayerButton.addEventListener('click',()=>{
Xbutton.disabled=false
Obutton.disabled=false
Restartbutton.disabled=false
})

restart_button.addEventListener('click',()=>{
    cellElements.forEach(cell=>{
        cell.classList.remove(X_Class,O_Class)
        
    })
    reset()
    
    start.disabled=true
Xbutton.disabled=true
Obutton.disabled=true
Restartbutton.disabled=true
 PlayerButton.disabled=false
ComputerButton.disabled=false
    
})
x_button.addEventListener('click',()=>{ 
    circleturn=false
    start.disabled=false
    Xbutton.disabled=true
Obutton.disabled=true
PlayerButton.disabled=true
ComputerButton.disabled=true
})
o_button.addEventListener('click',()=>{
    circleturn=true
    start.disabled=false
    Xbutton.disabled=true
Obutton.disabled=true
PlayerButton.disabled=true
ComputerButton.disabled=true
})

function reset(){
    cellElements.forEach(cell=>{
        cell.removeEventListener("click",handleClick)
        })
boardelement.classList.remove(O_Class)
boardelement.classList.remove(X_Class)
result.innerText=''
};

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

if(checkWin(currentClass)){
    console.log('winner')
    reset()
    endGame(false)
}else if(isDraw()){
    endGame(true)
}else{
swapTurns()
boardhoverclass()
}
}

function isDraw(){
    return [...cellElements].every(cell=>{
    return cell.classList.contains(X_Class)||cell.classList.contains(O_Class)
    })
}
function endGame(draw){
    if(draw){
        result.innerText='DRAW'
    } else{
        result.innerText= `${circleturn ?     "O": "X" } WİNS!`
    };
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

function checkWin(currentClass){
    return win_combinations.some(combination=>{
        return combination.every(index=>{
             return cellElements[index].classList.contains(currentClass)
        })
    })
}