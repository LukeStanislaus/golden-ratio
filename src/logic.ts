let time = 0;
let width = 750;
let height = 750;
let radius = 40;
let speed =5;
let circles = 5;
let golden_ratio = 1/((1+Math.sqrt(5))/2);

// (1+Math.sqrt(5))/2
export function init() {
  setInterval(()=> time += speed, 1);
  window.requestAnimationFrame(draw);
}

function draw() { 
    let canvas = (document.getElementById('canvas') as HTMLCanvasElement);
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, width*2, height*2); // clear canvas
canvas.width= width*2;
canvas.height= height*2;
  let centre:[number,number]= [width,height];
  ctx.beginPath();
  ctx.arc(width, height, radius, 0, Math.PI * 2, true); // Outer circle
  ctx.stroke();

  for (let index = 1; index < circles; index++) {
    let speedMulitpilier = (golden_ratio * ((index)) / circles);
    let degrees = (Math.PI/180)*speedMulitpilier*time;
    let next = calcCentre(centre[0],centre[1],radius/Math.pow(golden_ratio,index),degrees);
    ctx.beginPath();
    ctx.arc(next[0],next[1], radius/Math.pow(golden_ratio,index), 0, Math.PI * 2, true); 
    ctx.stroke();
    centre = next;

  }
  ctx.save();
  window.requestAnimationFrame(draw);
}


function calcCentre(x: number, y: number, radius: number, angle: number){
let deltax = Math.sin(angle) * (radius*golden_ratio-radius);
let deltay = Math.cos(angle) *(radius*golden_ratio-radius);
let tuple:[number, number] = [x+deltax, y+deltay];
return tuple;

}