// Sin Variables de entorno

import esPrimo from "./index.js";

const numero = 7;
console.log(`¿Es ${numero} un número primo? ${esPrimo(numero)}`);

// Con Variables de Entorno

import dotenv from "dotenv";

dotenv.config();

const numeroOCULTO = process.env.NUMEROOCULTO; // Obtener el número desde .env
console.log(`¿Es ${numeroOCULTO} un número primo? ${esPrimo(numeroOCULTO)}`);
