import { BackboneModule } from "../types/backbone-module";

define(["backbone", "views/itemView"], function (
  Backbone: BackboneModule,
  ItemView: typeof Backbone.View,
): Backbone.View {
  var ItemListView: Backbone.View = Backbone.View.extend({
    el: "#app",

    initialize: function (): void {
      this.listenTo(this.collection, "add", this.addOne);
    },

    addOne: function (item: Backbone.Model): void {
      var itemView = new ItemView({ model: item });

      this.$("ul").append(itemView.render().el);
    },

    render: function (): Backbone.View {
      this.$el.append("<ul></ul>");
      this.collection.each(this.addOne, this);

      return this;
    },
  });

  return ItemListView;
});
