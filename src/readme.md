# The Golden Ratio

### My midnight investigations into the golden ratio

#### Quick start:
1. Open `quick editing/index.html` in your web browser of choice
1. Open `quick editing/index.js` in your code editor of choice
1. Play around with the different parameters at the top of the `index.js` file (remember to save and refresh the web page each time you edit something).

#### If you are desperate for hot module replacement/typescript:

1. `cd` into the repository folder, run `npm install` then `npm run run-dev-server` and the page will open in your default web browser. 
1. Each time you edit and save the `src/logic.ts` file the web page will refresh automagically.

#### How it works

The `draw` function is called at the speed of the users display refresh rate, so for most people 60 times per second.
On initialisation we start a timer counting up, called `time`, incremented by the `speed` parameter every millisecond.

In the `draw` function we get the 2d context of the `canvas` element and clear the area, then set the dimensions of the canvas. We initlise a tuple of numbers, the first number being the x coordinate and the second being the y coordinate. This contains the centre of the parent, initially being the largest circle at centre `(width, height)`. We must draw the first circle seperately from the others.

We then calculate the speed multiplier for each circle by multiplying the index of the circle multiplied by the Golden Ratio divided by the total number of circles we have.

We then calculate the xy coordinate of the new circle using the calcCentre function, which takes the parent circles' xy coords, the new circle's radius, the number of degrees around the circle we have travelled, and returns the new circles centre. We then draw the new circle and repeat.