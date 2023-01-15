import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/sequelize';
import Pokedex from './pokedex.interface';

//Interface d'un client
export interface CompleteClient {
	mailClient: string;
	mdpClient: string;
}

//Class client qui se base sur le model client
class Client extends Model<CompleteClient> {
	public mailClient!: string;
	public mdpClient!: string;
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
		}
	},
	{
		timestamps: true,
		sequelize: sequelize
	}
);

//Ajout un lien 1-1 client-pokedex
Client.hasOne(Pokedex, { foreignKey: 'mailClient' });

export default Client;
