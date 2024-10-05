define(["backbone", "models/item"], function (Backbone, Item) {
  var ItemList = Backbone.Collection.extend({
    model: Item,
  });

  return ItemList;
});
