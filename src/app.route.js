(function(angular) {
  "use-strict";

  const app = angular.module("app");

  const defaultRoute = "/pokemons";

  const routes = [
    {
      url: "/pokemons",
      template: "<pokemons-view></pokemons-view>",
      label: "pokemons"
    }
  ];

  app
    .config([
      "$routeProvider",
      function($routeProvider) {
        $routeProvider.otherwise(defaultRoute);
        routes.forEach(route => {
          $routeProvider.when(route.url, route);
        });
      }
    ])
    .controller("ActiveRoute", [
      "$scope",
      function($scope) {
        $scope.routes = routes;

        $scope.$on("$routeChangeSuccess", function(_, current) {
          if (!current.$$route) return;
          $scope.activatedRoute = current.$$route.label;
        });
      }
    ]);
})(angular);
