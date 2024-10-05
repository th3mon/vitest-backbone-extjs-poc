define(function () {
  requirejs.config({
    baseUrl: "dist",
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
    waitSeconds: 30,
  });
  require(["jquery"], function ($) {
    console.log("jQuery loaded", $);

    require(["underscore"], function (_) {
      console.log("Underscore loaded", _);

      require(["backbone"], function (Backbone) {
        console.log("Backbone loaded", Backbone);

        // Tutaj uruchom swój kod Backbone
        require(["main"], function (main) {
          console.log({ main });

          main.init(); // Call an init function defined in your main module if necessary
        });
      });
    });
  });
  // require(["main"], function (main) {
  //   console.log({ main });
  //
  //   main.init(); // Call an init function defined in your main module if necessary
  // });
});
