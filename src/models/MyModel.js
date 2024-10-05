import Backbone from "backbone";

class MyModel extends Backbone.Model {
  defaults() {
    return {
      attributeName: "defaultValue", // Define default values here
    };
  }
}

export default MyModel;
