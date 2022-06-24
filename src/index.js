const messages = [
    "Hola",
    "¿Cómo estas?",
    "Ja soy un mensaje",
    "¿Qué día es hoy?",
    "Que onda!",
    "JavaScript no es Java",
    "Lunes...",
    "Tacosss!",
    "SIUUUU",
    "Adios"
];

const randomMsg_1 = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg_1 };