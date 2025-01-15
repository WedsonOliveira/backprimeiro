const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');  // Para servir arquivos estáticos

const app = express();
const port = 3000;

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Serve arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Dados de usuários e fila
let usuarios = [];
let filaAtendimento = [];
let proximoAtendimento = null;

// Função para gerar senha
function gerarSenha() {
    return 'A' + Math.floor(1000 + Math.random() * 9000);
}

// Rota para registrar usuário
app.post('/registrar', (req, res) => {
    const { nome, cpf } = req.body;
    const senha = gerarSenha();
    usuarios.push({ nome, cpf, senha });
    filaAtendimento.push(senha);
    res.json({ mensagem: 'Usuário registrado com sucesso', senha });
});

// Rota para obter o próximo usuário na fila
app.get('/proximo', (req, res) => {
    if (filaAtendimento.length === 0) {
        return res.json({ mensagem: 'Nenhum usuário na fila' });
    }
    proximoAtendimento = filaAtendimento[0];  // Exibe a primeira senha na fila
    res.json({ proximo: proximoAtendimento });
});

// Rota para finalizar o atendimento atual
app.post('/finalizar', (req, res) => {
    if (!proximoAtendimento) {
        return res.json({ mensagem: 'Nenhum atendimento em andamento' });
    }
    filaAtendimento.shift();  // Remove o atendimento atual da fila
    proximoAtendimento = filaAtendimento[0] || null;  // Atualiza a próxima senha
    res.json({ 
        mensagem: 'Atendimento finalizado',
        proximo: proximoAtendimento || 'Nenhum'  // Exibe a próxima senha ou 'Nenhum'
    });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
