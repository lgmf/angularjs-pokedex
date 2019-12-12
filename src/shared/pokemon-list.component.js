(function(angular) {
  ("use-strict");

  const shared = angular.module("shared");

  shared.component("pokemonList", {
    bindings: {
      list: "<"
    },
    template: `
      <div class="card" ng-repeat="pokemon in $ctrl.list track by pokemon.name">
        
        <div class="cardheader">
          <h5 class="title">#{{pokemon.id}} {{pokemon.name}}</h5>
          <div class="types">
            <span class="badge" ng-repeat="slot in pokemon.types" pokemon-type="{{slot.type.name}}">
              {{slot.type.name}}
            </span>
          </div>
          <div class="sprite" bg-image="{{pokemon.sprites.front_default}}"></div>
        </div>

        <div class="cardbody">
          <div class="info">
            <span class="title">Height</span>
            <span class="value">{{pokemon.height}}</span>
          </div>
          <div class="info">
            <p class="title">Weight</p>
            <h6 class="value">{{pokemon.weight}}</h6>
          </div>
        </div>
      </div>
    `
  });
})(angular);
