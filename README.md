# Documentação do Projeto: Calculadora de Partidas Rankeadas

## Visão Geral do Projeto

A "Calculadora de Partidas Rankeadas" é uma aplicação web front-end que simula um sistema de classificação de heróis inspirado em RPGs e histórias medievais. Os usuários podem inserir o número de vitórias e derrotas de um herói em batalhas, e a aplicação calculará e exibirá o nível de rank correspondente, acompanhado de uma mensagem e um ícone visual temático.

## Descrição do projeto

Utilize todos seus conhecimentos lógicos até aqui para desenvolver uma Calculadora de Partidas Rankeadas, chegou a hora de usar todo seu conhecimento em estruturas condicionais e funções para criar um algoritmo decisivo.

## Entendendo o Desafio

**Agora é a sua hora de brilhar e construir um perfil de destaque na DIO! Explore todos os conceitos explorados até aqui e replique (ou melhore, porque não?) este projeto prático. Para isso, crie seu próprio repositório e aumente ainda mais seu portfólio de projetos no GitHub, o qual pode fazer toda diferença em suas entrevistas técnicas 😎**
 
**Neste repositório, insira todos os links e arquivos necessários para seu projeto, seja um arquivo de banco de dados ou um link para o template no Figma.**

**Dica:** *Se o expert forneceu um repositório Github, você pode dar um "fork" no repositório dele para organizar suas alterações e evoluções mantendo uma referência direta ao código-fonte original.*

## Instruções para entrega

### 2️⃣ Calculadora de partidas Rankeadas

**O Que deve ser utilizado**
 
 - Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

## 🔻 Rankings e Personagens por Nível de Poder

| **Nível**       | **Personagem (sugestão temática)**  | **Descrição temática**                                                         |
| --------------- | ----------------------------------- | ------------------------------------------------------------------------------ |
| 🪨 **Ferro**    | **Lobo**                            | Um caçador solitário e instintivo. Ágil, mas ainda iniciante no mundo.         |
| 🟫 **Bronze**   | **Anão de armadura**                | Um guerreiro teimoso e resistente. Forte, mas ainda limitado em alcance.       |
| ⚪ **Prata**     | **Bruxa**                           | Dominadora de magias básicas. Conhece o oculto, mas ainda está em aprendizado. |
| 🟡 **Ouro**     | **Cavaleiro com escudo e armadura** | Um defensor experiente. Honrado, disciplinado, representa autoridade.          |
| 💎 **Diamante** | **Gigante com bastão**              | Uma força imensa da natureza. Poder bruto e presença intimidadora.             |
| 🟣 **Lendário** | **Elfo**                            | Mestre de sabedoria e magia. Refinado, rápido e inteligente.                   |
| 🔥 **Imortal**  | **Dragão**                          | A criatura suprema. Poder ancestral e domínio total sobre os elementos.        |


**Recursos Principais:**

* Interface Medieval/RPG: Visual imersivo com fontes temáticas, texturas de couro e pergaminho, e botões que lembram elementos forjados.

* Cálculo de Rank Dinâmico: Determina o nível do herói (Ferro, Bronze, Prata, Ouro, etc.) com base no saldo de vitórias e derrotas.

* Feedback Visual: Exibe uma mensagem descritiva e um ícone ou brasão que representa o nível do herói.

* Responsivo: Adapta-se a diferentes tamanhos de tela, desde desktops até dispositivos móveis.

## Tecnologias Utilizadas

* Este projeto foi desenvolvido utilizando as seguintes tecnologias front-end:

* HTML5: Para a estrutura e o conteúdo da página web.

* CSS3 (Puro): Para toda a estilização e responsividade da interface, sem o uso de frameworks CSS.

* JavaScript (ES6 Modules): Para a lógica de cálculo, manipulação do DOM e a organização modular do código.

## Estrutura do Projeto

O projeto segue uma arquitetura modular bem definida para facilitar a manutenção e a escalabilidade do código:

```
calculadora-rankeadas/
│
├── index.html                  # Página principal da aplicação.
├── style/
│   └── main.css                # Folha de estilos principal da aplicação.
├── scripts/
│   ├── models/
│   │   └── Player.js           # Define a classe Player, que armazena vitórias e derrotas.
│   ├── services/
│   │   └── RankCalculator.js   # Contém a lógica estática para determinar o nível e ícone do rank.
│   ├── controllers/
│   │   └── GameController.js   # Gerencia a interação entre a interface do usuário (DOM) e a lógica de negócio.
│   ├── utils/
│   │   └── domUtils.js         # (Opcional) Destinado a funções utilitárias de manipulação do DOM.
│   └── main.js                 # Ponto de entrada da aplicação, inicializa o GameController e listeners.
├── assets/
│   └── img/                    # Contém todas as imagens e ícones utilizados na interface.
│       ├── dark-leather-texture.webp
│       ├── parchment-texture.png
│       ├── rpg-main.png        # Ícone inicial/padrão
│       ├── rank-ferro.webp
│       ├── rank-bronze.webp
│       ├── rank-prata.webp
│       ├── rank-ouro.webp
│       ├── rank-diamante.webp
│       ├── rank-lendario.webp
│       └── rank-imortal.webp
└── README.md                   # Documentação do projeto (este arquivo).
```

## Como Executar o Projeto

Para visualizar e interagir com a aplicação, siga os passos abaixo:

1. Clone o Repositório (se aplicável):

```
git clone <URL_DO_SEU_REPOSITORIO>
cd calculadora-rankeadas
```

2. **Abra o** ```index.html```: Simplesmente abra o arquivo ```index.html``` em seu navegador de preferência. Você pode arrastá-lo e soltá-lo na janela do navegador ou usar a opção "Abrir arquivo" no menu do navegador.

    **Nota:** Não é necessário um servidor web para rodar esta aplicação, pois ela é puramente front-end. No entanto, para desenvolvimento local, usar uma extensão como "Live Server" no VS Code pode ser útil para recarregamento automático.

## Componentes do Código

```index.html```

* Estrutura principal da página.

* Define campos de entrada ```(<input type="number">)``` para vitórias e derrotas.

* Contém um botão para acionar o cálculo.

* Possui áreas (```<div>``` com IDs ```resultado-texto``` e ```icone-nivel```) para exibir a mensagem do resultado e o ícone do rank.

* Linka o CSS (```./style/main.css```) e o JavaScript (```./scripts/main.js```).

```style/main.css```

* Define as cores, fontes (```Cinzel, MedievalSharp```) e texturas (couro, pergaminho) para a interface.

* Estiliza os campos de entrada, botões (com efeito hover) e as seções de resultado.

* Implementa a responsividade (```@media queries```) para garantir a adaptação em diferentes dispositivos.

* Utiliza image-rendering: pixelated; para imagens com a classe .pixel-art.

```scripts/main.js```

* Ponto de entrada da aplicação JavaScript.

* Obtém referências aos elementos do DOM.

* Instancia o ```GameController```, passando as referências dos elementos do DOM.

* Configura o listener de clique para o botão "Descobrir Nível do Herói".

* Executa um cálculo inicial ao carregar a página para exibir o estado padrão.

```scripts/models/Player.js```

* Classe simples que representa um jogador.

* Propriedades: ```vitorias``` e ```derrotas```.

* Métodos: ```getSaldo()```: Retorna a diferença entre vitórias e derrotas.

```scripts/services/RankCalculator.js```

* Classe estática que contém a lógica para determinar o rank.

* Métodos: ```static calcularNivel(saldo)```: Recebe o saldo de vitórias e derrotas e retorna um objeto contendo o nivel (nome do rank) e o ```icone``` (caminho para a imagem do rank correspondente).

```scripts/controllers/GameController.js```

* Coordena a interação entre o usuário, o modelo e o serviço de cálculo.

* Métodos: ```calcularRank()```:

* Lê os valores dos campos de entrada.

* Realiza validação básica dos inputs.

* Cria uma instância de Player.

* Chama ```RankCalculator.calcularNivel()``` para obter o rank e o ícone.

* Formata a mensagem de resultado.

* Atualiza o texto e a imagem na interface do usuário.

## Prompts utilizados

# Prompts e ferramentas utilizadas no projeto

[imagens](https://sora.chatgpt.com/)

**Prompt**

*Versão com armas e armaduras*

Pixel art portrait of a [CREATURE], inspired by medieval RPG games. The character is detailed in classic 16-bit or 32-bit style, with vibrant colors and clear pixel shading. Background is simple or transparent to highlight the character. The creature should have medieval fantasy elements such as armor, weapons, magic effects, or mystical accessories. The style resembles old-school RPG games like Final Fantasy, Chrono Trigger, or Stardew Valley. No text or logos, focused on the character design.

*Versão sem armas ou armaduras*

Pixel art portrait of a [CREATURE], inspired by medieval RPG games. The character is detailed in classic 16-bit or 32-bit style, with vibrant colors and clear pixel shading. Background is simple or transparent to highlight the character. The creature should have medieval fantasy elements such as armor, weapons, magic effects, or mystical accessories. The style resembles old-school RPG games like Final Fantasy, Chrono Trigger, or Stardew Valley. No text or logos, focused on the character design.


-> Basta alterar [CREATURE] para o personagem que queira. 

## Considerações Finais

O projeto demonstra uma abordagem moderna e modular para o desenvolvimento front-end, garantindo que o código seja organizado, legível e fácil de escalar no futuro. A separação clara de responsabilidades entre Model, View, e Controller (MVC-like pattern) é um ponto forte da implementação.

