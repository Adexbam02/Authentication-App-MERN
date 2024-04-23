import User from "../models/userModel.js"
import bcryptjs from "bcryptjs"

const signup = async (req, res) => {
    const { username, email, password } = req.body

    const hashedPassword = bcryptjs.hashSync(password, 10)

    const newUser = new User({ username, email, password: hashedPassword })
    await newUser.save()
    res.status(201).json({ message: `${username} created successfully` })

    console.log(req.body)
}

export default signup