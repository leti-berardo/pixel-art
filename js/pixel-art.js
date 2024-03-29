/*jshint esversion: 6 */

var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
  (function () {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    let indicadorDeColor = document.getElementById('indicador-de-color');
    indicadorDeColor.style.backgroundColor = colorActual;

  })
);

// Variables globales de objetos del DOM
let paletaColores = document.getElementById('paleta');
let grillaPixeles = document.getElementById('grilla-pixeles');
let indicadorDeColor = document.getElementById('indicador-de-color');
let borrarTodo = document.getElementById('borrar');

// Crea la grilla con los colores disponibles para utilizar
function crearPaletaColores(arrayColores) {
  for (let i = 0; i < arrayColores.length; i++) {
    let color = arrayColores[i];
    let newDiv = document.createElement('div');
    newDiv.className = 'color-paleta';
    newDiv.style.backgroundColor = color;
    paletaColores.appendChild(newDiv);
  }
}

// Crea la grilla de pixeles donde se pinta
function crearGrillaPixeles() {
  for (let i = 0; i < 1750; i++) {
    let newDiv = document.createElement('div');
    grillaPixeles.appendChild(newDiv);
  }
}

// LLAMA A LAS FUNCIONES PARA INICIAR EL PROGRAMA
crearPaletaColores(nombreColores);
crearGrillaPixeles();

//Elije un color y lo muestra en el color seleccionado
paletaColores.addEventListener('click', mostrarColorSeleccionado);

function mostrarColorSeleccionado(e) {
  indicadorDeColor.style.backgroundColor = e.target.style.backgroundColor;
}

//pinta el cuadrado que se clickea
grillaPixeles.addEventListener('click', pintarCuadrado);

function pintarCuadrado(e) {
  e.target.style.backgroundColor = indicadorDeColor.style.backgroundColor;
}

//pinta con el boton del mouse apretado
let mouseClicked = false;

grillaPixeles.addEventListener('mousedown', function () {
  mouseClicked = true;
});
grillaPixeles.addEventListener('mouseup', function () {
  mouseClicked = false;
});
grillaPixeles.addEventListener('mousemove', pintarDeCorrido);


function pintarDeCorrido(e) {
  if (mouseClicked == true) {
    pintarCuadrado(e);
  } 
}

//borrar todo lo dibujado en la grilla de pixeles

borrar.addEventListener('click', function () {
  let pixelesGrilla = $('#grilla-pixeles').children('div');
  pixelesGrilla.animate({'backgroundColor': 'none'}, 1000);
});


//cargar imagenes de otros superheroes 

document.getElementById('batman').addEventListener('click', function() {
    cargarSuperheroe(batman);
});

document.getElementById('wonder').addEventListener('click', function() {
  cargarSuperheroe(wonder);
});

document.getElementById('flash').addEventListener('click', function() {
  cargarSuperheroe(flash);
});

document.getElementById('invisible').addEventListener('click', function() {
  cargarSuperheroe(invisible);
});

//guardar imagen en png

document.getElementById('guardar').addEventListener('click', function () {
  guardarPixelArt();
})