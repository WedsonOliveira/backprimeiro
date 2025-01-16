const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

let usuarios = [];
let filaAtendimento = [];
let proximoAtendimento = null;

function gerarSenha() {
    return 'A' + Math.floor(1000 + Math.random() * 9000);
}

app.post('/registrar', (req, res) => {
    const { nome, cpf } = req.body;
    const senha = gerarSenha();
    usuarios.push({ nome, cpf, senha });
    filaAtendimento.push(senha);
    res.json({ mensagem: 'Usuário registrado com sucesso', senha });
});

app.get('/fila', (req, res) => {
    res.json({ fila: filaAtendimento });
});

app.post('/proximo', (req, res) => {
    if (filaAtendimento.length === 0) {
        return res.json({ mensagem: 'Nenhum usuário na fila' });
    }
    proximoAtendimento = filaAtendimento[0]; // A próxima senha a ser atendida
    res.json({ proximo: proximoAtendimento });
});

app.post('/finalizar', (req, res) => {
    if (!proximoAtendimento) {
        return res.json({ mensagem: 'Nenhum atendimento em andamento' });
    }
    filaAtendimento.shift(); // Remove a senha da fila
    proximoAtendimento = filaAtendimento[0] || null; // Atualiza a próxima senha

    res.json({
        mensagem: 'Atendimento finalizado',
        proximo: proximoAtendimento || 'Nenhum'
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
