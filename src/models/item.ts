import { BackboneModule } from "../types/backbone-module";

define(["backbone"], function (Backbone: BackboneModule): Backbone.Model {
  var Item: Backbone.Model = Backbone.Model.extend({
    defaults: {
      name: "",
      description: "",
    },
  });

  return Item;
});
