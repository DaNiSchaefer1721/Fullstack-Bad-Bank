require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');


//Express App
const app = express();

//Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//Routes
app.use('/api/userRoutes',userRoutes);

//Connect to DB
mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
    //Listen for requests
        app.listen(process.env.PORT, () => {
        console.log('Connected to DB & Listening for requests on port', process.env.PORT);
    });
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));



