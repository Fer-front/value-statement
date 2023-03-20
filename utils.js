const fs = require("fs")

module.exports = {
    serverStaticFile(res, path, contentType, responseCode = 200) {
        fs.readFile(__dirname + path, (err, data) => {
            if (err) {
                res.writeHead(500, { "content-Type": "text/plain" })
                return res.end("500 - Internal Error")
            }

            res.writeHead(responseCode, { "content-Type": contentType })
            res.end(data)
        })
    }
}