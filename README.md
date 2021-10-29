# The Dog App - Projeto Full Stack

# Vídeo do projeto
https://user-images.githubusercontent.com/86385568/139510439-e9942f23-d7c6-4221-a639-2d5dd6259a87.mp4
# 1) Sobre o projeto

O projeto consiste em demonstrar as minhas habilidades na criação de uma aplicação desde o backend, banco de dados e frontend. A aplicação efetua a consulta da API: https://thedogapi.com/ , e a partir desta consulta, consumir as informações necessárias para o banco de dados, e criar uma API limpa para consumo do frontend através do fetch via React.

# 2) Tecnologias utilizadas

- Node.js;
- Express.js;
- MySQL;
- React.js

# 3) Dependências utilizadas

| Nome              | Informações                                                                                        |
| ----------------- | -------------------------------------------------------------------------------------------------- |
| Express-generator | Utilizado para criação básica do projeto em Express                                                |
| Nodemon           | Utilizado para reiniciar o servidor automaticamente para cada alteração nos arquivos em Javascript |
| Axios             | Utilizado para consumir a API para o projeto                                                       |
| Sequelize         | Utilizado para fazer a comunicação entre o Express e o Banco de Dados (MySQL)                      |
| MySQL2            | Utilizado para que o Sequelize receba e utilize as Queries do MySQL                                |

# 4) Como executar o projeto

- No MySQL criar uma DB com nome 'thedogappdb' e criar a table 'breeds' com as colunas conforme a model em './backend/models/Breeds.js' (É possível alterar as configurações do banco em './backend/config/database.js');
- Na pasta de backend, iniciar o servidor pelo terminal com 'nodemon bin/www' (servidor local abre na porta 8000), e em seguida entrar em 'localhost:8000/getAPI' para que se inicie o processo de consumo da API para o banco de dados;
- Verificar no Banco se a API foi consumida. (Em todos os testes a API foi consumida com sucesso);
- Entrar na pasta de frontend, iniciar o servidor pelo terminal com 'npm start' (servidor local abre na porta 3000), e em seguida aguardar a abertura da aplicação no navegador.

## Observações importantes

Para que seja possível rodar a aplicação sem nenhum problema, é indispensável a instalação do Node.js, NPM e MySQL na máquina que irá rodar a aplicação. Também é necessário verificar nas configurações se o MySQL está rodando com os mesmos parâmetros configurados em './backend/config/database.js'

# Autor

Rogério Martins dos Santos

- Linkedin:
  https://www.linkedin.com/in/rogermds/
