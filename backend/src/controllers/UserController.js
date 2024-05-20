const userRepository = require("../repositories/UserRepository");

class UserController {
    async index(req, res){
        const users = await userRepository.findAll();

        return res.json(users);
    }

    async show(req, res){

        const { id } = req.params;

        try{
            const user = await userRepository.findUserById(id);
            res.json(user);
        }
        catch(error){
            return res.status(404).json({error: error.message});
        }
    }

    async create(req, res){
        const user = req.body;

        try{
            const newUser = await userRepository.createUser(user);
            res.json(newUser);
        }
        catch(error){
            return res.status(400).json({error: error.message});
        }
    }

    async delete(req, res){
        const { id } = req.params;

        try{
            await userRepository.deleteUser(id);
            res.status(204).send();
        }
        catch(error){
            return res.status(404).json({error: error.message});
        }
    }
}

module.exports = new UserController();