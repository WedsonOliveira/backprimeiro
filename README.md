# backprimeiro

## 📝 Descrição

Este é um **sistema de gerenciamento de fila de atendimento** simples, desenvolvido utilizando **Node.js** e **Express.js**. Através deste sistema, é possível realizar o **registro de usuários**, **geração automática de senhas**, **controle de atendimentos**, e visualização **em tempo real** da fila. A proposta é fornecer uma ferramenta prática para ambientes que precisam gerenciar o fluxo de atendimento, como consultórios, caixas de supermercados, entre outros.

## 🛠️ Tecnologias

- **Node.js**
- **Express.js** (^4.21.2)
- **Body-parser** (^1.20.3)
- **CORS** (^2.8.5)
- **Nodemon** (^3.1.9) — Ferramenta de desenvolvimento

## ⚙️ Pré-requisitos

Para rodar o projeto, é necessário ter as seguintes ferramentas instaladas:

- **Node.js** (versão recomendada: 14.x ou superior)
- **NPM** ou **Yarn**

## 🔧 Instalação

1. **Clone o repositório:**
    
    ```bash
    bash
    CopiarEditar
    git clone https://github.com/seu-usuario/fila-atendimento-backend.git
    
    ```
    
2. **Acesse o diretório do projeto:**
    
    ```bash
    bash
    CopiarEditar
    cd fila-atendimento-backend
    
    ```
    
3. **Instale as dependências:**
    
    ```bash
    bash
    CopiarEditar
    npm install
    # ou
    yarn install
    
    ```
    
4. **Inicie o servidor:**
    
    ```bash
    bash
    CopiarEditar
    node server.js
    # ou, para desenvolvimento com hot-reload
    npx nodemon server.js
    
    ```
    
5. **Acesse a aplicação no seu navegador:**
    
    Vá para http://localhost:3000.
    

## 💻 Como Usar

### Interface do Usuário

1. **Registro de Usuário:**
    - Preencha o nome e CPF no formulário.
    - Uma senha será gerada automaticamente.
2. **Controle de Atendimento:**
    - Clique em "Próximo Cliente" para chamar a próxima senha.
    - Clique em "Finalizar Atendimento" para concluir o atendimento atual.
3. **Visualização:**
    - Acompanhe a fila de espera em tempo real.
    - Veja o histórico de senhas já atendidas.

## ✨ Funcionalidades

- ✅ **Geração automática de senhas** no formato: **A1234**.
- ✅ **Registro de usuários** com nome e CPF.
- ✅ **Fila de atendimento em tempo real** para visualizar quem está na espera.
- ✅ **Controle de próximos atendimentos** e possibilidade de **finalizar** o atendimento.
- ✅ **Histórico de atendimentos**, com as senhas que já foram atendidas.

## 🔌 API Endpoints

### POST `/registrar`

- **Corpo:**
    
    ```json
    json
    CopiarEditar
    {
      "nome": "string",
      "cpf": "string"
    }
    
    ```
    
- **Resposta:**
    
    ```json
    json
    CopiarEditar
    {
      "mensagem": "string",
      "senha": "string"
    }
    
    ```
    

### GET `/fila`

- **Resposta:**
    
    ```json
    json
    CopiarEditar
    {
      "fila": ["A1234", "B5678", "C9876"]
    }
    
    ```
    

### POST `/proximo`

- **Resposta:**ou
    
    ```json
    json
    CopiarEditar
    {
      "proximo": "A1234"
    }
    
    ```
    
    ```json
    json
    CopiarEditar
    {
      "mensagem": "Não há mais clientes na fila."
    }
    
    ```
    

### POST `/finalizar`

- **Resposta:**
    
    ```json
    json
    CopiarEditar
    {
      "mensagem": "Atendimento finalizado",
      "proximo": "B5678"
    }
    
    ```
    

## 📜 Scripts Disponíveis

No diretório do projeto, você pode rodar os seguintes scripts:

```json
json
CopiarEditar
{
  "test": "echo \"Error: no test specified\" && exit 1"
}

```

## 📁 Estrutura do Projeto

A estrutura do projeto é a seguinte:

```
pgsql
CopiarEditar
fila-atendimento-backend/
├── package.json
├── server.js
└── public/
    └── index.html

```

## 📦 Dependências

### Produção

```json
json
CopiarEditar
{
  "body-parser": "^1.20.3",
  "cors": "^2.8.5",
  "express": "^4.21.2"
}

```

### Desenvolvimento

```json
json
CopiarEditar
{
  "nodemon": "^3.1.9"
}

```

## 🚀 Status do Projeto

- ✅ **PROJETO EM FUNCIONAMENTO!**

## ⚠️ Notas Importantes

1. Os dados são **armazenados em memória**, ou seja, **não são persistidos** em banco de dados.
2. **Todos os dados são perdidos** ao reiniciar o servidor.
3. Este sistema foi desenvolvido para fins de **demonstração** e **prototipagem**.

## 📝 Licença

Este projeto está licenciado sob a licença **ISC**.

## 🔄 Versão

1.0.0

