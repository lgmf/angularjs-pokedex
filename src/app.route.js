(function(angular) {
  "use-strict";

  const app = angular.module("app");

  const appRoute = function($routeProvider) {
    $routeProvider
      .when("/pokemons", {
        template: "<pokemons-view></pokemons-view>"
      })
      .otherwise("/pokemons");
  };

  app.config(["$routeProvider", appRoute]);
})(angular);
