const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors')


const restRoute=require('./routes/restaurant');
const locRoute=require("./routes/location");
const profRoute=require("./routes/profile");
const prodRoute=require("./routes/product");
const menuRoute=require("./routes/menu");
const mealRoute=require("./routes/mealType");



const app=express();
const PORT=2070;

app.set('view engine','ejs');

const MONGO_URI="mongodb://localhost:27017/zomato";


mongoose.connect(MONGO_URI,()=>{
    console.log('connected to db');
},e=>console.log("Error",e));

app.use(bodyParser.json());
app.use(cors());

app.use('/restaurant',restRoute);
app.use('/location',locRoute);
app.use('/profile',profRoute);
app.use('/product',prodRoute);
app.use('/menu',menuRoute);
app.use('/mealType',mealRoute);


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})