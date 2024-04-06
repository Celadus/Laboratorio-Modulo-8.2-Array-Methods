type Especialidad = "Medico de familia" | "Pediatra" | "Cardiologo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiologo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

/*APARTADO 1: 
a) Extraer la lista de paciente que están asignados a la especialidad de Pediatría*/
const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter(
    (paciente: Pacientes) => paciente.especialidad === "Pediatra"
  );
};

console.log(
  "Pacientes asignados a la especialidad de Pediatría: ",
  obtenPacientesAsignadosAPediatria(pacientes)
);

// b) Extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter(
    (paciente: Pacientes) =>
      paciente.especialidad === "Pediatra" && paciente.edad < 10
  );
};

console.log(
  "Pacientes asignados a Pediatría con edad menor de 10 años: ",
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes)
);

/*APARTADO 2:
Activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.
(Crear una función que devuelve "true/false" si la condicion de arriba està/no està verificada)*/
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProtocolo = false;
  activarProtocolo = pacientes.some(
    (paciente: Pacientes) =>
      paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
  );
  return activarProtocolo;
};
const protocolo = activarProtocoloUrgencia(pacientes);
if (protocolo) {
  console.log("ACTIVAR protocolo de urgencia");
} else {
  console.log("NO activar protocolo de urgencia");
}

/*APARTADO 3:
Reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia*/
const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.map((pacientesActualizados: Pacientes) => {
    if (pacientesActualizados.especialidad === "Pediatra") {
      return {
        ...pacientesActualizados,
        especialidad: "Medico de familia",
      };
    }
    return pacientesActualizados;
  });
};

console.log(
  "Lista de pacientes actualizada: ",
  reasignaPacientesAMedicoFamilia(pacientes)
);

/*APARTADO 4:
Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría*/
const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let pediatraEnCasa = false;
  pediatraEnCasa = pacientes.some(
    (paciente: Pacientes) => paciente.especialidad === "Pediatra"
  );
  return pediatraEnCasa;
};
const pediatra = hayPacientesDePediatria(pacientes);
if (pediatra) {
  console.log("NO se puede enviar al pediatra a casa");
} else {
  console.log("Se puede enviar al pediatra a casa");
}

/*APARTADO 5:
Calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología*/
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let contadorPacientes: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };
  pacientes.forEach((paciente: Pacientes) => {
    if (paciente.especialidad === "Medico de familia") {
      contadorPacientes.medicoDeFamilia++;
    }
    if (paciente.especialidad === "Pediatra") {
      contadorPacientes.pediatria++;
    }
    if (paciente.especialidad === "Cardiologo") {
      contadorPacientes.cardiologia++;
    }
  });
  return contadorPacientes;
};
console.log(
  "Numero total de pacientes asignados por especialidad:",
  cuentaPacientesPorEspecialidad(pacientes)
);
