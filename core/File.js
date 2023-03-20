const { readFile, readFileSync, writeFile, readdirSync } = require("fs")
const { resolve, extname } = require("path")

const OPTIONS = {
    READ: { encoding: "utf-8", flag: "r" },
    WRITE: { encoding: "utf-8", flag: "w" }
}

module.exports = class File {
    static async open(path, cb) {
        readFile(path, OPTIONS.READ, (err, data) => {
            if (err) throw new Error(err)
            cb(data)
        })
    }

    static createJSON(path, name, data) {
        const _path = resolve(`${path}/${name}.json`)
        const _data = JSON.stringify(data)

        try {
            writeFile(_path, _data, OPTIONS.WRITE, (err, data) => {
                if (err) throw new Error(err)
                console.log("create :" + name)
            })


        } catch (error) {
            console.error(error)
        }
    }

    static async filterByXML(dir, cb) {
        const data = readdirSync(dir, { encoding: "utf-8" })
        cb(data.filter(el => extname(el) === '.xml'))
    }
}
