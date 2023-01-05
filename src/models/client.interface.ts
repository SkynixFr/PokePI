import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/sequelize';

export interface BaseClient {
	mailClient: string;
	mdpClient: string;
}

export interface CompleteClient extends BaseClient {
	idClient: number;
}

class Client extends Model<CompleteClient> implements BaseClient {
	public idClient!: number;
	public mailClient!: string;
	public mdpClient!: string;
}

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
			allowNull: false,
			validate: {
				is: '^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$',
				len: [8, 20]
			}
		}
	},
	{
		timestamps: true,
		sequelize: sequelize
	}
);

export default Client;
