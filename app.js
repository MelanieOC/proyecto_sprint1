var estudiantes = [];

function obtenerListaEstudiantes() {
  return estudiantes; //Retorna la lista de estudiantes
}

function agregarEstudiante() {
  var nombre = prompt('Nombre de la estudiante: ');
  var puntos = prompt('Porcentaje Técnico: ');
  var hse = prompt('Porcentaje Habilidades Socio-Emocionales: ');
  if(isNaN(Number(puntos))){puntos = 0}; //si en los porcentajes ingresa letras y no numeros
  if(isNaN(Number(hse))){hse = 0};
  var estudiante = function (){//se crea el objeto estudiante
    this.nombre = nombre,
    this.puntosTecnicos = puntos,
    this.puntosHSE = hse
  }
  estudiantes.push(new estudiante); //estudiante es agregado a la lista de estudiantes
  return new estudiante; //retorna estudiante recientemente creado
}

function mostrar(estudiante) {
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosHSE + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
  return estudiantes.map(mostrar); //se itera cada objeto que está en el array con la funcion mostrar
}

function buscar(nombre, estudiantes) {
  return estudiantes.filter(a => a.nombre.toLowerCase() == nombre.toLowerCase());
    // Busca el nombre en la lista de estudiantes que se recibe por parámetros
    // Retorna el objeto del estudiante buscado
    // no hay restriccion de mayusculas o minusculas
}

function topTecnico(estudiantes) {
  return estudiantes.sort(function(a,b) {
    return b.puntosTecnicos - a.puntosTecnicos; //Ordena de mayor a menor el puntaje técnico
  });
}

function topHSE(estudiantes) {
  return estudiantes.sort(function(a,b) {
    return b.puntosHSE - a.puntosHSE; //Ordena de mayor a menor el puntaje técnico
  });
}

//Pruebas unitarias

var assert = require('assert');
var prueba = [{nombre: 'Melanie', puntosTecnicos: 23, puntosHSE:54}, {nombre: 'Sonia', puntosTecnicos: 12, puntosHSE: 60}]
describe ('Funcion buscar', function () {
  it('buscar Melanie en el array: [{nombre: Melanie, puntosTecnicos: 23, puntosHSE:54}, {nombre: Sonia, puntosTecnicos: 12, puntosHSE: 60}]', function () {
    assert.deepEqual([prueba[0]], buscar('Melanie', prueba));
  })
  it('buscar melanie en el array: [{nombre: Melanie, puntosTecnicos: 23, puntosHSE:54}, {nombre: Sonia, puntosTecnicos: 12, puntosHSE: 60}]', function () {
    assert.deepEqual([prueba[0]], buscar('melanie', prueba));
  })
})
describe ('Funcion topTecnico', function () {
  it('ordenar de mayor a menor segun puntosTecnicos en el array: [{nombre: Melanie, puntosTecnicos: 23, puntosHSE:54}, {nombre: Sonia, puntosTecnicos: 12, puntosHSE: 60}]', function () {
    assert.deepEqual([prueba[0], prueba[1]], topTecnico(prueba));
  })
})
describe ('Funcion topTecnico', function () {
  it('ordenar de mayor a menor segun puntos HSE en el array: [{nombre: Melanie, puntosTecnicos: 23, puntosHSE:54}, {nombre: Sonia, puntosTecnicos: 12, puntosHSE: 60}]', function () {
    assert.deepEqual([prueba[1], prueba[0]], topHSE(prueba));
  })
})
