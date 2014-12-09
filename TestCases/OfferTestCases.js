var superagent = require('superagent');
var expect = require('expect.js');
var app = require('../app.js').app;

describe('test create Offer', function() {
	it('post object', function(done) {
		superagent.post('http://localhost:3000/category/1/product/1/offer').send({
					buyingQty: 2,
					offeredDetails: 'Mobile and fan',
					buyerStatus: 'yes',
					sellerStatus: 'no',
					offerExpiry: '2014-01-01',
					productId: 1,
					buyerId: 1
		}).end(function(e, res) {
			console.log(res.body);
			expect(res.body.buyingQty).to.equal(2);
			expect(res.body.offeredDetails).to.equal("Mobile and fan");
			done();
		});
	});
});

describe('test update offer', function() {
	it('post object', function(done) {
		superagent.put('http://localhost:3000/category/1/product/1/offer/927ea').send({
			buyingQty:"2",
			offeredDetails:"pen12",
			buyerStatus:"1",
			sellerStatus:"1",
			offerExpiry:"11-23-2014",
			productId:2,
			buyerId:2222,
			comments:"2skdjklfdfkgfkjkjdf"
		}).end(function(e, res) {
			console.log(res.body);
			expect(res.body.buyingQty).to.equal(2);
			expect(res.body.offeredDetails).to.equal("pen12");
			done();
		});
	});
});

describe('test delete offer', function() {
	it('post object', function(done) {
		superagent.del('http://localhost:3000/category/1/product/1/offer/86a9e').end(
				function(e, res) {
					console.log(res.body);
					expect(res.body).to.equal(1);
					done();
				});
	});
});
describe('test view offers', function() {
	it('get object', function(done) {
		superagent.get('http://localhost:3000/category/1/offer').end(
				function(e, res) {
					expect(res.body[0].offerId).to.equal("e7717");
					expect(res.body[0].buyingQty).to.equal(10);
					done();
				});
	});
});

describe('test view all offers by offerid', function() {
	it('get object', function(done) {
		superagent.get('http://localhost:3000/category/1/product/2/offer/e7717').end(function(e, res) {
			expect(res.body[0].offerId).to.equal("e7717");
			expect(res.body[0].buyingQty).to.equal(10);
			done();
		});
	});
});
describe('test view all offers by productID', function() {
	it('get object', function(done) {
		superagent.get('http://localhost:3000/category/1/product/2/offer').end(function(e, res) {
			expect(res.body[0].offerId).to.equal("e7717");
			expect(res.body[0].buyingQty).to.equal(10);
			done();
		});
	});
});