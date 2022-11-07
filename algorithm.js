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
ComputerButton.disabled=true
