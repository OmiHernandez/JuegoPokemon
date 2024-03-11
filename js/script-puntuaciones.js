var jugadores = JSON.parse(localStorage.getItem('jugadores'));

// Convertir las cadenas de texto a objetos y ordenar por mejorTiempo
jugadores = jugadores.map(jugador => JSON.parse(jugador));
jugadores.sort((a, b) => a.mejorTiempo - b.mejorTiempo);

var tabla = document.getElementById('scoreTable');

for (var i = 0; i < jugadores.length; i++) {
    var jugador = jugadores[i];
    var fila = tabla.insertRow(-1);

    var celdaPosicion = fila.insertCell(0);
    var celdaNombre = fila.insertCell(1);
    var celdaPuntos = fila.insertCell(2);
    var celdaTiempo = fila.insertCell(3);

    celdaPosicion.innerHTML = i + 1;
    celdaNombre.innerHTML = jugador.nombre;
    celdaPuntos.innerHTML = jugador.puntos;
    celdaTiempo.innerHTML = jugador.mejorTiempo;
}
