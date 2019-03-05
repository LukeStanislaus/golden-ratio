let time = 0;
let golden_ratio = 1.6803;

export class golden_ratio_loader{
  constructor(root: HTMLCanvasElement, speed:number, circles:number, golden_ratio:number, circle_size:number){
    initiate(root, speed, circles, golden_ratio, circle_size);
  }
}
function initiate(root: HTMLCanvasElement, speed:number, circles:number, golden_ratio:number, circle_size:number) {
  setInterval(()=> time += speed, 1);
  window.requestAnimationFrame(()=>{draw(root.getContext("2d"), (root.width>root.height?root.height:root.width)/(2*circle_size), (root.width>root.height?root.height:root.width)/2, circles, golden_ratio)});
}

function draw(ctx: CanvasRenderingContext2D, radius:number, size:number, circles:number, golden_ratio:number) { 
  ctx.clearRect(0, 0, size*2, size*2); // clear canvas
  let centre:[number,number]= [size,size];
  ctx.beginPath();
  ctx.arc(size, size, radius, 0, Math.PI * 2, true); // Outer circle
  ctx.stroke();

  for (let index = 1; index < circles; index++) {
    let speedMulitpilier = (golden_ratio * ((index)) / circles);
    let degrees = (Math.PI/180)*speedMulitpilier*time;
    centre = calcCentre(centre[0],centre[1],radius/Math.pow(golden_ratio,index),degrees);
    ctx.beginPath();
    ctx.arc(centre[0],centre[1], radius/Math.pow(golden_ratio,index), 0, Math.PI * 2, true); 
    ctx.stroke();
    centre;
  }
  ctx.save();
  window.requestAnimationFrame(()=>{draw(ctx,radius,size,circles,golden_ratio)});
}
function calcCentre(x: number, y: number, radius: number, angle: number){
let deltax = Math.sin(angle) * (radius*golden_ratio-radius);
let deltay = Math.cos(angle) *(radius*golden_ratio-radius);
let tuple:[number, number] = [x+deltax, y+deltay];
return tuple;
}