const File = require("../core/File.js")
const generateLog = require('../generateLog.js')

module.exports = {
    home(req, res) {
        res.render('home', { data: "home" });
    },


    async upload(req, res, next) {
        console.log("upload na home")

        await generateLog.exec()        

        res.redirect('/dashboard')
    },


    dashboard(req, res) {      
        File.open("./data.json", (data) => { 
            
            const { files } = (JSON.parse(data))
            
            res.render('dashboard', { data: files });
        }) 
    },

    print(req, res) {
        console.log("print ======> ")
        console.log(req.query)

        const path = req.query.file

        File.open(path, (data) => {
            res.render('declaracao', { data: data });
        })
    }
};
