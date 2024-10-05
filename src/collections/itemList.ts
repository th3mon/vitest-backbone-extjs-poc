import { BackboneModule } from "../types/backbone-module";

define(["backbone", "models/item"], function (
  Backbone: BackboneModule,
  Item: Backbone.Model,
): Backbone.Collection {
  var ItemList: Backbone.Collection = Backbone.Collection.extend({
    model: Item,
  });

  return ItemList;
});
