import goldenratio from "./logic";
goldenratio(<HTMLCanvasElement>document.getElementById("root"), 1,10,1.6803, 1, true);
if (module.hot) {
  console.log("module is hot");
  module.hot.accept(["./logic.ts"], function () {
      console.log("module: accept logic");
  });
} else {
  console.log("module is not hot. Can't reload the module");
}