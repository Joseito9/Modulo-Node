const {
  registrarCita,
  leerCitas,
  actualizarCita,
  borrarCita,
} = require("./operaciones");
const args = process.argv.slice(2);
const operacion = args[0];

if (operacion === "registrar") {
  const [nombre, edad, tipo, color, enfermedad] = args.slice(1);
  if (nombre && edad && tipo && color && enfermedad) {
    registrarCita(nombre, edad, tipo, color, enfermedad);
  } else {
    console.log(
      "Por favor ingresa todos los datos: nombre, edad, tipo, color, enfermedad."
    );
  }
} else if (operacion === "leer") {
  leerCitas();
} else if (operacion === "actualizar") {
  const [id, nuevoNombre, nuevaEdad, nuevoTipo, nuevoColor, nuevaEnfermedad] =
    args.slice(1);
  if (
    id &&
    nuevoNombre &&
    nuevaEdad &&
    nuevoTipo &&
    nuevoColor &&
    nuevaEnfermedad
  ) {
    actualizarCita(
      id,
      nuevoNombre,
      nuevaEdad,
      nuevoTipo,
      nuevoColor,
      nuevaEnfermedad
    );
    console.log("Cita actualizada correctamente.");
  } else {
    console.log("Por favor ingresa el ID de la cita y todos los nuevos datos.");
  }
} else if (operacion === "borrar") {
  const [id] = args.slice(1);
  if (id) {
    borrarCita(id);
    console.log("Cita eliminada correctamente.");
  } else {
    console.log("Por favor ingresa el ID de la cita que deseas borrar.");
  }
} else {
  console.log(
    "Operación no reconocida. Por favor utiliza 'registrar', 'leer', 'actualizar' o 'borrar'."
  );
}
