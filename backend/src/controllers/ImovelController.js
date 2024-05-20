const imovelRepository = require("../repositories/ImovelRepository");

class ImovelController {
    index(req, res) {
        imovelRepository.findAll().then((imoveis) => {
            res.json(imoveis);
        });
    }

    show(req, res) {
        const { id } = req.params;
        imovelRepository.findImovelById(id).then((imovel) => {
            res.json(imovel);
        })
        .catch((error) => {
            res.status(404).send(error.message);
        });
    }

    update(req, res) {
        const { id } = req.params;
        const dadosImovel = req.body;
        imovelRepository.update(id, dadosImovel).then((imovel) => {
            res.json(imovel);
        })
        .catch((error) => {
            res.status(404).send(error.message);
        });
    }

    store(req, res) {
        const imovel = req.body;
        imovelRepository.create(imovel).then((newImovel) => {
            res.json(newImovel);
        });
    }
}

module.exports = new ImovelController();
