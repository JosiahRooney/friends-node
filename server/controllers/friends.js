var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

console.log('Friends controller.');
function FriendsController(){

    // app.get('/friends', friends.index);
    this.index = function(req, res){
        Friend.find({}, function (err, friends) {
            if (err) {
                console.log('GET / error', err);
                res.json({
                    status: false,
                    message: 'Error getting friends list'
                });
            } else {
                res.json(friends);
            }
        });
    };

    // app.get('/friend/:id/show', friends.show);
    this.show = function(req, res){
        Friend.findOne({'_id': req.params.id}, function (err, friend) {
            if (err) {
                console.log('GET /friend/', req.params.id, '/show', err);
            } else {
                res.json(friend);
            }
        });
    };

    // app.post('/friends/new/process', friends.create);
    this.create = function(req, res){
        var friend = new Friend();
        friend.first_name = req.body.first_name;
        friend.last_name = req.body.last_name;
        friend.age = req.body.age;
        friend.save(function (err) {
            if (err) {
                console.log('Error saving friend in DB', err);
                res.json({
                    status: false,
                    message: 'Error saving friend in DB'
                });
            } else {
                console.log('New friend in DB. Name:',friend.first_name, friend.last_name, 'Age:', friend.age);
                res.json({
                    status: true
                });
            }
        });
    };

    // app.put('/friends/:id/edit', friends.update);
    // this.update = function(req, res){
    //     Friend.findOne({'_id': req.body.id}, function (err, friend) {
    //         if (err) {
    //             console.log('GET /friend/' + req.params.id + '/edit error', err);
    //             res.json({
    //                 status: false,
    //                 message: 'No friend found with that id.'
    //             });
    //         } else {
    //             res.json({
    //                 status: true,
    //                 friend: friend
    //             });
    //         }
    //     });
    // };

    // app.put('/friends/:id/edit/process', friends.updateProcess);
    this.update = function (req, res) {
        console.log('Attempting to update friend', req.body.friend[0]);
        Friend.update({'_id': req.body.friend[0]._id}, {
            'first_name': req.body.friend[0].first_name,
            'last_name': req.body.friend[0].last_name,
            'age': req.body.friend[0].age
        }, function (err) {
            if (err) {
                console.log('POST /friend/' + req.friend[0].body._id + '/edit error', err);
                res.json({status: false, message: 'Error updating friend.'});
            } else {
                res.json({status: true, message: "Updated friend"});
            }
        });
    };

    // app.post('/friends/:id/delete', friends.delete);
    this.delete = function(req, res){
        Friend.remove({'_id': req.params.id}, function (err) {
            if (err) {
                console.log('POST /friend/' + req.params.id + '/delete error', err);
                res.json({
                    status: false,
                    message: 'Error deleting friend'
                });
            } else {
                res.json({
                    status: true
                });
            }
        })
    };
}
module.exports = new FriendsController();