(function(angular) {
  "use-strict";

  const shared = angular.module("shared");

  shared.directive("scrollInto", function() {
    return function(_, element, attrs) {
      const canScroll = attrs.scrollInto === "true";

      if (!canScroll) return;

      const nativeElement = element[0];

      element.ready(function() {
        nativeElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "start"
        });
      });
    };
  });
})(angular);
