const express = require('express')
const app = express()

require('dotenv').config()

const cors = require('cors')

const PORT = process.env.PORT

const Post = require('./models/Posts')

app.use(express.json())

app.use(cors())

app.get("/", async(req, res) => {

    try {

        const list = await Post.find()

        res.json(list)

    } catch {
        return res.status(400).json("Error")
    }

})

app.get("/:postId", async(req, res) => {

    try {

        const listOne = await Post.findOne({_id: req.params.postId})

        res.json(listOne)

    } catch {

        return res.status(400).json("Error")

    }
})

app.post("/create", async(req, res) => {

    try {

        const {title, description, content} = req.body

        const createPost = await Post.create({ title, description, content })

        res.json({ createPost })

    } catch(err) {

        return res.status(400).json("Error")

    }

})

app.put("/edit/:postId", async(req, res) => {

    try {

        const {title, description, content} = req.body

        const edit = await Post.findByIdAndUpdate({ _id: req.params.postId}, {
            title,
            description,
            content
        }, {new: true})

        res.json({edit})

    } catch {
        
        return res.status(400).json("Error")

    }

})

app.delete("/delete/:deleteId", async(req, res) => {

    try {

        const deletePost = await Post.findByIdAndDelete({_id: req.params.deleteId})

        res.json({deletePost})

    } catch {

        return res.status(400).json("Error")

    }

})

app.listen(PORT, () => {
    console.log('Sever running on port: ' + PORT)
})