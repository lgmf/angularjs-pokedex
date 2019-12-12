(function(angular) {
  ("use-strict");

  const shared = angular.module("shared");

  shared.component("pokemonType", {
    bindings: {
      types: "<"
    },
    template: `
      <span class="badge" ng-repeat="slot in $ctrl.types track by $index" pokemon-type-bg="{{slot.type.name}}">
        {{ slot.type.name }}
      </span>
    `
  });
})(angular);
