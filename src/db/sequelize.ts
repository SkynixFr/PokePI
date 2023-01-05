import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

//Récupération de la configuration d'environnement de la base de données
dotenv.config();
if (
	!process.env.DB_NAME ||
	!process.env.DB_HOST ||
	!process.env.USER ||
	!process.env.PASSWORD
) {
	console.error('Missing variable');
	process.exit(1);
}
const DB_NAME: string = process.env.DB_NAME!;
const DB_HOST: string = process.env.DB_HOST!;
const USER: string = process.env.USER!;
const PASSWORD: string = process.env.PASSWORD!;

//Connexion à la base de données
const sequelize = new Sequelize(DB_NAME, USER, PASSWORD, {
	host: DB_HOST,
	dialect: 'mysql'
});

export default sequelize;
