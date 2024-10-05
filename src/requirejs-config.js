define(function () {
  requirejs.config({
    baseUrl: "src",
    paths: {
      jquery: "../node_modules/jquery/dist/jquery.min",
      underscore: "../node_modules/underscore/underscore-min",
      backbone: "../node_modules/backbone/backbone-min",
    },
    shim: {
      backbone: {
        deps: ["underscore", "jquery"],
        exports: "Backbone",
      },
      underscore: {
        exports: "_",
      },
    },
  });

  require(["main"], function (App) {
    new App();
  });
});
