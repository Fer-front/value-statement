const NOTA_FISCAL = {
    NU: "ide nNF",
    ID: "infNFe",
    DATE_EMI: "ide dhEmi"
}

const REMETENTE = {
    CNPJ: "emit CNPJ",
    NOME: "emit xNome",
    EMAIL: "emit email",
    END_LGR: "emit xLgr",
    END_NUM: "emit nro",
    END_BAIRRO: "emit xBairro",
    END_MUNI: "emit xMun",
    END_UF: "emit UF",
    END_CEP: "emit CEP"
}

const DESTINATARIO = {
    CNPJ: "dest CNPJ",
    NOME: "dest xNome",
    EMAIL: "dest email",
    END_LGR: "dest xLgr",
    END_NUM: "dest nro",
    END_BAIRRO: "dest xBairro",
    END_MUNI: "dest xMun",
    END_UF: "dest UF",
    END_CEP: "dest CEP"
}

const PRODUTO = {
    NOME: "xProd",
    QTD: "qCom",
    VALOR_UNI: "vUnCom",
    VALOR_TOTAL: "vProd"
}

module.exports = {
    REMETENTE,
    DESTINATARIO,
    PRODUTO,
    NOTA_FISCAL
}