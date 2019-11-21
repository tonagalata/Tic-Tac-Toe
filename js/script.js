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

winner = false;
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
  // console.log(evt.target.dataset.index)
  const selectedIndex = parseInt(evt.target.dataset.index);
  if(winner || gameboard[selectedIndex]) return;
  gameboard[selectedIndex] = turn;
  turn *= -1
  winner = checkWinner();
  console.log(winner)
  render(evt);
    // console.log(gameboard[evt.target.dataset.index])
}

function render(evt){
  gameboard.forEach( (elem, index) => {
      squares[index].textContent = KEY[elem]
    }); 
    message.textContent = `${KEY[turn]}'s turn!`;
    if(winner !== false)
    {alert(`${KEY[winner]} Won!`);
    } else if (winner === 'T') {
      alert("It's a Tie!")
    }
}

function checkWinner(){
  for(let i = 0; i < COMBOS.length; i++){
    if(Math.abs(gameboard[COMBOS[i][0]] + gameboard[COMBOS[i][1]] + gameboard[COMBOS[i][2]]) === 3) {
      console.log(gameboard[COMBOS[i][0]]);
      
      return gameboard[COMBOS[i][0]];
    }
  }
  if(gameboard.includes(null)) return false;
  
  return 'T';
}