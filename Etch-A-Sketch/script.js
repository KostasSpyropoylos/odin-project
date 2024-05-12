let gridSize=16;

let divContainer = document.querySelector(".grid-container");
let resetBtn = document.querySelector(".reset");
// let startBtn = document.querySelector(".start");
// let size = document.querySelector('.size');


// startBtn.setAttribute("onclick", "start()");
resetBtn.setAttribute("onclick", "reset()");

function createGrid() {
  for (let i = 1; i <= gridSize; i++) {
    let row = document.createElement("div");
    row.className = "row";
    divContainer.appendChild(row);
    for (let j = 1; j <= gridSize; j++) {
      let col = document.createElement("div");
      col.className = "col";
      row.appendChild(col);
    }
  }
}
divContainer.addEventListener("mousedown",(e)=>{
  changeColor(e);
});
divContainer.addEventListener("mouseover",(e)=>{
  changeColor(e);
});

// size.addEventListener('click',(e)=>{
//   let input = +prompt('Enter a number from 1-64');
//   if(input && typeof input === "number"){
//       console.log('im in')
//       reset();
//       gridSize = input;

//     }
// });


function changeColor(x) {
  x.preventDefault();
  x.target.style.backgroundColor = "blue";
}

function reset() {
  divContainer.innerHTML = "";
  createGrid();
}

createGrid();
