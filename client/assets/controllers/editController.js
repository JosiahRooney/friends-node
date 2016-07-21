app.controller('editController', ['$scope','friendsFactory', '$routeParams', '$location', function($scope, friendsFactory, $routeParams, $location) {
    $scope.friend = {};
    friendsFactory.show($routeParams.id, function(returnedData){
        $scope.friend = returnedData;
    });
    $scope.updateFriend = function () {
        friendsFactory.updateFriend($scope.friend, function () {
            $location.url('/');
        });
    };
    $scope.deleteFriend = function () {
        if (confirm("Are you sure you want to delete " + $scope.friend.first_name + '?')) {
            friendsFactory.deleteFriend($scope.friend._id, function () {
                $location.url('/');
            });
        }
    };
}]);