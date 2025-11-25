import { DataTypes } from "sequelize";
import { sequelize } from "../databases/mysql.cnx.js";

export const EmpleadoModel = sequelize.define(
	"Empleado",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
			field: "id",
		},
		nombre: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		apellido: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		dni: {
			type: DataTypes.STRING(20),
			allowNull: false,
			unique: true,
		},
		email: {
			type: DataTypes.STRING(150),
			allowNull: false,
		},
		telefono: {
			type: DataTypes.STRING(30),
			allowNull: true,
		},
		fechaNacimiento: {
			type: DataTypes.DATEONLY,
			allowNull: false,
		},
		fechaIngreso: {
			type: DataTypes.DATEONLY,
			allowNull: false,
		},
		salarioBase: {
			type: DataTypes.DECIMAL(12, 2),
			allowNull: false,
		},
		genero: {
			type: DataTypes.CHAR(1),
			allowNull: false,
		},
		area: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		puesto: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		empleado_activo: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true,
		},
	},
	{
		tableName: "empleados",
		timestamps: false,
	},
);
