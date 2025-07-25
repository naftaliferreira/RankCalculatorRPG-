//Script principal que inicializa tudo

import { GameController } from './controllers/GameController.js';

document.addEventListener('DOMContentLoaded', () => {
    const vitoriasInput = document.getElementById('vitorias');
    const derrotasInput = document.getElementById('derrotas');
    const resultadoTexto = document.getElementById('resultado-texto');
    const iconeNivel = document.getElementById('icone-nivel');
    const calcularBtn = document.getElementById('calcular-btn');

    const game = new GameController(vitoriasInput, derrotasInput, resultadoTexto, iconeNivel);

    calcularBtn.addEventListener('click', () => game.calcularRank());

    game.calcularRank(); // Inicializa com valores padrão
});
