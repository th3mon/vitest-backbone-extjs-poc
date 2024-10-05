import "./requirejs-config";
import { BackboneModule } from "./types/backbone-module";

require(["routers/appRouter", "backbone"], function (
  AppRouter: typeof Backbone.Router,
  Backbone: BackboneModule,
): void {
  $(function () {
    new AppRouter();

    Backbone.history.start();
  });
});
