const cheerio = require('cheerio');
const { REMETENTE, DESTINATARIO, PRODUTO, NOTA_FISCAL } = require('../model/enum.js');

module.exports = class Nfe {
    constructor(data) {
        this.data = data
        this.dom = cheerio.load(data);
    }

    getEndDestinatario() {
        const { END_BAIRRO, END_CEP, END_LGR, END_MUNI, END_NUM, END_UF } = DESTINATARIO

        return {
            END_BAIRRO: this.dom(END_BAIRRO).text() || "",
            END_CEP: this.dom(END_CEP).text() || "",
            END_LGR: this.dom(END_LGR).text() || "",
            END_MUNI: this.dom(END_MUNI).text() || "",
            END_NUM: this.dom(END_NUM).text() || "",
            END_UF: this.dom(END_UF).text() || "",
        }
    }

    getEndRemetente() {
        const { END_BAIRRO, END_CEP, END_LGR, END_MUNI, END_NUM, END_UF } = REMETENTE

        return {
            END_BAIRRO: this.dom(END_BAIRRO).text() || "",
            END_CEP: this.dom(END_CEP).text() || "",
            END_LGR: this.dom(END_LGR).text() || "",
            END_MUNI: this.dom(END_MUNI).text() || "",
            END_NUM: this.dom(END_NUM).text() || "",
            END_UF: this.dom(END_UF).text() || "",
        }
    }

    getInfoDestinatario() {
        const { NOME, CNPJ, EMAIL } = DESTINATARIO

        return {
            NOME: this.dom(NOME).text() || "",
            CNPJ: this.dom(CNPJ).text() || "",
            EMAIL: this.dom(EMAIL).text() || "",
        }
    }

    getInfoRemetente() {
        const { NOME, CNPJ, EMAIL } = REMETENTE

        return {
            NOME: this.dom(NOME).text() || "",
            CNPJ: this.dom(CNPJ).text() || "",
            EMAIL: this.dom(EMAIL).text() || "",
        }
    }

    getProdutos() {
        const { NOME, VALOR_TOTAL, QTD, VALOR_UNI } = PRODUTO
        const arr = []


        this.dom('det prod').each(function (i, el) {
            const $ = cheerio.load(el);


            const prod = {
                NOME: $(NOME).text(),
                QTD: Number($(QTD).text()) || 0,
                VALOR_UNI: parseFloat($(VALOR_UNI).text()) || 0,
                VALOR_TOTAL: parseFloat($(VALOR_TOTAL).text()) || 0,
            }



            arr.push(prod)
        })

        return arr
    }

    getDataNFe() {
        const { DATE_EMI, ID, NU } = NOTA_FISCAL

        return {
            DATE_EMI: this.dom(DATE_EMI).text(),
            ID: this.dom(ID).attr("id"),
            NU: this.dom(NU).text(),
        }
    }
}