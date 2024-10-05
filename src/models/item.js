define(["backbone"], function (Backbone) {
  var Item = Backbone.Model.extend({
    defaults: {
      name: "",
      description: "",
    },
  });

  return Item;
});
