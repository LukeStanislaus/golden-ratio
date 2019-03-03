var degrees =0;
let width = 750;
let height = 750;
let radius = 500;
let speed = 10;
let circles = 1000;
let golden_ratio = 1.01;

// (1+Math.sqrt(5))/2
function init() {
  setInterval(()=> degrees+= speed, 1);
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = (document.getElementById('canvas')).getContext('2d');
  ctx.clearRect(0, 0, width*2, height*2); // clear canvas
  let canvas = (document.getElementById('canvas') );
canvas.width= width*2;
canvas.height= height*2;
  let centre= [[width,height]];
  
  ctx.beginPath();
  ctx.arc(width, height, radius, 0, Math.PI * 2, true); // Outer circle
  ctx.stroke();
  for (let index = 1; index < circles; index++) {
    let speedMulitpilier = (golden_ratio * ((index)) / circles);
    let next = calcCentre(centre[index-1][0],centre[index-1][1],radius/Math.pow(golden_ratio,index),(Math.PI/180)*speedMulitpilier*(degrees/2.777777)*6.180355123);
    centre.push(next);
    ctx.beginPath();
    ctx.arc(centre[index][0],centre[index][1], radius/Math.pow(golden_ratio,index), 0, Math.PI * 2, true); 
    ctx.stroke();

  }
  ctx.save();
  window.requestAnimationFrame(draw);
}
function calcCentre(x, y, radius, angle){
let deltax = Math.sin(angle) * (radius*golden_ratio-radius);
let deltay = Math.cos(angle) *(radius*golden_ratio-radius);
let tuple = [x+deltax, y+deltay];
return tuple;

}
function drawSphere(x, y, date, ctx, index, max, radius){
    
    let speedMulitpilier = (1.61803 * index) / max;
    ctx.beginPath();
    ctx.arc(x, (y +radius)-(radius/(1.6803 * index)), radius/(1.6803*index), 0, Math.PI * 2, true); // Outer circle
    ctx.stroke();
    ctx.translate(x, (y +radius)-(radius/(1.6803 * index))); 
    ctx.rotate((Math.PI / 180) * 1*speedMulitpilier);
    ctx.translate(-x, -((y +radius)-(radius/(1.6803 * index)))); 
    
  ctx.save();
}
init();
