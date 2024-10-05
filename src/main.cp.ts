import "./requirejs-config";
import { BackboneModule } from "./types/backbone-module";

require(["routers/appRouter", "backbone"], function (
  AppRouter: typeof Backbone.Router,
  Backbone: BackboneModule,
): any {
  console.log("TEST 01");

  return {
    init() {
      console.log("init");

      // $(function () {
      //   new AppRouter();
      //
      //   Backbone.history.start();
      //
      //   console.log("test 01");
      // });
    },
  };
});
