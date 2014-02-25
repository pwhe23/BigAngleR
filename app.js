
(function () {
    $.connection.hub.start().then(function () {
        angular.element(document).ready(function () {
            angular.bootstrap(document, ['app']);
        });
    });
})();

var app = angular.module('app', []);
app.value('$', $);

app.service('hubs', function ($) {
    return $.connection;
});

app.controller('homeCtrl', function ($scope, hubs) {

    hubs.homeHub.server.load().done(function (data) {
        $scope.$apply(function () {
            $.extend($scope, data);
        });
    });

    $scope.add = function () {
        hubs.homeHub.server.add($scope.item).done(function () {
            $scope.$apply(function () {
                $scope.item = '';
            });
        });
    };

    hubs.homeHub.on('updateItems', function (data) {
        $scope.$apply(function () {
            $scope.Items = data;
        });
    });
});
