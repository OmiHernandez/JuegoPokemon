
let jugadores = [
    { nombre: 'naomi', puntaje: 10, tiempo: 20 },
    { nombre: 'eduardo', puntaje: 60, tiempo: 80 },
    { nombre: 'Jose', puntaje: 90, tiempo: 40 },
    { nombre: 'Eddie', puntaje: 50, tiempo: 70 }
];


localStorage.setItem('jugadores', JSON.stringify(jugadores));

function updateTable() {
    
    let table = document.getElementById('scoreTable');

    
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

   
    jugadores = JSON.parse(localStorage.getItem('jugadores') || '[]');

    for (let i = 0; i < jugadores.length; i++) {
        for (let j = i + 1; j < jugadores.length; j++) {
            if (jugadores[i].tiempo > jugadores[j].tiempo) {
                let temp = jugadores[i];
                jugadores[i] = jugadores[j];
                jugadores[j] = temp;
            }
        }
    }


    jugadores.forEach((jugador, i) => {
        let row = table.insertRow(-1);
        row.insertCell(0).innerHTML = i + 1;
        row.insertCell(1).innerHTML = jugador.nombre;
        row.insertCell(2).innerHTML = jugador.puntaje;
        row.insertCell(3).innerHTML = jugador.tiempo;
    });
}


window.addEventListener('storage', updateTable);

updateTable();
