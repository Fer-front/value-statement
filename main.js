const cheerio = require('cheerio');
const NFE = require('./core/Nfe.js');
const DataPersistence = require("./model/DataPersistence.js")
const Persistence = require('./core/Persistence.js');

const File = require("./core/File.js")

// selecionar pasta
const PATH_FILES_NFE_XML = "./notas-bk"


// carregar os xml 
File.filterByXML(PATH_FILES_NFE_XML, (files) => {
    //TODO: verificar se nao ja esta registrado 
    const FILES = []

    //TODO: converter arquivo para json 
    files.forEach((file, index) => {
        const _path = `${PATH_FILES_NFE_XML}/${file}`

        File.open(_path, (data) => {
            const nfe = new NFE(data)

            // const destEnd = nfe.getEndDestinatario()
            // const remetEnd = nfe.getEndRemetente()
            // const remetInfo = nfe.getInfoRemetente()

            const prods = nfe.getProdutos()
            const notaFiscal = nfe.getDataNFe()
            const destInfo = nfe.getInfoDestinatario()


            const dataFile = DataPersistence.create({
                pathFile: _path,
                name: destInfo.NOME,
                nf: notaFiscal.NU,
                total_nf: prods.reduce((acc, curr) => acc + curr.VALOR_TOTAL, 0),
                total_itens: prods.reduce((acc, curr) => acc + curr.QTD, 0),
            })


            FILES.push(dataFile)

            if ((index + 1) === files.length) {
                // console.log(FILES);

                Persistence.addLoteFile(FILES)
            }
        })
    });


})






