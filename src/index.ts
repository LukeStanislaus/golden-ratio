import {init} from "./logic";
let a = require("./logic");
init();
if (module.hot) {
  console.log("module is hot");
  module.hot.accept(["./logic.ts"], function () {
      console.log("module: accept logic");
      init();
  });
} else {
  console.log("module is not hot. Can't reload the module");
}