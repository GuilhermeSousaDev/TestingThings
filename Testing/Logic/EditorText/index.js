import express from 'express';

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.render('text');
});

app.listen(8081);