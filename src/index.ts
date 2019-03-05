import {goldenratio} from "./logic";
//var x = new golden_ratio_loader()
if (module.hot) {
  console.log("module is hot");
  module.hot.accept(["./logic.ts"], function () {
      console.log("module: accept logic");
  });
} else {
  console.log("module is not hot. Can't reload the module");
}