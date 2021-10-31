const {users} = require('../roles.json');

module.exports = {
    getRoleByUserId(userId) {
        const foundUser = users.find(user => user.userId === userId);
        if (foundUser) {
            return foundUser.role;
        } else {
            return false;
        }
    }
}