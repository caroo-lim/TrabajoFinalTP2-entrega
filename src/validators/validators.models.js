const validateEmail = (email, blockedDomains = ["yahoo", "netscape"]) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	// guard clauses

	if (!emailRegex.test(email)) {
		return { valid: false, message: "Formato de email inválido." };
	}

	const domain = email.split("@")[1].toLowerCase();

	const isBlocked = blockedDomains.some((blocked) => domain.includes(blocked));

	if (isBlocked) {
		return { valid: false, message: `No se permiten cuentas de ${domain}.` };
	}

	return { valid: true, message: "Email válido." };
};

export const validateName = (name) => {
	console.log({ name });
	if (!name || name.trim() === "") {
		return { valid: false, message: "El nombre no puede estar vacía." };
	}
	return { valid: true, message: "Nombre válido." };
};

export const validateCategory = (
	category,
	blockedCategories = ["adultos", "japones", "griego"],
) => {
	if (!category || category.trim() === "") {
		return { valid: false, message: "La categoría no puede estar vacía." };
	}

	const normalized = category
		.toLowerCase()
		.normalize("NFD") // separa acentos
		.replace(/[\u0300-\u036f]/g, ""); // elimina acentos

	const isBlocked = blockedCategories.some((blocked) =>
		normalized.includes(blocked),
	);

	if (isBlocked) {
		return {
			valid: false,
			message: `La categoría "${category}" no está permitida.`,
		};
	}

	return { valid: true, message: "Categoría válida." };
};

export const validateGenero = (genero) => {
	// si viene null, undefined o string vacío
	if (!genero || genero.trim() === "") {
		return { valid: false, message: "El género es obligatorio." };
	}

	const normalizado = genero.trim().toUpperCase(); // 'f' -> 'F', 'm' -> 'M'

	if (normalizado !== "F" && normalizado !== "M") {
		return {
			valid: false,
			message: 'El género debe ser "F" o "M".',
		};
	}

	return { valid: true, message: "Género válido." };
};

export const validateSalario = (salario) => {
	// nulo, undefined, vacío
	if (salario === null || salario === undefined || salario === "") {
		return { valid: false, message: "El salario es obligatorio." };
	}

	// convertir a número
	const valor = Number(salario);

	// no es número
	if (isNaN(valor)) {
		return { valid: false, message: "El salario debe ser un número válido." };
	}

	// salario negativo o cero
	if (valor <= 0) {
		return { valid: false, message: "El salario debe ser mayor a 0." };
	}

	// rango permitido
	if (valor < 1500000 || valor > 20000000) {
		return {
			valid: false,
			message: "El salario debe estar entre 1.500.000 y 20.000.000.",
		};
	}

	return { valid: true, message: "Salario válido." };
};

export const validateDni = (dni) => {
	// nulo, vacio, undefined
	if (dni === null || dni === undefined || dni.toString().trim() === "") {
		return { valid: false, message: "El DNI es obligatorio." };
	}

	const dniStr = dni.toString().trim();

	// Debe contener solo numeros
	const soloNumeros = /^\d+$/;
	if (!soloNumeros.test(dniStr)) {
		return {
			valid: false,
			message: "El DNI debe contener solo números.",
		};
	}

	// Debe tener exactamente 8 digitos
	if (dniStr.length !== 8) {
		return {
			valid: false,
			message: "El DNI debe contener exactamente 8 digitos.",
		};
	}

	return { valid: true, message: "DNI valido." };
};
