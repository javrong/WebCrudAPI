import jwt from 'jsonwebtoken';
import auth from '../auth/authController';

// Register users
var username = "Admin";
var password = "admin";

// Signin user
var token = jwt.sign({
	foo: 'bar'

	}, 

	'damnnn'
);

export default ('tokenize', token);
