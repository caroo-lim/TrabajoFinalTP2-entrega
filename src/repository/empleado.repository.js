import { EmpleadoModel } from "../model/empleado.model.js";

export const EmpleadoRepository = {

	getAll: async () => {
		return await EmpleadoModel.findAll();
	},

	getOne: async (id) => {
		const empleado = await EmpleadoModel.findOne({ where: { id } });
		return empleado ? empleado.dataValues : null;
	},

	// Baja lógica del empleado
	deleteOne: async (id) => {
		return await EmpleadoModel.update(
			{
				empleado_activo: false,
			},
			{ where: { id } }
		);
	},

	// Actualizar datos principales del empleado
	updateOne: async ({ id, nombre, apellido, email, telefono, salarioBase }) => {
		return await EmpleadoModel.update(
			{
				nombre,
				apellido,
				email,
				telefono,
				salarioBase
			},
			{ where: { id } }
		);
	},

	/* updateOne: async ({ nombre, apellido, id, email }) => {
		return await EmpleadoModel.update(
			{
				nombre,
				apellido,
				email,
			},
			{ where: { id } },
		);
	}, */

	// Validación de DNI único
	validarDniExistente: async (dni) => {
		const empleado = await EmpleadoModel.findOne({ where: { dni } });
		return empleado !== null;
	},

	// Crear un nuevo empleado
	createOne: async ({
		nombre,
		apellido,
		dni,
		telefono,
		email,
		fechaNacimiento,
		fechaIngreso,
		salarioBase,
		genero,
		area,
		puesto,
	}) => {
		return await EmpleadoModel.create({
			nombre,
			apellido,
			dni,
			telefono,
			email,
			fechaNacimiento,
			fechaIngreso,
			salarioBase,
			genero,
			area,
			puesto,
			empleado_activo: true, // aseguramos que sea activo
		});
	},
};
