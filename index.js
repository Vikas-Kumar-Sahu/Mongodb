const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const registerRoute = require('./routes/register.route');
const loginRoute = require('./routes/login.route');
const app = express();

const port = process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routers
app.use("/api/Register", registerRoute);
app.use("/api/Login", loginRoute);


//pathing the files
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/register.html'));
});


mongoose.connect('mongodb+srv://vk5588088:register@registerpagedata.dd2nndl.mongodb.net/RegisterPageData?retryWrites=true&w=majority&appName=RegisterPageData').then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log(`Server is running http://localhost:${port}`);
    })
}).catch(() => {
    console.log('Error connecting to MongoDB');
});

