const express = require ('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');

app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));

// use express ejs layouts////

app.use(expressLayouts);

//extract styles and scripts from subpages to layouts////\\
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//use express router

app.use ('/', require('./routes'));

// setting up the view engine

app.set('view engine', 'ejs');
app.set('views', './views');





///*******first type****************

app.listen(port, (err)=>{
    if (err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is runnnig on port: ${port}`)
});

///%%%%%%%%%%%%%Second type%%%%%%%%%%%%%%

// app.listen(port, (err)=>{
//     if (err){
//         console.log('Error:', err);
//     }
//     console.log('Server is running on port:', port);
// });


