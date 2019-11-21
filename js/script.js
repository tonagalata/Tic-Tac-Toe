// IPO

// Input Process Output

// 1) Define the inputs - Constants and State Variables (application state)

const COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const KEY = {
  '1' : 'X',
  '-1' : 'O',
  'null': ''
};

let turn, winner, gameboard;
// Cached element references
const squares = document.querySelectorAll('.square');
const message = document.getElementById('message');
// Event Listeners
document.querySelector('#gameboard').addEventListener('click', handleClick);
document.querySelector('#reset').addEventListener('click', init);
// Define Processes
// Functions
init();
 
function init() {
    winner = false; 
    turn = 1;
    gameboard = [null, null, null, null, null, null, null, null, null];
    render();
}
function handleClick(evt) {
    console.log(evt.target.dataset.index)
    const selectedIndex = parseInt(evt.target.dataset.index);
    if(gameboard[selectedIndex] !== null) return;

      gameboard[selectedIndex] = turn;
      turn *= -1
    
    render(evt);

    // console.log(turn)
    // console.log(gameboard)
}

function render(evt){
  gameboard.forEach( (elem, index) => {
    // message.textContent = "Let's Play! X is ALWAYS first!"
      squares[index].textContent = KEY[elem]
      message.textContent = `${KEY[turn]}'s turn!`;
      console.log()
    }); 
}