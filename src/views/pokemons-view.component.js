(function(angular) {
  "use-strict";

  const pokemonView = angular.module("pokemonView");

  pokemonView.component("pokemonsView", {
    template: `
      <pokemon-list list="$ctrl.pokemons"></pokemon-list>
      <div class="btn-group">
        <button class="btn" ng-click="$ctrl.onPrevious()">Previous</button>
        <button class="btn" ng-click="$ctrl.onNext()">Next</button>
      </div>
    `,
    controller: [
      "$q",
      "PokeApiService",
      function($q, pokeApiService) {
        const $ctrl = this;

        function setPokemons(page, limit = 12) {
          pokeApiService.list(page, limit).then(response => {
            const pokemons = response.data.results;
            const pokemonListDetails = pokemons.map(pokemon => pokeApiService.getByName(pokemon.name));
            $q.all(pokemonListDetails).then(response => {
              $ctrl.pokemons = response.map(pokemon => pokemon.data);
            });
          });
        }

        let page = 1;

        $ctrl.onPrevious = function() {
          if (page === 1) {
            return;
          }

          page--;
          setPokemons(page);
        };

        $ctrl.onNext = function() {
          page++;
          setPokemons(page);
        };

        setPokemons(page);
      }
    ]
  });
})(angular);
