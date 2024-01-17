const User = require('../models/User')
// - Register a user with the following required attributes Username,password , firstname
// Notes: 
// - Return ({message:”user was registered successfully”}) if success
// - Handle validation errors returned from mongo 

const Register = async (_userName, _password, _firstName) => {
    try {
        let data = await User.create({ userName: _userName, password: _password, firstName: _firstName })
        if (data) {
            console.log("user was registered successfully");
        }
        else {
            console.log("Error");
        }
    }
    catch (e) {
        console.log(e);
    }

}
// Return ({message: "logged in successfully" ,username ,todos } )
// If the the authentication failed 
// Return ({error:”invalid credentials” }) with 401 status code


const Login = async (_userName, _password) => {
    try {
        let data = await User.findOne({ userName: _userName})
        let hash = data.password
// console.log(hash);
        return hash
    }
    catch (e) {
        console.log(e);
    }
}


// Return the first name of registered users

const getAllUsers = async () => {
    try {
        let data = await User.find({} , { firstName: 1 })
        if (data) {
            return data;
        }

    }
    catch (e) {
        console.log(e);
    }
}



//Delete the user 

const deleteUser = async (_firstName) => {
    try {
        let data = await User.deleteOne({ firstName: _firstName })
        if (data) {
            console.log("user deleted sucssfully");
        }

    }
    catch (e) {
        console.log(e);
    }
}

//- Return ({message:”user was edited successfully”, user: theUserAfterEdit”}) if success
//- Handle validation errors returned from mongo 

const editUser = async (_userName, _password) => {
    try {
        let data = await User.updateOne({ userName: _userName }, { $set: { password: _password } })
        if (data) {
            console.log("user edited sucssfully");
        }
    }
    catch(e){
    console.log(e);
    }
}





module.exports = { Register, Login, getAllUsers, deleteUser ,editUser }


