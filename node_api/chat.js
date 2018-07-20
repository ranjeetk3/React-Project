var express = require('express')
var router = express.Router()
var db = require('../connection')

//to save chat in database 
router.route('/saveChat').post(function(req, res) {
	var data = req.body
	db.query('INSERT INTO user_conversations SET ?', data, function(err, result) {
		if (err) {
			res.send(err);
		}  else {
			res.send(result);
		}		
	}); 
});

//to update status of unread message
router.route('/update-message-status').put(function(req, res) {
	var data = req.body
	db.query('UPDATE user_conversations SET status = ? WHERE from_user_id = ? AND to_user_id = ?', [1, data.from_user_id, data.to_user_id], function(err, result) {
		if (err) {
			res.send(err);
		}  else {
			res.send(result);
		}		
	}); 
});
	
module.exports = router