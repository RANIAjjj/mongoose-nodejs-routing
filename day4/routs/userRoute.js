const express = require('express')
const userController = require('../conrollers/userConrollers');
const rout = express.Router()
const bcrypt = require('bcrypt');


rout.get('/', (rq, res) => {
    res.send('hello in user rout')
})

rout.post('/register', async (req, res) => {
    let { userName, password, firstName } = req.body
    bcrypt.hash(password, 10, async function (err, hash) {
        let data = await userController.Register(userName, hash, firstName)
        // console.log(data);
        res.send('ok');
    })
})

rout.post('/login', async (req, res) => {
    let { userName, password } = req.body
    let data = await userController.Login(userName, password)
    //  console.log(data);
    bcrypt.compare(password, data, function (err, result) {
        if (result == true) {
            console.log("correct usaer and password");
        }
    })

    res.send('ok post route is done for login');
})

rout.get('/get-all-users', async (req, res) => {
    try {
        let data = await userController.getAllUsers()
        if (data != "error") {
            res.json({
                users: data,
                msg: "ok",
                status: 200
            })
        } else {
            res.status(403).send("not found")
        }
    } catch (e) {
        res.status(500).send('server error')
    }
})

rout.delete('/delete-user', async (req, res) => {
    let { firstName } = req.body
    try {
        let data = await userController.deleteUser(firstName)
        if (data) {
            res.send('user deleted')
        }
        else {
            res.status(403).send("not found")
        }
    } catch (e) {
        res.status(500).send('server error')
    }
})

rout.patch('/edit-user', async (req, res) => {
    try {
        let { userName, password } = req.body;

        await userController.editUser(userName, password);

        res.send({ message: 'User edited successfully' });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

module.exports = rout