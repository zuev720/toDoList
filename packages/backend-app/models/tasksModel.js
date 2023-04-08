const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Tasks = sequelize.define('tasks', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    user_name: {type: DataTypes.STRING, allowNull: false},
    user_email: {type: DataTypes.STRING, allowNull: false},
    action: {type: DataTypes.STRING, allowNull: false},
    status: {type: DataTypes.BOOLEAN, allowNull: false},
}, {
    timestamps: false
})

module.exports = { Tasks }