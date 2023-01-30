import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes/index';
import dbInit from './db/init';

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

//Récupération des données dans le fichier .env
dotenv.config();
if (!process.env.PORT) {
	console.error('Missing PORT');
	process.exit(1);
}
const PORT: number = parseInt(process.env.PORT);

//Configuration de Swagger
const swaggerOptions = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'PokePi Express API with Swagger',
			version: '0.1.0',
			description:
				'PokePi est une simple CRUD API créée avec Express et documentée avec Swagger'
		},
		servers: [
			{
				url: 'http://localhost:8080/api/v1'
			}
		]
	},
	apis: ['./swagger.yaml']
};

const swaggerJsDocs = swaggerJsDoc(swaggerOptions);

//Lancement du serveur Express
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/api/v1', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDocs));

//Lancement de la connexion à la base de données et du serveur
try {
	dbInit();
	app.listen(PORT, () => {
		console.log(`Server is running on http://localhost:${PORT}`);
	});
} catch (error) {
	console.error(error);
}
