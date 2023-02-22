// let Gamess = [23, 56, 78, 90];
let Games = [
{name:"Call of Duty",sales:100000}
]
let charts = [];

function setup() {
  createCanvas(500, 500);
  background(200);
  angleMode(DEGREES);
  rectMode(CORNER);
}

// for (let x=0; x<1; x++){
//   let _ramdomNum = Math.floor(random(0,400))
//   charts.push(new Chart(_randomNum));
// }

charts.push(new Chart(200, 200, 50, 250, Games));
charts.push(new Chart(200, 200, 50, 470, Games));

function draw() {
  charts[0].render();
  charts[1].render();
}
