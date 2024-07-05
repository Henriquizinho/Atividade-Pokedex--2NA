# Pokédex React Application

## Descrição

Esta aplicação é uma Pokédex interativa desenvolvida em ReactJS que consome a API do [PokeAPI](https://pokeapi.co/). Seu principal propósito é permitir aos usuários visualizar uma listagem de Pokémons e obter informações detalhadas sobre cada um, como habilidades, tipos e movimentos.

## Funcionalidades

- **Listagem de Pokémons:** Exibe uma lista de Pokémons com suas respectivas imagens e nomes.
- **Detalhes dos Pokémons:** Permite visualizar informações específicas de cada Pokémon, incluindo habilidades, tipos e movimentos.
- **Busca por Nome:** Funcionalidade de busca para encontrar Pokémons pelo nome.
- **Tema Claro/Escuro:** Possibilidade de alternar entre tema claro e escuro para melhor experiência do usuário.

## Ferramentas Utilizadas

- **ReactJS:** Biblioteca principal para construção da interface de usuário.
- **Vite:** Ferramenta utilizada para criar a estrutura inicial do projeto, oferecendo um ambiente de desenvolvimento rápido e eficiente.
- **React Router:** Gerenciamento de rotas da aplicação, facilitando a navegação entre listagem e detalhes dos Pokémons.
- **Styled Components:** Biblioteca para estilização com uso de CSS-in-JS, permitindo a criação de componentes estilizados de forma modular e reutilizável.
- **Context API:** Gerenciamento de estado global, especialmente útil para funcionalidades como alternância de tema.

### Motivo das Escolhas:
- **ReactJS:** Escolhido pela sua eficiência na construção de interfaces dinâmicas e reativas.
- **Vite:** Escolhido pela sua velocidade e simplicidade na configuração inicial do projeto, proporcionando um ambiente de desenvolvimento mais rápido.
- **React Router:** Necessário para criar uma SPA (Single Page Application) com navegação fluida.
- **Styled Components:** Oferece uma abordagem moderna para o CSS, facilitando o uso de temas e manutenção do código de estilo.
- **Context API:** Uma solução simples e eficaz para gerenciamento de estado sem a necessidade de bibliotecas externas mais complexas como Redux.

## Decisões de Planejamento e Execução

Durante o desenvolvimento da aplicação, várias decisões importantes foram tomadas para garantir uma implementação eficiente e escalável:

1. **Estrutura do Projeto:** Optamos por uma estrutura modular, onde componentes, estilos e lógica estão bem separados. Isso facilita a manutenção e a escalabilidade do projeto.
2. **Gerenciamento de Estado:** Utilizamos a Context API para o gerenciamento de temas (claro e escuro), simplificando a lógica de estado e evitando a necessidade de uma biblioteca de gerenciamento de estado mais complexa.
3. **Estilização:** Escolhemos o Styled Components por sua capacidade de criar componentes estilizados com escopo limitado e suporte nativo a temas, permitindo uma implementação mais limpa e organizada.
4. **Navegação:** A decisão de usar React Router foi baseada na necessidade de criar uma SPA com navegação suave entre diferentes componentes.

## Passo a Passo para Rodar o Projeto

Para rodar a aplicação localmente, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/guiisbarbosa/pokemon-list.git
   cd nome-do-repositorio
2. **Instale as dependências:**
    ```bash
     npm install
3. **Inicie a aplicação:**
    ```bash
    npm run dev
A aplicação estará acessivel através do endereço que será exibido no terminal.

Caso queira acessar sem a necessidade de clonar o repositório, isso é possível clicando aqui -> [Pokedex 1ª Geração](https://pokemon-list-gold-two.vercel.app)