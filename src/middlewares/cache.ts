import { Request, Response, NextFunction } from 'express';

const mcache = require('memory-cache');

function Cache(req: Request, res: Response, next: NextFunction) {
	let key = '__express__' + req.originalUrl || req.url;
	let cachedBody = mcache.get(key);
	if (cachedBody) {
		return res.status(201).send(cachedBody);
	}
	try {
		mcache.put(key, req.body, 10 * 1000);
		next();
	} catch (error) {
		return res.status(401).send('Unknown error');
	}
}

export default Cache;
