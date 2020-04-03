// Variables
const listaMascotas = document.getElementById('listaMascotas');
const tipo          = document.getElementById('tipo');
const nombre        = document.getElementById('nombre');
const dueno         = document.getElementById('dueno');
const form          = document.getElementById('form');
const btnGuardar    = document.getElementById('btn-guardar');

// Arreglo u objeto mascotas
let mascotas = [
  {
    tipo: "Gato",
    nombre: "manchas",
    dueno: "Martin"
  }
];

// Funcion listar mascotas
const listarMascotas = () => {
  const htmlMascotas = mascotas.map((mascota, indice) => 
    `<tr>
      <td scope="col">${indice}</td>
      <td>${mascota.tipo}</td>
      <td>${mascota.nombre}</td>
      <td>${mascota.dueno}</th>
      <td>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary"><i class="far fa-edit"></i></button>
          <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
        </div>
      </td>
    </tr>`).join('');
    listaMascotas.innerHTML = htmlMascotas;
  // console.log(htmlMascotas);
}

function enviarDatos(evento) {
  evento.preventDefault();
  const datos = {
    tipo: tipo.value,
    nombre: nombre.value,
    dueno: dueno.value
  };
  mascotas.push(datos);
  listarMascotas();
  console.log('datos', datos);
}

listarMascotas();
form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;

