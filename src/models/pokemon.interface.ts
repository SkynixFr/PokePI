import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/sequelize';

//Interface Pokemon

export interface BasePokemon {
	Nom_Pokemon: string;
	Type1: string;
	Type2: string;
	Generation: number;
	Normal: number;
	Combat: number;
	Vol: number;
	Poison: number;
	Sol: number;
	Roche: number;
	Insecte: number;
	Spectre: number;
	Acier: number;
	Feu: number;
	Eau: number;
	Plante: number;
	Electrik: number;
	Psy: number;
	Glace: number;
	Dragon: number;
	Tenebre: number;
	Fee: number;
}

//interface Complete Pokemon
export interface CompletePokemon extends BasePokemon {
	idPokemon: number;
}

//classe utilisé pour pokémon
class Pokemon extends Model<CompletePokemon> implements BasePokemon {
	public idPokemon!: number;
	public Nom_Pokemon!: string;
	public Type1!: string;
	public Type2: string = '';
	public Generation!: number;
	public Normal!: number;
	public Combat!: number;
	public Vol!: number;
	public Poison!: number;
	public Sol!: number;
	public Roche!: number;
	public Insecte!: number;
	public Spectre!: number;
	public Acier!: number;
	public Feu!: number;
	public Eau!: number;
	public Plante!: number;
	public Electrik!: number;
	public Psy!: number;
	public Glace!: number;
	public Dragon!: number;
	public Tenebre!: number;
	public Fee!: number;
}

//initialisation pokemon pour la BD
Pokemon.init(
	{
		idPokemon: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		Nom_Pokemon: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Type1: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Type2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Generation: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Normal: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Combat: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Vol: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Poison: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Sol: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Roche: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Insecte: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Spectre: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Acier: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Feu: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Eau: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Plante: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Electrik: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Psy: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Glace: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Dragon: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Tenebre: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Fee: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	},
	{ timestamps: true, sequelize: sequelize }
);

export default Pokemon;
