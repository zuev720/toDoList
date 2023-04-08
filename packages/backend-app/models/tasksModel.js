const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Tasks = sequelize.define('tasks', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    action: {type: DataTypes.STRING, allowNull: false},
}, {
    timestamps: false
})

module.exports = { Tasks }