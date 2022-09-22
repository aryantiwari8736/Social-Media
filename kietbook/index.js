const express =require('express');
const app = express();
const port = 8000;
const connectToMongo = require('./config/db');
connectToMongo();


//use express router - 
app.use('/',require('./routes'))
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server:  ${err}`);
    }
    console.log("Your server is running on port",port);
})