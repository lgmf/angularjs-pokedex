(function(angular) {
  "use-strict";

  const pokemonView = angular.module("pokedexView");

  pokemonView.component("pokedex", {
    template: `
      <div class="pokemons">
        <loader ng-if="$ctrl.loading"></loader>
        <pokemon-card 
          ng-if="!$ctrl.loading " 
          ng-repeat="pokemon in $ctrl.pokemons track by pokemon.name" 
          pokemon="pokemon"></pokemon-card>
      </div>
      <div class="btn-group">
        <button class="btn" ng-click="$ctrl.onPrevious()" ng-disabled="$ctrl.page === 1">Previous</button>
        <button class="btn" ng-click="$ctrl.onNext()">Next</button>
      </div>
    `,
    controller: [
      "$q",
      "PokeApiService",
      function($q, pokeApiService) {
        const $ctrl = this;

        $ctrl.loading = true;

        function setPokemons(page, limit = 12) {
          $ctrl.loading = true;
          pokeApiService.list(page, limit).then(response => {
            const pokemons = response.data.results;
            const pokemonListDetails = pokemons.map(pokemon => pokeApiService.getByName(pokemon.name));
            $q.all(pokemonListDetails).then(response => {
              $ctrl.pokemons = response.map(pokemon => pokemon.data);
              $ctrl.loading = false;
            });
          });
        }

        $ctrl.page = 1;

        $ctrl.onPrevious = function() {
          if ($ctrl.page === 1) {
            return;
          }

          $ctrl.page--;
          setPokemons($ctrl.page);
        };

        $ctrl.onNext = function() {
          $ctrl.page++;
          setPokemons($ctrl.page);
        };

        setPokemons($ctrl.page);
      }
    ]
  });
})(angular);
