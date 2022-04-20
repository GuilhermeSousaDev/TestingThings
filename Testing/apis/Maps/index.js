import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('maps');
});

app.listen(8081);