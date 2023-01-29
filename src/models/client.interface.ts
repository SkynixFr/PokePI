import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/sequelize';
import Pokedex from './pokedex.interface';

//Interface d'un client
export interface BaseClient {
	username: string;
}

export interface CompleteClient extends BaseClient {
	mailClient: string;
	mdpClient: string;
}

//Class client qui se base sur le model client
class Client extends Model<CompleteClient> implements BaseClient {
	public mailClient!: string;
	public mdpClient!: string;
	public username!: string;
}

//Initialisation de la table client en base de données
Client.init(
	{
		mailClient: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEmail: true
			},
			primaryKey: true
		},
		mdpClient: {
			type: DataTypes.STRING,
			allowNull: false
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		timestamps: true,
		sequelize: sequelize
	}
);

export default Client;
