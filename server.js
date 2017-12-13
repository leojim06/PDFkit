const express = require('express');
const app = express();
const api = require('./routes/api');
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send({ message: 'We ♥ PDF' });
});

app.use('/pdf', api);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});

