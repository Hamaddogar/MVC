const express = require('express');
const app = express();
const { default: authorize } = require('authorize-net');
const bodyparser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
 const User = require('../model/model/db/configUser')
   const Login =require('../model/model/schema/login') 
const cors = require("cors");
const userdata = require('../contoller/routes/user-data');
const getdata = require('../contoller/routes/get-data')

const port = 7000;

app.use(bodyparser.json())
app.use(cors())

app.use("/userdata", userdata)
app.use("/getdata",getdata)








app.post('/api/signup', async (req, res) => {
    const { email, password } = req.body;
  
    const user = await Login.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const newUser = new Login({
      email,
      password: hashedPassword,
    });
    await newUser.save();
  
    const token = jwt.sign({ userId: newUser._id }, 'mysecretkey');
    res.json({ token });
  });
  
  app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
  
    const user = await Login.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
  
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
  
    const token = jwt.sign({ userId: user._id }, 'mysecretkey');
    res.json({ token });
  });
 




  app.post('/authorize-payment', async (req, res) => {
    const { amount, cardNumber, expirationDate, cvv } = req.body;
  
    const transactionData = {
      amount,
      creditCard: {
        cardNumber,
        expirationDate,
        cardCode: cvv
      }
    };
  
    try {
      const transaction = await authorize.transaction.create(transactionData);
      res.json(transaction);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  


app.listen(port, () => {
    console.log(` server is running   ${port}`)
})
