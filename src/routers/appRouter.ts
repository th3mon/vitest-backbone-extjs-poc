import { BackboneModule } from "../types/backbone-module";

define(["backbone", "collections/itemList", "views/itemListView"], function (
  Backbone: BackboneModule,
  ItemList: typeof Backbone.Collection,
  ItemListView: typeof Backbone.View,
): Backbone.Router {
  var AppRouter: Backbone.Router = Backbone.Router.extend({
    routes: {
      "": "home",
    },

    home: function () {
      var itemList = new ItemList([
        { name: "Item 1", description: "Description 1" },
        { name: "Item 2", description: "Description 2" },
      ]);

      var itemListView = new ItemListView({ collection: itemList });
      itemListView.render();
    },
  });

  return AppRouter;
});
