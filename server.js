const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use('/users', require('./controller/userController'));

const PORT = 8000;
app.listen(PORT, ()=> {
    console.log(`server on ${PORT}`);
})
