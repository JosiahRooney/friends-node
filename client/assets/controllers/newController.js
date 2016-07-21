app.controller('newController', ['$scope','friendsFactory', '$routeParams', '$location', function($scope, friendsFactory, $routeParams, $location) {
    $scope.friends = [];
    var index = function(){
        friendsFactory.index(function(returnedData){
            $scope.friends = returnedData;
        });
    };
    index();
    $scope.addFriend = function () {
        friendsFactory.addFriend($scope.newFriend, function (data) {
            console.log('Adding friend - newController');
            $scope.friends = data;
        });
        $scope.newFriend = {};
        $location.url('/');
    };
}]);