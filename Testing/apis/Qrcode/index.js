import express from 'express';
import api from '../../../services/axios/qrcodeApi.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    res.render('qrcode');
});

app.listen(8081);