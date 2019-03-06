import goldenratio from "C:/Users/Luke/source/azure repos/RandomThings/RandomThings/node_modules/golden-ratio-loader/dist/";
goldenratio(<HTMLCanvasElement>document.getElementById("root"), 1,10,1.6803, 1, null);
if (module.hot) {
  console.log("module is hot");
  module.hot.accept(["./logic.ts"], function () {
      console.log("module: accept logic");
  });
} else {
  console.log("module is not hot. Can't reload the module");
}