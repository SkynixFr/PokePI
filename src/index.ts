import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes/index';
import dbInit from './db/init';

//Récupération des données dans le fichier .env
dotenv.config();
if (!process.env.PORT) {
	console.error('Missing PORT');
	process.exit(1);
}
const PORT: number = parseInt(process.env.PORT);

//Lancement du serveur Express
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/api/v1', routes);

try {
	dbInit();
	app.listen(PORT, () => {
		console.log(`Server is running on http://localhost:${PORT}`);
	});
} catch (error) {
	console.error(error);
}
