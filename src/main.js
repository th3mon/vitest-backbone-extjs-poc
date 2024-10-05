define(["backbone", "routers/appRouter"], function (Backbone, AppRouter) {
  class App {
    constructor() {
      new AppRouter();
      Backbone.history.start();
    }
  }

  return App;
});
