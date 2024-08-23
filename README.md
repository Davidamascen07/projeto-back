# Digital-Drip-Store

## Descrição

O **Digital-Drip-Store** é uma aplicação de e-commerce para gerenciamento de produtos, categorias e usuários. Este projeto utiliza Node.js, Express.js e Sequelize para a implementação do backend, enquanto o frontend é construído com React, Vite, e outras bibliotecas modernas.

## Estrutura do Projeto

O projeto segue uma estrutura modular, separando a lógica de controle, modelos, rotas e configurações para facilitar o desenvolvimento e a manutenção.

- **Configurações:** Contém arquivos de configuração como banco de dados e JWT.
- **Controladores:** Contém a lógica dos endpoints.
- **Middleware:** Contém middlewares personalizados, como autenticação JWT.
- **Modelos:** Define as tabelas do banco de dados usando Sequelize.
- **Rotas:** Define os endpoints da API para usuários, produtos e categorias.
- **Serviços:** Contém a lógica de negócios principal para as funcionalidades da aplicação.

## Tecnologias Utilizadas

- **Backend:**
  - Node.js
  - Express.js
  - Sequelize ORM
  - MySQL
  - JWT para autenticação
  - JEST para testes

## Funcionalidades

- **Gestão de Usuários:** CRUD completo para usuários com autenticação JWT.
- **Gestão de Categorias:** CRUD completo para categorias de produtos.
- **Gestão de Produtos:** CRUD completo para produtos, incluindo gerenciamento de imagens e opções do produto.
- **Autenticação:** Implementação de autenticação JWT para proteção de rotas.

## Requisitos

Antes de começar, você precisa ter instalado:

- Node.js (v14 ou superior)
- MySQL

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Davidamascen07/projeto-back.git
