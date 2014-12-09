var superagent = require('superagent');
var expect = require('expect.js');

describe('express rest api server', function() {

	it('post object', function(done) {
		superagent.post('http://localhost:3000/users').send({
			emailId : 'John3',
			firstName : 'joh3',
			lastName : 'last3',
			mobile : '1233'
		}).end(function(e, res) {
			expect(res.body.emailId).to.eql('John3');
			done();
		});
	});

});

describe('express rest api server', function() {')