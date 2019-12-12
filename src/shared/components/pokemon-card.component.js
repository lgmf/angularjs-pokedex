(function(angular) {
  ("use-strict");

  const shared = angular.module("shared");

  shared.component("pokemonCard", {
    bindings: {
      pokemon: "<"
    },
    template: `
      <div class="cardheader">
        <h5 class="title">#{{$ctrl.pokemon.id}} {{$ctrl.pokemon.name}}</h5>
        <div class="types">
          <span class="badge" ng-repeat="slot in $ctrl.pokemon.types" pokemon-type="{{slot.type.name}}">
            {{slot.type.name}}
          </span>
        </div>
        <div class="sprite" bg-image="{{$ctrl.pokemon.sprites.front_default}}"></div>
      </div>

      <div class="cardbody">
        <div class="info">
          <p class="title">Height</p>
          <h6 class="value">{{$ctrl.pokemon.height}}</h6>
        </div>
        <div class="info">
          <p class="title">Weight</p>
          <h6 class="value">{{$ctrl.pokemon.weight}}</h6>
        </div>
      </div>
    `
  });
})(angular);
