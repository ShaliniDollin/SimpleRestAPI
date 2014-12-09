var superagent = require('superagent');
var expect = require('expect.js');
var app = require('../app.js').app;

//describe('test create product', function() {
//	it('post object', function(done) {
//		superagent.post('http://localhost:3000/category/1/product').send({
//			productName : 'SamsungMobile123',
//			quantity : 1,
//			userId : 'e23a8',
//			expectedOffer : '123',
//			productDesc : 'good',
//			prodExpDate : '2014-01-01',
//			isValid : 1,
//			categoryId : 1,
//			lastUpdated : '2014-0-02'
//		}).end(function(e, res) {
//			console.log(res.body);
//			expect(res.body.quantity).to.equal(1);
//			expect(res.body.productName).to.equal("SamsungMobile");
//			done();
//		});
//	});
//});
//
//describe('test update product', function() {
//	it('post object', function(done) {
//		superagent.put('http://localhost:3000/category/1/product/1').send({
//			productId : 1,
//			productName : 'SamsungMobile',
//			quantity : 2,
//			userId : 'e23a8',
//			expectedOffer : '1234',
//			productDesc : 'avg',
//			prodExpDate : '2014-01-01',
//			isValid : 1,
//			categoryId : 1,
//			lastUpdated : '2014-0-02',
//			oldCategoryId : 1
//		}).end(function(e, res) {
//			console.log(res.body);
//			expect(res.body.quantity).to.equal(2);
//			expect(res.body.productName).to.equal("SamsungMobile");
//			done();
//		});
//	});
//});
//
//describe('test delete product', function() {
//	it('post object', function(done) {
//		superagent.del('http://localhost:3000/category/1/product/2').end(
//				function(e, res) {
//					console.log(res.body);
//					expect(res.body).to.equal(1);
//					done();
//				});
//	});
//});
describe('test view products', function() {
	it('get object', function(done) {
		superagent.get('http://localhost:3000/category/1/product/2').end(
				function(e, res) {
					expect(res.body[0].productName).to.equal("plates");
					expect(res.body[0].quantity).to.equal(121);
					done();
				});
	});
});
describe('test view products by category ID', function() {
	it('get object', function(done) {
		superagent.get('http://localhost:3000/category/1/product').end(
				function(e, res) {
					expect(res.body[0].productName).to.equal("Ballons");
					expect(res.body[0].quantity).to.equal(1111);
					done();
				});
	});
});
