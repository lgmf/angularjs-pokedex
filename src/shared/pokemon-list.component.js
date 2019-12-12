(function(angular) {
  "use-strict";

  const shared = angular.module("shared");

  shared.component("pokemonList", {
    bindings: {
      list: "<"
    },
    template: `
      <h1 class="title">Here are some pokemons:</h1>
      <ul class="list">
        <li class="item" ng-repeat="pokemon in $ctrl.list track by $index">{{ pokemon.name }}</li>
      </ul>
    `,
    controller: function() {}
  });
})(angular);
