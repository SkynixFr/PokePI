import { Request, Response, NextFunction } from 'express';

const jwt = require('jsonwebtoken');

function VerifyToken(req: Request, res: Response, next: NextFunction) {
	const token = req.header('auth-token');

	if (!token) {
		return res.status(403).send('No token provide');
	}

	try {
		const verifiedToken = jwt.verify(token, process.env.SECRET_TOKEN);
		console.log(verifiedToken);
		next();
	} catch (error) {
		return res.status(401).send('Unauthorized access');
	}
}

export default VerifyToken;
