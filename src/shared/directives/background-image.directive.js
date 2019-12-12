(function(angular) {
  "use-strict";

  const shared = angular.module("shared");

  shared.directive("bgImage", function() {
    return function(_, element, attrs) {
      const url = attrs.bgImage;
      element.css({ "background-image": `url(${url})` });
    };
  });
})(angular);
