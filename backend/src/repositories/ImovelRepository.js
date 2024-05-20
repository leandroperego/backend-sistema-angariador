const imoveisDb = require("../db/imoveis.json");
const fs = require("fs").promises;

class ImovelRepository {
    findAll() {
        return new Promise((resolve) => resolve(imoveisDb));
    }

    findImovelById(id) {
        return new Promise((resolve, reject) => {
            const imovel = imoveisDb.filter((imovel) => imovel.id == id);
            if (!imovel) {
                reject(new Error("Imóvel não encontrado!"));
            }
            resolve(imovel);
        });
    }

    update(id, dadosImovel) {
        return new Promise((resolve, reject) => {
            const index = imoveisDb.findIndex((imovel) => imovel.id == id);
            if (index === -1) {
                reject(new Error("Imóvel não encontrado!"));
            }
            imoveisDb[index] = { ...imoveisDb[index], ...dadosImovel };
            resolve(imoveisDb[index]);
        });
    }

    create(imovel) {
        return new Promise((resolve, reject) => {
            const newImovel = { id: imoveisDb.length + 1, ...imovel };
            imoveisDb.push(newImovel);

            fs.writeFile('backend/src/db/imoveis.json', JSON.stringify(imoveisDb))
                .then(resolve(newImovel))
                .catch((error) => reject(error))
            
        });
    }
}

module.exports = new ImovelRepository();