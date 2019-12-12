(function(angular) {
  "use-strict";

  const pokemonView = angular.module("pokemonView");

  pokemonView.component("pokemonsView", {
    template: `
      <div class="pokemons">
        <pokemon-list list="pokemons"></pokemon-list>
      </div>
    `,
    controller: [
      "$scope",
      "PokeApiService",
      function($scope, pokeApiService) {
        pokeApiService.list().then(response => {
          $scope.pokemons = response.data.results;
        });
      }
    ]
  });
})(angular);
