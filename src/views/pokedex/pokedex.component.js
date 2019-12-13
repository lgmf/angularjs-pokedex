(function(angular) {
  "use-strict";

  const pokemonView = angular.module("pokedexView");

  pokemonView.component("pokedex", {
    template: `
      <div class="pokemons">
        <loader ng-if="$ctrl.loading"></loader>
        <pokemon-card 
          ng-if="!$ctrl.loading"
          ng-repeat="pokemon in $ctrl.pokemons track by pokemon.name" 
          pokemon="pokemon"></pokemon-card>
      </div>
      <div class="btn-group controls" ng-if="!$ctrl.loading">
        <button 
          class="btn previousbtn" 
          ng-click="$ctrl.onPrevious()" 
          ng-disabled="$ctrl.page === 1">Previous</button>
        
        <pagination
          class="pagination"
          max="$ctrl.pokemonCount"
          limit="$ctrl.limit"
          current="$ctrl.page"></pagination>

        <button 
          class="btn nextbtn"
          ng-click="$ctrl.onNext()"
          ng-disabled="$ctrl.page * $ctrl.limit >= $ctrl.pokemonCount">Next</button>
      </div>
    `,
    controller: [
      "$scope",
      "$q",
      "PokeApiService",
      function($scope, $q, pokeApiService) {
        const $ctrl = this;

        const setPokemons = function(page, limit) {
          $ctrl.loading = true;
          pokeApiService.list(page, limit).then(response => {
            const pokemons = response.data.results;
            const pokemonListDetails = pokemons.map(pokemon => pokeApiService.getByName(pokemon.name));

            $ctrl.pokemonCount = response.data.count;

            $q.all(pokemonListDetails).then(response => {
              $ctrl.pokemons = response.map(pokemon => pokemon.data);
              $ctrl.loading = false;
            });
          });
        };

        $ctrl.page = 1;
        $ctrl.limit = 12;
        $ctrl.loading = true;

        $ctrl.onPrevious = function() {
          if ($ctrl.page === 1) {
            return;
          }

          $ctrl.page--;
          setPokemons($ctrl.page, $ctrl.limit);
        };

        $ctrl.onNext = function() {
          $ctrl.page++;
          setPokemons($ctrl.page, $ctrl.limit);
        };

        $scope.$on("pageSelected", function(_, { selected }) {
          $ctrl.page = selected;
          setPokemons($ctrl.page, $ctrl.limit);
        });

        setPokemons($ctrl.page, $ctrl.limit);
      }
    ]
  });
})(angular);
