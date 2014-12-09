var userDao = require("../DatabaseConnections/UserDao");
var userobj = new userDao();

var ejs = require("ejs");

function User() {

}

User.prototype.validateUser = function(callback,request)
{

	console.log("user function ");
	
	userobj.validateUser(function(err,res) {
		callback(err,res);
		
	},request.emailId,request.password);

};


User.prototype.viewCustomers = function(callback,request)
{
	
	console.log("view customers function ");
	userobj.viewCustomers(function(err,res) {
		callback(err,res);
		
	});

};

User.prototype.createUser = function(callback,request)
{	
	console.log("signUp function "+request.emailId);
	userobj.createUser(function(err,res) {
		callback(err,res);
		
	},request.emailId,request.firstName,request.lastName,request.mobile);

};


User.prototype.updateUser = function(callback,request)
{
	console.log("Update User function "+request.mobile);
	userobj.updateUser(function(err,res) {
		
		callback(err,res);
		
	},request.userId,request.emailId,request.firstName,request.lastName,request.mobile);

};


User.prototype.remove = function(callback,emailId){
	
	
	userobj.removeUser(function(err,res){
		callback(err,res);
	},emailId);
};


User.prototype.getUserById = function(callback,userId){
	
	
	userobj.getUserById(function(err,res){
		callback(err,res);
	},userId);
};


module.exports = User;
