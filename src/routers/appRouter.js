define(["backbone", "collections/itemList", "views/itemListView"], function (
  Backbone,
  ItemList,
  ItemListView,
) {
  var AppRouter = Backbone.Router.extend({
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
