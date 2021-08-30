const express = require('express');
const router = express.Router();

function testMiddleWare(req, res, next) {
    console.log('첫번째 미들웨어');
    next();
};

function testMiddleWare2(req, res, next) {
    console.log('두번째 미들웨어');
    next();
};

/*
function loginRequired(req, res, next) {
    if(로그인이 되어있으면){
        next();
    }else{
        res.redirect("로그인창으로");
    }
}
*/

router.get('/', testMiddleWare, testMiddleWare2, (req, res) =>{
    res.send('admin 이후 url')
});

router.get('/products', (req, res) =>{
    // res.send('products')
    res.render('admin/products.html', {
        message : "<h1>hello world</h1>"
    })
});

module.exports = router;
