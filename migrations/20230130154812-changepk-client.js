'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.removeColumn('Clients', 'id');
		await queryInterface.changeColumn('Clients', 'mailClient', {
			autoIncrement: false,
			primaryKey: true,
			type: Sequelize.STRING
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeConstraint('Clients', 'PRIMARY');
		await queryInterface.changeColumn('Clients', 'mailClient', {
			type: Sequelize.STRING
		});
		await queryInterface.addColumn('Clients', 'id', {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		});
	}
};
