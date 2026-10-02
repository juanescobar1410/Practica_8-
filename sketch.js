// constantes para las URLs de los modelos 3D
const URL_3D = "3D/modelo.obj";
const URL_3D_2 = "3D/modelo2.obj";
// constantes para las URLs de las texturas
const URL_TEXTURA = "3D/textura.png";
const URL_TEXTURA_2 = "3D/textura2.png";

// Variables donde se almacenan los modelos 3D
let model3D;
let model3D_2;
// Variables donde se almacenan las texturas
let textura;
let textura2;

// Función de precarga
function preload() {
  // Carga los modelos 3D, normalizados
  model3D = loadModel(URL_3D, true);
  model3D_2 = loadModel(URL_3D_2, true);
  // Carga las texturas
  textura = loadImage(URL_TEXTURA);
  textura2 = loadImage(URL_TEXTURA_2);
}

// Función de configuración
function setup() {
  // Cree aun canvas con soporte para 3D de 500px x 500px
  createCanvas(windowWidth, windowHeight, WEBGL);
  // Determina que se van a utiliza los grados como unidad de medición
  angleMode(DEGREES);
}

// Función de pintado
function draw() {
  // Establece el color de fondo
  background(200);

  // ---- Modelo 1 (a la izquierda) ----
  push();
  translate(-200, 0);
  rotateY(frameCount);
  texture(textura);
  scale(1.5);
  rotateX(180);
  model(model3D);
  pop();

  // ---- Modelo 2 (a la derecha) ----
  push();
  translate(200, 0);
  rotateY(frameCount);
  texture(textura2);
  scale(1.5);
  rotateX(180);
  model(model3D_2);
  pop();
}

// SE LLAMA SI EL TAMAÑO DE LA VENTANA DEL NAVEGADOR WEB CAMBIA
windowResized = function () {
  // Redimenciona el tamaño del lienzo al tamaño de la ventana del navegador Web
  resizeCanvas(windowWidth, windowHeight);
};