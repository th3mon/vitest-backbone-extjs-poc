define(["backbone", "views/itemView"], function (Backbone, ItemView) {
  var ItemListView = Backbone.View.extend({
    el: "#app",

    initialize: function () {
      this.listenTo(this.collection, "add", this.addOne);
    },

    addOne: function (item) {
      var itemView = new ItemView({ model: item });

      this.$("ul").append(itemView.render().el);
    },

    render: function () {
      this.$el.append("<ul></ul>");
      this.collection.each(this.addOne, this);

      return this;
    },
  });

  return ItemListView;
});
