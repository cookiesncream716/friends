  // This is our routes.js file located in server/config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)
  var friends = require('./../controllers/friends.js');

  module.exports = function(app) {
  // verb: get, plural of target as the URI is the RESTful index method (it returns all friends)
    app.get('/friends', function(req, res) {
    	friends.index(req, res);
    });
    app.post('/friends', function(req, res){
    	// console.log('routes', req.body)
    	friends.create(req, res);
    });
    app.delete('/friends/:id', function(req, res){
    	// console.log('routes' + req.params.id);
    	friends.destroy(req, res);
    })
  };