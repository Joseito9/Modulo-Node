const fs = require("fs");

const registrarCita = (nombre, edad, tipo, color, enfermedad) => {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf-8"));
  const id = Math.floor(Math.random() * 100).toString();
  if (!nombre || !edad || !tipo || !color || !enfermedad) {
    console.log("Por favor ingresa todos los datos");
    return;
  }
  const nuevaCita = {
    id,
    nombre,
    edad,
    tipo,
    color,
    enfermedad,
  };

  citas.push(nuevaCita);

  fs.writeFileSync("citas.json", JSON.stringify(citas));
};

const leerCitas = () => {
  let citas = JSON.parse(fs.readFileSync("citas.json", "utf-8"));
  console.log(citas);
};

const actualizarCita = (
  id,
  nuevoNombre,
  nuevaEdad,
  nuevoTipo,
  nuevoColor,
  nuevaEnfermedad
) => {
  let citas = JSON.parse(fs.readFileSync("citas.json", "utf-8"));
  citas = citas.map((cita) => {
    if (cita.id === id) {
      cita.nombre = nuevoNombre;
      cita.edad = nuevaEdad;
      cita.tipo = nuevoTipo;
      cita.color = nuevoColor;
      cita.enfermedad = nuevaEnfermedad;
    }
    return cita;
  });
  fs.writeFileSync("citas.json", JSON.stringify(citas));
};

const borrarCita = (id) => {
  let citas = JSON.parse(fs.readFileSync("citas.json", "utf-8"));
  citas = citas.filter((cita) => cita.id !== id);
  fs.writeFileSync("citas.json", JSON.stringify(citas));
};

module.exports = {
  registrarCita,
  leerCitas,
  actualizarCita,
  borrarCita,
};
