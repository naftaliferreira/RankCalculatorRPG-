// Lógica de cálculo de nível com base nas vitórias
export class RankCalculator {
    static calcularNivel(saldo) {
        if (saldo < 0) {
            return { nivel: "", icone: './assets/img/rpg-main.png' };
        } else if (saldo <= 10) {
            return { nivel: "Ferro (Aprendiz de Batalha)", icone: './assets/img/rank-ferro.webp' };
        } else if (saldo <= 20) {
            return { nivel: "Bronze (Guerreiro Ascendente)", icone: './assets/img/rank-bronze.webp' };
        } else if (saldo <= 50) {
            return { nivel: "Prata (Defensor Honrado)", icone: './assets/img/rank-prata.webp' };
        } else if (saldo <= 80) {
            return { nivel: "Ouro (Lorde da Guerra)", icone: './assets/img/rank-ouro.webp' };
        } else if (saldo <= 90) {
            return { nivel: "Diamante (Lenda Viva)", icone: './assets/img/rank-diamante.webp' };
        } else if (saldo <= 100) {
            return { nivel: "Lendário (Mestre dos Reinos)", icone: './assets/img/rank-lendario.webp' };
        } else {
            return { nivel: "Imortal (Divindade da Batalha)", icone: './assets/img/rank-imortal.webp' };
        }
    }
}
