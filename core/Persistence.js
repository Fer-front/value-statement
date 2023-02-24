const File = require("./File.js")


const PATH_FILE = "./data.json"
const DATA_DEFAULT = {
    dir: "",
    files: []
}

module.exports = class Persistence {
    static setDir(path) {
        File.open(PATH_FILE, (data) => {
            const _data = JSON.parse(data)

            _data.dir = path

            Persistence.update(_data)
        })
    }

    static addFile(dataFile) {
        File.open(PATH_FILE, (data) => {
            const _data = JSON.parse(data)
            _data.files.push(dataFile)

            Persistence.update(_data)
        })
    }

    static addLoteFile(files) {
        File.open(PATH_FILE, (data) => {
            const _data = JSON.parse(data)
            _data.files = files

            Persistence.update(_data)
        })
    }

    static reset() {
        Persistence.update(DATA_DEFAULT)
    }

    static update(data) {
        File.createJSON("./", "data", data)
    }

    static getFiles(cb) {
        File.open(PATH_FILE, (data) => {
            const _data = JSON.parse(data)

            cb(_data.files)
        })
    }
}