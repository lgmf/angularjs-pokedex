require("angular");
require("./core/index");
require("./shared/index");

const app = angular.module("app", ["core", "shared"]);

app.controller("Pokemons", [
  "$scope",
  "PokeApiService",
  function($scope, pokeApiService) {
    pokeApiService.list().then(response => {
      $scope.pokemons = response.data.results;
    });
  }
]);
