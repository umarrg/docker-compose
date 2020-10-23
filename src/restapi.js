require('./connections/connection.mongo')();
require('./connections/connection.mysql')();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const tokenMiddleware = require('./middlewares/middleware.token').tokenMiddleware;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
    res.status(200).json({ status: 'success', payload: { apiVersion: 1.0, writtenBy: 'Umar abubakar', supervisedBy: 'Khalil Mohammed Shams <shamskhalil@gmail.com>', date: 'October 2020' }, message: 'Welcom to my api' });
});

//Auth Route
const authRoute = require('./routes/route.auth')();
app.use('/api/v1/auth', authRoute);



//User Rooute
const userRoute = require('./routes/route.user')();
app.use('/api/v1/user', userRoute);

//Admin Route
const adminRoute = require('./routes/route.admin')();
app.use('/api/v1/admin', adminRoute);

app.listen(3000, () => {
    console.log('User Microservice listening on port 3000')
});

module.exports.app = app;