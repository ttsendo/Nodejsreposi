console.log('Hola Mundo')

//Imprimir 10 veces su nombre

for (let index = 0; index < 10; index++) {
    console.log(index+'Sebastian\n'); 
}

//Desestructuración de un objeto
const vehiculo = {
    placa:"DIE777",
    color:"Verde",
    modelo:23
}
const {placa,color,modelo} = vehiculo
console.log(placa)