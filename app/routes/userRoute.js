import test from "../controllers/userController.js";
import express from 'express';

const router = express.Router()

// const test = (req, res) => {
//     res.json({
//         message: 'API is working'
//     })
// }

router.get("/", test)

export default router;