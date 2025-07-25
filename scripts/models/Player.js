// Classe que representa o jogador

export class Player {
    constructor(vitorias, derrotas) {
        this.vitorias = vitorias;
        this.derrotas = derrotas;
    }

    getSaldo() {
        return this.vitorias - this.derrotas;
    }
}
