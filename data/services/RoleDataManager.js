const {users} = require('../roles.json');

function getRoleByUserId(userId) {
    const foundUser = users.find(user => user.userId === userId);
    if (foundUser) {
        return foundUser.role;
    } else {
        return false;
    }
}

module.exports.getRoleByUserId = getRoleByUserId;