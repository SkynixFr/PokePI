//Setup du serveur Express
import express from 'express';
import { Send } from 'express-serve-static-core';
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();
const port = process.env.PORT || 8080;

//Setup CORS
const corsOptions = {
	origin: 'http://localhost:8081'
};

//Setup Swagger
const swaggerOptions = {
	swaggerDefinition: {
		infos: {
			title: 'PokePI',
			version: '1.0.0'
		}
	},
	apis: ['server.ts']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

//Setup Interface
export interface TypedResponse<ResBody> extends Express.Response {
	json: Send<ResBody, this>;
}

//Analyse du cors, du type de contenu
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Route par défaut
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.get(
	'/',
	(req: Express.Request, res: TypedResponse<{ message: String }>) => {
		res.json({
			message: 'Hello world!'
		});
	}
);
app.listen(port, () => {
	console.log(`Le serveur tourne sur http://localhost:${port}`);
});
