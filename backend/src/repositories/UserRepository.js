const usersDb = require('../db/users.json');
const fs = require('fs').promises;

class UserRepository {

    findAll() {
        return new Promise(resolve => resolve(usersDb));
    }

    findUserById(id) {
        return new Promise((resolve, reject) => {
            const user = usersDb.filter(user => user.id == id);
            if (!user) {
                reject(new Error('Usuário não encontrado!'));
            }
            resolve(user);
        })
    }

    createUser(user) {
        return new Promise((resolve, reject) => {
            const newUser = { id: usersDb.length + 1, ...user };
            usersDb.push(newUser);
            fs.writeFile('backend/src/db/users.json', JSON.stringify(usersDb))
                .then(resolve(newUser))
                .catch(error => reject(error));
        });
    }

    deleteUser(id) {
        return new Promise((resolve, reject) => {
            const index = usersDb.findIndex(user => user.id == id);
            if (index === -1) {
                reject(new Error('Usuário não encontrado!'));
            }
            usersDb.splice(index, 1);
            fs.writeFile('backend/src/db/users.json', JSON.stringify(usersDb))
                .then(resolve())
                .catch(error => reject(error));
        });
    }
}

module.exports = new UserRepository();