(function(angular) {
  "use-strict";

  const layout = angular.module("layout");

  layout.component("navbar", {
    bindings: {
      routes: "<",
      activeRoute: "<"
    },
    template: `
      <li class="item" ng-repeat="route in $ctrl.routes track by $index">
        <a 
          class="link" 
          href="/#{{route.url}}" 
          ng-class="{'-active': route.label === $ctrl.activeRoute}">{{ route.label }}</a>
      </li>
    `
  });
})(angular);
