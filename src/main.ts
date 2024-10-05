import { Underscore } from "underscore";
import { BackboneModule } from "./types/backbone-module";

define([
  "jquery",
  "underscore",
  "backbone",
  // "routers/appRouter",
  // "views/itemListView",
], function (
  // $: JQuery,
  _: any,
  // Backbone: BackboneModule,
  // AppRouter: typeof Backbone.Router,
  // AppView: typeof Backbone.View,
) {
  console.log("TEST 666");

  // Definiujemy funkcję `init`, która uruchamia naszą aplikację
  function init() {
    console.log("Initializing the main module...");

    // Inicjalizacja Routera
    // const appRouter = new AppRouter();

    // Tworzenie instancji głównego widoku aplikacji
    // const appView: any = new AppView({
    //   el: "#app", // Element, w którym renderujemy widok
    // });
    //
    // // Renderowanie widoku
    // appView.render();
    //
    // // Rozpoczęcie historii Backbone (przechodzenie między stronami)
    // Backbone.history.start();

    console.log("Application initialized successfully.");
  }

  // Moduł `main` zwraca obiekt z funkcją `init`, którą będziesz wywoływał
  return {
    init,
  };
});
