app.controller('friendsController', ['$scope','friendsFactory', '$routeParams', function($scope, friendsFactory, $routeParams) {
    $scope.friends = [];
    friendsFactory.index(function(returnedData){
        $scope.friends = returnedData;
    });
}]);