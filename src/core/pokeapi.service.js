angular.module("core").service("PokeApiService", [
  "$http",
  function($http) {
    const endpoint = "https://pokeapi.co/api/v2/pokemon";

    return {
      list(page = 1, limit = 20) {
        const offset = (page - 1) * limit;
        const url = `${endpoint}?offset=${offset}&limit=${limit}`;
        return $http({ method: "GET", url });
      }
    };
  }
]);
