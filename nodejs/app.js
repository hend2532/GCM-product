import express from 'express';
import mongoose from 'mongoose';
import categoryRoute from './routes/categoryRoute.js'

const app=express();

//use Routes
app.use('/api/categories' , categoryRoute);
app.use('/api/products' , productRoute);

//connect to database
mongoose.connect("mongodb+srv://norhan:123456789n@gcm.80yheul.mongodb.net/?retryWrites=true&w=majority&appName=GCM")
.then( () =>{console.log("cccoonneeccttteeddd")})
.catch( (err) =>{console.log(err)})


//listen
app.get('/n', (req,res) =>{
    res.send("nnbbbbbnn")
});


app.listen(3000);