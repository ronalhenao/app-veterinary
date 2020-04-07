// Variables
const listaMascotas = document.getElementById('listaMascotas');
const tipo          = document.getElementById('tipo');
const nombre        = document.getElementById('nombre');
const dueno         = document.getElementById('dueno');
const indice        = document.getElementById('indice');
const form          = document.getElementById('form');
const btnGuardar    = document.getElementById('btn-guardar');

// Arreglo u objeto mascotas
let mascotas = [
  {
    tipo: "Gato",
    nombre: "manchas",
    dueno: "Martin"
  },
  {
    tipo: "Perro",
    nombre: "nena",
    dueno: "Esteban"
  }
];

// Funcion listar mascotas
const listarMascotas = () => {
  const htmlMascotas = mascotas.map((mascota, index) => 
    `<tr>
      <td scope="col">${index}</td>
      <td>${mascota.tipo}</td>
      <td>${mascota.nombre}</td>
      <td>${mascota.dueno}</th>
      <td>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary editar"><i class="far fa-edit"></i></button>
          <button type="button" class="btn btn-danger eliminar"><i class="far fa-trash-alt"></i></button>
        </div>
      </td>
    </tr>`).join('');
    listaMascotas.innerHTML = htmlMascotas;
    Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index) => botonEditar.onclick = editar(index) );
    Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar, index) => botonEliminar.onclick = eliminar(index) );
  // console.log(htmlMascotas);
}

function enviarDatos(evento) {
  evento.preventDefault();
  const datos = {
    tipo: tipo.value,
    nombre: nombre.value,
    dueno: dueno.value
  };
  const accion = btnGuardar.innerHTML;
  switch(accion) {
    case 'Editar':
      // editar
      mascotas[indice.value] = datos;
      break;
    default:
      // crear
      mascotas.push(datos);
      break;
  }
  listarMascotas();
  resetModal();
}

function editar(index) {
  return function cuandoDoyClick() {
    btnGuardar.innerHTML = 'Editar';
    $('#exampleModalCenter').modal('toggle');
    const mascota = mascotas[index];
    nombre.value  = mascota.nombre;
    dueno.value   = mascota.dueno;
    tipo.value    = mascota.tipo;
    indice.value  = index;
  }
}

function resetModal() {
  nombre.value = '';
  dueno.value  = '';
  tipo.value   = '';
  indice.value = '';
  btnGuardar.innerHTML = 'Crear';
}

function eliminar(index) {
  return function clickEnEliminar() {
    mascotas = mascotas.filter(( mascota, indiceMascota ) => indiceMascota !== index);
    listarMascotas();
  }
}

listarMascotas();
form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;

