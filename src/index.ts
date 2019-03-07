import {goldenratio, globalId} from "./logic";
goldenratio(<HTMLCanvasElement>document.getElementById("root"), 1,10,1.6803,0.5,true);
//window.cancelAnimationFrame(globalId);
setTimeout(()=>{window.cancelAnimationFrame(globalId)}, 2000)


if (module.hot) {
  console.log("module is hot");
  module.hot.accept(["./logic.ts"], function () {
      console.log("module: accept logic");
  });
} else {
  console.log("module is not hot. Can't reload the module");
}