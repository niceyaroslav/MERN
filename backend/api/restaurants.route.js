import express from "express"
const router = express.Router()
router.route("/").get((req, res) => res.send("hello, mofo!"))
export default router