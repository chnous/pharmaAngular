'use strict';
app.controller('productsController', ['$scope', '$http', 'productsService', function ($scope, $http, productsService) {

    $scope.working = true;
    $scope.error = "";

    productsService.getProducts().then(
        function (result) {
            $scope.working = false;
            $scope.products = result.data;
        },
        function (result) {
            $scope.error = result.data.message;
        })

    
}]);