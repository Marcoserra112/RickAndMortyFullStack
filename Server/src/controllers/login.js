const users = require("../utils/users")

const login = (req, res) =>{
    const { email, password } = req.query;



   let user = users.find((us)=> us.email === email && us.password === password)

    return user 
    ? res.status(200).json({ access:true})
    : res.status(404).json({ access:false })
}

module.exports = login;

