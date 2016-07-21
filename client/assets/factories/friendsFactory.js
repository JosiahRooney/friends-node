// console.log('Friends Factory');
app.factory('friendsFactory', ['$http', function($http) {
    // constructor for our factory
    var friends = [];
    var friend = [];
    function FriendsFactory(){
        var _this = this;
        this.addFriend = function(newfriend, callback){
            $http.post('/friend/new', newfriend).then(function(returned_data){
                callback(returned_data.data);
            });
        };
        this.updateFriend = function(updateFriend, callback){
            $http.post('/friend/update/', updateFriend).then(function (returned_data) {
                friends = returned_data.data;
                callback(returned_data.data);
            })
        };
        this.index = function(callback){
            //call this method if you want to update or set the friends variable
            $http.get('/friends').then(function(returned_data){
                friends = returned_data.data;
                callback(friends);
            });
            //Note: this can be shortened to $http.get('/friends').then(callback);
            //But only if you only want to run the callback from the controller.

        };
        this.deleteFriend = function(id, callback){// what parameters do we need?
            $http.get('/friend/delete/'+id).then(function (returned_data) {
                friends = returned_data.data;
                callback(returned_data);
            });
        };
        this.show = function(id, callback){// what parameters do we need?
            $http.get('/friend/show/'+id).then(function(returned_data){
                callback(returned_data.data);
            });
        };
        // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
        this.getFriends = function(callback){
            callback(friends);
        };
        this.getFriend = function(callback){
            callback(friend);
        };
    }
    return new FriendsFactory();
}]);