const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');
const bodyParser = require('body-parser'); /*미들웨어 내장된 객체*/



const admin = require('./routes/admin');
// const contacts = require('./routes/contacts');

const app = express();
const port = 3000;

nunjucks.configure('template', {
    autoescape : true, /*해커로부터 자바스크립트 공격방어*/ 
    express : app,
});

//미들웨어 셋팅
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use('/uploads', express.static('uploads'));


app.get('/', (req, res) => {
    res.send('hello express');
});

app.get('/fast', (req, res) => {
    res.send('fast express 바보야');
});

function vipMiddleWare(req, res, next) {
    console.log('최우선 미들웨어');
    next();
}

app.use('/admin' ,vipMiddleWare, admin);
//app.use('/contacts', contacts);

app.listen(port, ()=>{
    console.log('Express sadsadsadadsa' , port);
});
