const express = require('express')
const { engine } = require('express-handlebars')

const upload = require("./config/upload.js")
const templateEnginer = require("./config/templateEnginer.js")


const app = express();
templateEnginer.config(app)


app.use(express.static(__dirname + "/public"))
app.use(express.static(__dirname + "/controller"))

const { home } = require("./routes")
app.get('/', home.home);

app.post('/upload', upload.array('avatar', 1000), home.upload)
app.get('/dashboard', home.dashboard)

app.get('/print', home.print)




app.listen(3000, () => {
    console.log("Servidor online!")
})
