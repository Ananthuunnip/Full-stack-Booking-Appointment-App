const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require('./util/database')

const userRouter = require('./router/user-router');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/get', userRouter);
app.use('/post', userRouter);

sequelize
    .sync()
    .then((result)=>{
        app.listen(4001);
    })
    .catch((err)=>console.log(err))
