/**
 * Calcular el perimetro de un cuadrado
 */
const tamanioLadoCuadrado = 5;
const NUMERO_LADO_CUADRADO = 4;

console.group("Cuadrado");
console.info(`Cada lado del cuadrado mide: ${tamanioLadoCuadrado} cm`);

const perimetroCuadrado = tamanioLadoCuadrado * NUMERO_LADO_CUADRADO;
console.info(`El perimétro de un cuadrado es: ${perimetroCuadrado}`);

const areaCuadrado = tamanioLadoCuadrado * tamanioLadoCuadrado;
console.info(`El area del cuadrado es: ${areaCuadrado} cm2`);
console.groupEnd("Cuadrado");

/**
 * Cálculo Triangulo
 */
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo3 = 4;
const altura = 5.5;

console.group("Triángulo");
const perimetroTriángulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo3;
console.info(`El perímetro del triángulo es ${perimetroTriángulo} cm`);
const areaTriángulo = (baseTriangulo3 * altura) / 2;
console.info(`El área del triángulo es: ${areaTriángulo} cm2`);
console.groupEnd("Triángulo");

/**
 * Cálculo círculo
 */
const radioCirculo = 4;
const diametro = radioCirculo * 2;

const perimetro = diametro * Math.PI;
const areaCirculo = radioCirculo * radioCirculo * Math.PI;

console.group("Círculo");
console.info(`El radio del círculo es: ${radioCirculo} cm`);
console.info(`El diámetro del círculo es: ${diametro} cm`);
console.info(`El perímetro del círculo es: ${perimetro}`);
console.info(`El área del círculo es: ${areaCirculo} cm2`);
console.groupEnd("Círculo");
