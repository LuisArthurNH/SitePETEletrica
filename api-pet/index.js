// to open/run it: npm start
// qnd altera, reiniciar o servidor 

const express = require('express');

const app = express();
const port = 3000;

app.get('/',(req, res) => res.send('Hello World!'));
app.get('/user', (req, res) => res.json({
	name: 'Luis',
}));

app.post('/', (req, res) => res.send('olá post'));


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
