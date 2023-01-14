import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/sequelize';
import Pokemon from './pokemon.interface';
import Client from './client.interface';

//Interface d'un pokédex
export interface CompletePokedex {
	idPokedex: number;
}

class Pokedex extends Model<CompletePokedex> {
	public idPokedex!: number;
}

Pokedex.init(
	{
		idPokedex: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true
		}
	},
	{ timestamps: true, sequelize: sequelize }
);

//Ajoute un lien 1-N Pokedex-Pokemon
Pokedex.belongsTo(Pokemon, { foreignKey: 'nomPokemon' });

export default Pokedex;
