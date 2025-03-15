const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Import your Sequelize instance

const Category = sequelize.define("Category", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});

module.exports = Category;
