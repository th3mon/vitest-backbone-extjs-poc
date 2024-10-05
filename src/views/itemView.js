define(["backbone", "underscore"], function (Backbone, _) {
  var ItemView = Backbone.View.extend({
    tagName: "li",
    template: _.template("<%= name %> - <%= description %>"),

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
  });

  return ItemView;
});
