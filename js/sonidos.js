function reproducirSonido(tipoPokemon) {
    const sonidos = {
        'planta': 'Bulbasaur.wav',
        'fuego': 'Charmander.wav',
        'normal': {
            'Eevee': 'Eevee.wav',
            'Gengar': 'Gengar.wav',
            'Jigglypuff': 'Jigglypuff.wav',
            'Mr. Mime': 'Mr. Mime.wav',
            'Pikachu': 'Pikachu.wav',
            'Snorlax': 'Snorlax.wav',
            'Squirtle': 'Squirtle.wav'
        },
        'agua': 'Squirtle.wav' 
    };

    
    if (tipoPokemon === 'normal') {
        const nombrePokemon = Elegidos.find(pokemon => pokemon.tipo === tipoPokemon).img.split('/').pop().split('.')[0];
        const sonidoNormal = sonidos['normal'][nombrePokemon];
        if (sonidoNormal) {
            sonidoPokemon(sonidoNormal);
        }
    } else {
        const sonido = sonidos[tipoPokemon];
        if (sonido) {
            sonidoPokemon(sonido);
        }
    }
}

function sonidoPokemon(nombreSonido) {
    const audio = new Audio(`audio/${nombreSonido}`);
    audio.play();
}

function sonidoError() {
    const audioError = new Audio('audio/error.mp3'); 
    audioError.play();
}
