(function(angular) {
  ("use-strict");

  const shared = angular.module("shared");

  shared.component("pokemonCard", {
    bindings: {
      pokemon: "<"
    },
    template: `
      <div class="cardheader">
        <p class="info">#{{$ctrl.pokemon.id}}</p>
        <h4 class="title">{{$ctrl.pokemon.name}}</h4>
        <div class="types">
          <pokemon-type types="$ctrl.pokemon.types"></pokemon-type>
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
