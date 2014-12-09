var superagent = require('superagent');
var expect = require('expect.js');
var app = require('../app.js').app;

describe('test create category', function() {
	it('post object', function(done) {
		superagent.post('http://localhost:3000/category').send({
			categoryName : 'new Electronics'
		}).end(function(e, res) {
			console.log(res.body);
			expect(res.body.categoryName).to.equal("new Electronics");
			done();
		});
	});
});

describe('test view category by ID', function() {
	it('get object', function(done) {
		superagent.get('http://localhost:3000/category/1').end(
				function(e, res) {
					expect(res.body[0].categoryId).to.equal(1);
					expect(res.body[0].categoryName).to.equal('Electronics');
					done();
				});
	});
});

describe('test view all categories', function() {
	it('get object', function(done) {
		superagent.get('http://localhost:3000/category').end(function(e, res) {
			expect(res.body[0].categoryId).to.equal(1);
			expect(res.body[0].categoryName).to.equal('Electronics');
			done();
		});
	});
});
