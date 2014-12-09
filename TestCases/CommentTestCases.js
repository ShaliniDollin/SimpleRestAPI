var superagent = require('superagent');
var expect = require('expect.js');
var app = require('../app.js').app;


describe('test create comment', function() {
	it('post object', function(done) {
		superagent.post('http://localhost:3000/category/1/product/2/offer/e7717/comment').send({
			Comment : "HIIIIII",
			userId : "ab10e"
		}).end(function(e, res) {
			console.log(res.body);
		
			expect(res.body.userId).to.equal("ab10e");
			done();
		});
	});
});

describe('test view comments', function() {
	it('get object', function(done) {
		superagent.get('http://localhost:3000/getCommentHistory').end(
				function(e, res) {
					expect(res.body[0].CommentId).to.equal("6c058");
					expect(res.body[0].userId).to.equal("ab10e");
					done();
				});
	});
});