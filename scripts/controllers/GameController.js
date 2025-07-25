// Coordena entrada do usuário e exibição do resultado

import { Player } from '../models/Player.js';
import { RankCalculator } from '../services/RankCalculator.js';

export class GameController {
    constructor(vitoriasInput, derrotasInput, resultadoTexto, iconeNivel) {
        this.vitoriasInput = vitoriasInput;
        this.derrotasInput = derrotasInput;
        this.resultadoTexto = resultadoTexto;
        this.iconeNivel = iconeNivel;
    }

    calcularRank() {
        const vitorias = parseInt(this.vitoriasInput.value);
        const derrotas = parseInt(this.derrotasInput.value);

        if (isNaN(vitorias) || isNaN(derrotas) || vitorias < 0 || derrotas < 0) {
            this.resultadoTexto.textContent = "Por favor, insira valores válidos para vitórias e derrotas.";
            this.iconeNivel.innerHTML = '';
            return;
        }

        const player = new Player(vitorias, derrotas);
        const saldo = player.getSaldo();
        const { nivel, icone } = RankCalculator.calcularNivel(saldo);

        const mensagem = saldo < 0
            ? `O Herói tem saldo de ${saldo} e está no nível ${nivel}! Que sua jornada comece!`
            : `O Herói tem saldo de ${saldo} e está no nível ${nivel}! Uma verdadeira glória!`;

        this.resultadoTexto.textContent = mensagem;
        this.iconeNivel.innerHTML = `<img src="${icone}" alt="Ícone do Nível">`;
    }
}
