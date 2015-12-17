'use strict';
app.controller('loginController', ['$scope', '$location', 'authService', function ($scope, $location, authService) {

    $scope.message = "";

    $scope.loginData = {
        userName: "",
        password: ""
    };

    $scope.login = function () {

        authService.login($scope.loginData).then(function (response) {
            $location.path("/products");
        },
         function (err) {
             $scope.message = err.err_description;
         });
    };

}]);