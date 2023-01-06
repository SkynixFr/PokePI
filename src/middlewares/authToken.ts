import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

function VerifyToken(req: Request, res: Response, next: NextFunction) {
	const token = req.header('x-access-token');

	if (!token) {
		return res.status(401).send('No token provide');
	}

	try {
		const decoded = jwt.verify(token, process.env.SECRET_TOKEN!);
		req.body.mailClient = (decoded as JwtPayload).mailClient;
		next();
	} catch (error) {
		return res.status(401).send('Unautorized');
	}
}

export default VerifyToken;
