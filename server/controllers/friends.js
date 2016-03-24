// this is our friends.js file located at /server/controllers/friends.js

// First add the following two lines at the top of the friends controller so that we can access our model through var Friend
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

// note the immediate function and the object that is returned
module.exports = (function() {
  return {
// notice how index in the factory(client side) is calling the index method(server side)
    index: function(req, res) {
      Friend.find({}, function(err, results){
      	if(err){
      		console.log(err);
      	} else{
      		res.json(results);
      	}
      })
    },
    create: function(req, res){
    	// console.log('friends.js' + req.body.name);
    	var friend = new Friend({name: req.body.name, age: req.body.age});
    	// console.log(friend);
    	friend.save(function(err, results){
    		if(err){
    			console.log('did not save friend' + friend.errors);
    		} else{
    			console.log('new friend saved into db');
    			// res.redirect('/friends');
    			res.json(results);
    		}
    	})
    },
    destroy: function(req, res){
    	console.log('friends.js' + req.params.id);
    	Friend.remove({_id: req.params.id}, function(err, results){
    		if(err){
    			console.log('did not delete friend');
    		} else{
    			console.log('deleted friend');
    			res.json(results);
    		}
    	})
    }
  }
})();
