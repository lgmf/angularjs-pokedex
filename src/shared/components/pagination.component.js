(function(angular) {
  ("use-strict");

  const shared = angular.module("shared");

  shared.component("pagination", {
    bindings: {
      max: "<",
      limit: "<",
      current: "<"
    },
    template: `
      <button
        class="page"
        ng-repeat="page in $ctrl.pages"
        ng-class="{'-selected': page === $ctrl.current}"
        ng-click="$ctrl.onPageSelected(page)">{{ page }}</button>
    `,
    controller: [
      "$scope",
      function($scope) {
        const $ctrl = this;

        const pagesQuantity = Math.ceil($ctrl.max / $ctrl.limit);

        $ctrl.pages = Number.isNaN(pagesQuantity) ? [] : Array.from({ length: pagesQuantity }, (_, i) => i + 1);

        $ctrl.onPageSelected = function(page) {
          $ctrl.current = page;
          $scope.$emit("pageSelected", { selected: page });
        };
      }
    ]
  });
})(angular);
