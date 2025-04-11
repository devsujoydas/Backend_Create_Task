const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express()
const port = 5000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    fs.readdir("./files", (err, files) => {
        res.render('index1', { files: files })
    })
})


// fs.readFile("filename", "utf-8", (err, filedata) => {})
app.get('/files/:filename', (req, res) => {
    fs.readFile(`./files/${req.params.filename}`, 'utf-8', (err, filedata) => {
        res.render("filedetails1", { filename: req.params.filename, filedata: filedata })
    })
})


// fs.writeFile("filename.txt", data, ()=>{})
app.post('/create', (req, res) => {
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, () => {
        res.redirect('/')
    })
})


app.listen(port, () => {
    console.log(`Server runnig on port: ${port}`)
})

