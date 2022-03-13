const express = require('express');
require('dotenv').config()

const app = express();
const PORT =process.env.PORT || 5000;

const northIndianFood =['Chole Bhature','Biryani','Paratha','Poha','Dal Tadka']
const southIndianFood =['Dosa', 'Idli', 'Uttapm','Vada','Russam','Pongal']
app.get('/', (req, res)=>{
    res.send("hello world!");
})

app.get('/food/north', (req,res)=>{
    const index =Math.floor(Math.random()*northIndianFood.length);

    res.send({
      Fodd:  northIndianFood[index],
      Price :Math.floor(Math.random() * 100),
      Category : 'North'
    });
})

 app.get('/food/south', (req,res)=>{
    const index =Math.floor(Math.random()*southIndianFood.length);
    res.send({
       Food : southIndianFood[index],
       Price : Math.floor(Math.random() * 100),
       Category: 'South'
    });
 })
 app.get('/food/mix', (req,res)=>{
     const combineFood =northIndianFood.concat(southIndianFood);
    const index =Math.floor(Math.random()*combineFood.length);
    res.send({
       Food : combineFood[index],
       Price : Math.floor(Math.random() * 100),
       Category: 'Mix'
       
    });
 })
 
 app.get('/team',(req,res)=>{
     res.send('Jayant, Prajwal, Soyal, Sunil, Prashil');
 })

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})