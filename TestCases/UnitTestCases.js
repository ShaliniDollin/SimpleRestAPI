var index = require("../routes/index");
var indexObj = new index();
var assert = require("assert");

//request.emailId,request.firstName,request.lastName,request.mobile
var newobj = { "emailId": "email", "firstName" : "firstName", "lastName" : "lastName", "mobile" : "mobile"};

describe('CreateUser', function() {
	describe('createuser()', function() {
		it('create new user', function(done) {
			indexObj.createuser(function(err, rows) {
				if (err)
					throw err;
				console.log(" no error");
				var name = rows.emailID;
				console.log(name);
				assert.equal("email", name);
				done();
			}, newobj);
		});
	});
});

