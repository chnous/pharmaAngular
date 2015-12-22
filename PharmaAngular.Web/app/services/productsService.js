'use strict';
app.factory('Product', ['$resource', function ($resource) {

    return $resource('http://localhost:59459/api/products/:productId', { productId: '@productId' },{
        update: {method:'PUT'}
    });
}]);