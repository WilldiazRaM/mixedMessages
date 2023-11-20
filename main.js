/* testing git */
const diaSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'
];

const mensajesMotivacionales = [
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
  "Cada día es una nueva oportunidad para cambiar tu vida.",
  "La única forma de hacer un gran trabajo es amar lo que haces.",
  "No te preocupes por los fracasos, preocúpate por las posibilidades que pierdes cuando ni siquiera lo intentas.",
  "La perseverancia no es una carrera larga, sino muchos sprints cortos, uno tras otro.",
  "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
  "No importa lo lento que vayas, siempre y cuando no te detengas.",
  "Cree en ti mismo y todo será posible.",
  "El éxito no es la clave de la felicidad; la felicidad es la clave del éxito. Si amas lo que estás haciendo, serás exitoso.",
  "Nunca es demasiado tarde para ser lo que podrías haber sido."
];

function numeroRandom() {
    return Math.floor(Math.random() * 7) + 1
}

const funcion1 = (arr1, arr2) => {
    arr1.forEach(dia => {
        const mensajeAleatorio = mensajesMotivacionales[numeroRandom()];
        console.log(`Mensaje Motivacional: \n ${dia}: ${mensajeAleatorio}`)
    });
}

funcion1(diaSemana, mensajesMotivacionales);