import requirejs from "requirejs";

requirejs.config({
  baseUrl: "src",

  paths: {
    jquery: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min",
    underscore:
      "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.1/underscore-min",
    backbone:
      "https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.4.0/backbone-min",
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

export default requirejs;
