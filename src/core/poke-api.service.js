(function(angular) {
  "use strict";

  const core = angular.module("core");

  core.service("PokeApiService", [
    "$http",
    function($http) {
      const endpoint = "https://pokeapi.co/api/v2/pokemon";

      return {
        list(page = 1, limit = 20) {
          const offset = (page - 1) * limit;
          const url = `${endpoint}?offset=${offset}&limit=${limit}`;
          return $http({ method: "GET", url });
        },
        getByName(name) {
          const url = `${endpoint}/${name}`;
          return $http({ method: "GET", url });
        }
      };
    }
  ]);
})(angular);
