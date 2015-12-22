'use strict';
app.controller('productsController', ['$scope', 'Product', function ($scope, Product) {

    $scope.working = true;
    $scope.error = "";

    $scope.products = Product.query(function () {
        $scope.working = false;
    }, function (error) {
        $scope.error = error;
    });    
}]);