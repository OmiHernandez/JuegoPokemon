var nombre = localStorage.getItem('nombreActual');

var insertarNombre = document.getElementById('alias');
var insertarPuntaje = document.getElementById('puntaje');
var insertarTiempo = document.getElementById('tiempo');

insertarNombre.textContent = nombre;

console.log("Nombre:" +nombre)
var JugadoresJSON = JSON.parse(localStorage.getItem("jugadores"));

var Jugadores = JugadoresJSON.map(function(jugadorJSON) {
    console.log("convertir objetos");
    return JSON.parse(jugadorJSON);
});

Jugadores.forEach(function(jugador) {
    if (jugador.nombre == nombre) {
        console.log("MANGO CON CHILEEEEEEE");
        insertarPuntaje.textContent = jugador.puntos;
        insertarTiempo.textContent = jugador.mejorTiempo;
    }
});