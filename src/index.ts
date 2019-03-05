import {init} from "./logic";
init(<HTMLCanvasElement>document.getElementById("root"), 1, 5, 1.6803,1);
if (module.hot) {
  console.log("module is hot");
  module.hot.accept(["./logic.ts"], function () {
      console.log("module: accept logic");
  });
} else {
  console.log("module is not hot. Can't reload the module");
}