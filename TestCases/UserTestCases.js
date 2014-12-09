var superagent = require('superagent');
var expect = require('expect.js');
var app = require('../app.js').app;

describe('test create user', function() {
	it('post object', function(done) {
		superagent.post('http://localhost:3000/users').send({
			emailId : 'divyaa12',
			firstName : 'Divy',
			lastName : 'Ravali',
			mobile : '123456789'
		}).end(function(e, res) {
			console.log(res.body);
			expect(res.body.emailId).to.equal("divyaa12");
			expect(res.body.fname).to.equal("Divy");
			expect(res.body.lname).to.equal("Ravali");
			expect(res.body.mobileNum).to.equal(123456789);
			done();
		});
	});
});

describe('test get user by user id', function() {
	it('post object', function(done) {
		superagent.get('http://localhost:3000/users/3771a').end(
				function(e, res) {
					console.log(res.body);
					expect(res.body[0].fname).to.equal('Divya');
					expect(res.body[0].lname).to.equal('Ravali');
					expect(res.body[0].mobileNum).to.equal(123456789);
					expect(res.body[0].emailId).to.equal('div');
					done();
				});
	});
});
