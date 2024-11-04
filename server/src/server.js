import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRouters from "./route/web";
import connectDB from './config/connectDB';
let app = express();
const path = require('path');
const __rootDir = path.dirname(__dirname);
const __viewsDir = path.join(__rootDir, 'views');
const __publicDir = path.join(__rootDir, 'public');

app.set('views', __viewsDir);
app.set('view engine', 'ejs');
app.use(express.static(__publicDir));

require('dotenv').config();


// app.use(cors({ credentials: true, origin: true }));

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', process.env.URL_REACT);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRouters(app);

connectDB();

let port = process.env.PORT || 8000;
//PORT === undefined => port = 8000
app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is running on the port: " + port);
})