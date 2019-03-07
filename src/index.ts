import {goldenratio} from "./logic";
goldenratio(<HTMLCanvasElement>document.getElementById("root"), 0.1,10,1.6803,1,true);
setTimeout(()=>{goldenratio(<HTMLCanvasElement>document.getElementById("root"), 0.1,10,1.6803,1,false)}, 1000);


if (module.hot) {
  console.log("module is hot");
  module.hot.accept(["./logic.ts"], function () {
      console.log("module: accept logic");
  });
} else {
  console.log("module is not hot. Can't reload the module");
}