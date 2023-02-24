module.exports = class DataPersistence {
    static create({ pathFile, name, nf, total_itens, total_nf }) {
        return {
            name,
            nf,
            total_itens,
            total_nf,
            pathFile
        }
    }
}