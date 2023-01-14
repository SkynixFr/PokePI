import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/sequelize';

//Interface Pokemon
export interface CompletePokemon {
	nomPokemon: string;
}

//Classe utilisé pour pokémon
class Pokemon extends Model<CompletePokemon> {
	public nomPokemon!: string;
}

//Initialisation pokemon pour la BD
Pokemon.init(
	{
		nomPokemon: {
			type: DataTypes.STRING,
			primaryKey: true
		}
	},
	{ timestamps: true, sequelize: sequelize }
);

export default Pokemon;
