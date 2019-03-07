let time = 0;
let globalId;
let interval;
export function goldenratio(root, speed = 1, circles = 10, golden_ratio = 1.6803, circle_size = 1, colours = false) {
    time = 0;
    window.cancelAnimationFrame(globalId);
    clearInterval(interval);
    interval = setInterval(() => time += speed, 1);
    window.requestAnimationFrame(() => { draw(root.getContext("2d"), (root.width > root.height ? root.height : root.width) / (2 * (1 / circle_size)), (root.width > root.height ? root.height : root.width) / 2, circles, golden_ratio, colours); });
}
function draw(ctx, radius, size, circles, golden_ratio, colours) {
    ctx.clearRect(0, 0, size * 2, size * 2); // clear canvas
    let centre = [size, size];
    ctx.beginPath();
    ctx.arc(size, size, radius, 0, Math.PI * 2, true); // Outer circle
    ctx.stroke();
    for (let index = 1; index < circles; index++) {
        let speedMulitpilier = (golden_ratio * ((index)) / circles);
        let degrees = (Math.PI / 180) * speedMulitpilier * time;
        centre = calcCentre(centre[0], centre[1], radius / Math.pow(golden_ratio, index), degrees, golden_ratio);
        ctx.beginPath();
        if (colours) {
            ctx.strokeStyle = "hsl(" + (index / circles) * 360 + ",100%,50%)";
        }
        ctx.arc(centre[0], centre[1], radius / Math.pow(golden_ratio, index), 0, Math.PI * 2, true);
        ctx.stroke();
        centre;
    }
    ctx.save();
    globalId = window.requestAnimationFrame(() => { draw(ctx, radius, size, circles, golden_ratio, colours); });
}
function calcCentre(x, y, radius, angle, golden_ratio) {
    let deltax = Math.sin(angle) * (radius * golden_ratio - radius);
    let deltay = Math.cos(angle) * (radius * golden_ratio - radius);
    let tuple = [x + deltax, y + deltay];
    return tuple;
}
//# sourceMappingURL=logic.js.map