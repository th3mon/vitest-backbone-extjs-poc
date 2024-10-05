import { BackboneModule } from "../types/backbone-module";

define(["backbone", "underscore"], function (
  Backbone: BackboneModule,
  _: any,
): Backbone.View {
  var ItemView: Backbone.View = Backbone.View.extend({
    tagName: "li",
    template: _.template("<%= name %> - <%= description %>"),

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
  });

  return ItemView;
});
