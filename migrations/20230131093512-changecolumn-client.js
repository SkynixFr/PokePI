'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.changeColumn('Clients', 'username', {
			type: Sequelize.STRING,
			allowNull: false
		});
		await queryInterface.changeColumn('Clients', 'mdpClient', {
			type: Sequelize.STRING,
			allowNull: false
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.changeColumn('Clients', 'username', {
			type: Sequelize.STRING
		});
		await queryInterface.changeColumn('Clients', 'mdpClient', {
			type: Sequelize.STRING
		});
	}
};
