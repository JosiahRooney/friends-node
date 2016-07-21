var friends = require('../controllers/friends.js');

console.log("Routes loaded.");

module.exports = function(app){
    app.get('/friends', friends.index);
    app.get('/friend/show/:id', friends.show);
    app.post('/friend/new', friends.create);
    app.post('/friend/update', friends.update);
    app.get('/friend/delete/:id', friends.delete);
};
