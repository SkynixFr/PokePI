import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/sequelize';

//Interface Pokemon

export interface BasePokemon {
	nomPokemon: string;
	type1: string;
	type2: string;
	generation: number;
	normal: number;
	combat: number;
	vol: number;
	poison: number;
	sol: number;
	roche: number;
	insecte: number;
	spectre: number;
	acier: number;
	feu: number;
	eau: number;
	plante: number;
	electrik: number;
	psy: number;
	glace: number;
	dragon: number;
	tenebre: number;
	fee: number;
}

//interface Complete Pokemon
export interface CompletePokemon extends BasePokemon {
	idPokemon: number;
}

//classe utilisé pour pokémon
class Pokemon extends Model<CompletePokemon> implements BasePokemon {
	public idPokemon!: number;
	public nomPokemon!: string;
	public type1!: string;
	public type2!: string;
	public generation!: number;
	public normal!: number;
	public combat!: number;
	public vol!: number;
	public poison!: number;
	public sol!: number;
	public roche!: number;
	public insecte!: number;
	public spectre!: number;
	public acier!: number;
	public feu!: number;
	public eau!: number;
	public plante!: number;
	public electrik!: number;
	public psy!: number;
	public glace!: number;
	public dragon!: number;
	public tenebre!: number;
	public fee!: number;

	// constructor(pokemonPayload: any) {
	// 	super();

	// }
}

//initialisation pokemon pour la BD
Pokemon.init(
	{
		idPokemon: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		nomPokemon: {
			type: DataTypes.STRING,
			allowNull: false
		},
		type1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		type2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		generation: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		normal: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		combat: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		vol: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		poison: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		sol: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		roche: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		insecte: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		spectre: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		acier: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		feu: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		eau: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		plante: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		electrik: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		psy: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		glace: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		dragon: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		tenebre: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		fee: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	},
	{ timestamps: true, sequelize: sequelize }
);

export default Pokemon;
