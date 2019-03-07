let time = 0;
let globalId:number;
let interval:NodeJS.Timeout;
export function goldenratio(root: HTMLCanvasElement, speed:number=1, circles:number=10, 
  golden_ratio:number=1.6803, circle_size:number=1, colours: number = 1) {
    window.cancelAnimationFrame(globalId);
  clearInterval(interval);
  interval = setInterval(()=> time += speed, 1);
  globalId = window.requestAnimationFrame(()=>{draw(root.getContext("2d"), (root.width>root.height?root.height:root.width)/(2*(1/circle_size)), (root.width>root.height?root.height:root.width)/2, circles, golden_ratio, colours)});
}


function draw(ctx: CanvasRenderingContext2D, radius:number, size:number, circles:number, golden_ratio:number, colours:number) { 
  ctx.clearRect(0, 0, size*2, size*2); // clear canvas
  let centre:[number,number]= [size,size];


  for (let index = 1; index < circles; index++) {
    let speedMulitpilier = index;
    let degrees = (Math.PI/180)*speedMulitpilier*(time/0.6944444444444);
    centre = calcCentre(centre[0],centre[1],radius/Math.pow(golden_ratio,index),degrees, golden_ratio);
    ctx.beginPath();    
    if (colours!=0) {
      ctx.strokeStyle = "hsl("+(index/(circles*colours))*360+",100%,50%)";
      }
      else{
        ctx.strokeStyle = "rgb(0,0,0)"
      }
    ctx.arc(centre[0],centre[1], radius/Math.pow(golden_ratio,index), 0, Math.PI * 2, true); 
    ctx.stroke();
    
    centre;
  }
  ctx.beginPath();
  ctx.arc(size, size, radius, 0, Math.PI * 2, true); // Outer circle
  ctx.stroke();
  ctx.save();
  
globalId = window.requestAnimationFrame(()=>{draw(ctx,radius,size,circles,golden_ratio, colours)});
}
function calcCentre(x: number, y: number, radius: number, angle: number, golden_ratio:number){
let deltax = Math.sin(angle) * (radius*golden_ratio-radius);
let deltay = Math.cos(angle) *(radius*golden_ratio-radius);
let tuple:[number, number] = [x+deltax, y+deltay];
return tuple;
}