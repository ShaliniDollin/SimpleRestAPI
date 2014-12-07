var movieDao = require("../DatabaseConnections/MovieDao");
var movieObj = new movieDao();
var assert = require("assert");

describe('Movie', function(){
	  describe('listMovies()', function(){
	    it('should list movies without error', function(done){
	       	movieObj.listMovies(function(err, rows){
	        if (err) throw err;
	        console.log(" no error");
	       // for(var i = 0; i < rows.length; i++) {
	        	
	        	var name = rows[1].Name;
	        	console.log(name);
	        	assert.equal("test abc",name);
	       // }
	        done();
	      });
	    });
	  });
});
