const express = require ('express');
const app = express();
const port = 8000;


//use express router

app.use ('/', require('./routes'));







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


