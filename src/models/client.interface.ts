import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/sequelize';

//Interface d'un client
export interface BaseClient {
	mailClient: string;
	mdpClient: string;
}

//Interface d'un client complet
export interface CompleteClient extends BaseClient {
	idClient: number;
}

//Class client qui se base sur le model client
class Client extends Model<CompleteClient> implements BaseClient {
	public idClient!: number;
	public mailClient!: string;
	public mdpClient!: string;
}

//Initialisation de la table client en base de données
Client.init(
	{
		idClient: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true
		},
		mailClient: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEmail: true
			}
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

export default Client;
