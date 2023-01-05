import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/sequelize';

//Interface Pokemon

export interface BasePokemon {
	nom_Pokemon: string;
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
	public nom_Pokemon!: string;
	public type1!: string;
	public type2: string = '';
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
}

//initialisation pokemon pour la BD
Pokemon.init(
	{
		idPokemon: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		nom_Pokemon: {
			type: DataTypes.STRING,
			allowNull: false
		},
		type1: {
			type: DataTypes.STRING,
			allowNull: false
		},
		type2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		generation: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		normal: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		combat: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		vol: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		poison: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		sol: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		roche: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		insecte: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		spectre: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		acier: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		feu: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		eau: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		plante: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		electrik: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		psy: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		glace: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		dragon: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		tenebre: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		fee: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	},
	{ timestamps: true, sequelize: sequelize }
);

export default Pokemon;
