const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/produtos', (req, res) => {
  const file = path.join(__dirname, 'data', 'produtos.json');
  if (fs.existsSync(file)) {
    const json = fs.readFileSync(file, 'utf-8');
    res.json(JSON.parse(json));
  } else {
    res.status(404).json({ erro: 'produtos.json não encontrado' });
  }
});

app.get('/api/precos', (req, res) => {
  const file = path.join(__dirname, 'data', 'precos.json');
  if (fs.existsSync(file)) {
    const json = fs.readFileSync(file, 'utf-8');
    res.json(JSON.parse(json));
  } else {
    res.status(404).json({ erro: 'precos.json não encontrado' });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log("Servidor rodando em http://localhost:" + PORT);
});