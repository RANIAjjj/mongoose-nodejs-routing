// delete sends status error but it worked







const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = 5000
const userRout = require('./routs/userRoute')
const User = require('./models/User')
const Todo = require('./models/Todo')
const userController = require('./conrollers/userConrollers')

mongoose.connect('mongodb://127.0.0.1:27017/todoList').then(()=>{
    console.log("sucssesfully connected");
}).catch(err=>{
    console.log(err);
})
app.use(express.urlencoded({ extended: true }));

app.use('/user' , userRout)
app.listen(port , ()=> console.log(`app listinng on port ${port}`))





// userController.Register("Rania@gmail.com" , "123456" , "Rania")
// userController.Login("ahmed@gmail.com" , "1234566")
// userController.getAllUsers()
// userController.deleteUser("Rania")
// userController.getAllUsers()
// userController.editUser("ahmed" , "1020304050")



