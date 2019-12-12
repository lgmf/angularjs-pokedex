(function(angular) {
  "use-strict";

  const shared = angular.module("shared");

  shared.component("pokemonList", {
    bindings: {
      list: "<"
    },
    template: `
      <h1>Here are some pokemons:</h1>
      <ul>
        <li ng-repeat="pokemon in $ctrl.list track by $index">{{ pokemon.name }}</li>
      </ul>
    `,
    controller: function() {}
  });
})(angular);
