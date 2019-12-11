require("angular");

require("./core/index");

const app = angular.module("app", ["core"]);

app.controller("Pokemons", [
  "$scope",
  "PokeApiService",
  function($scope, pokeApiService) {
    pokeApiService.list().then(response => {
      $scope.pokemons = response.data.results;
    });
  }
]);
