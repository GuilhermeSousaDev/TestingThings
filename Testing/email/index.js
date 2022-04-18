import express from 'express';
import SendMail from './services/email/index.js';

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded());

const pessoas = [
    {
        'nome': 'Paulo',
        'idade': 12
    },
    {
        'nome': 'Jõao',
        'idade': 15,
    },
    {
        'nome': 'Marina',
        'idade': 25,
    },
];

app.get('/', (req, res) => {
    res.render('index', { pessoas });
});

app.get('/email', (req, res) => {
    res.render('email');
});

app.post('/', async (req, res) => {
    const { from, to, subject, text } = req.body;

    const email = new SendMail();

    await email.send({ 
        from,
        to,
        subject,
        text,
    });
});

app.listen(8081, () => console.log('Iniciado'));