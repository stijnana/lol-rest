var user = require('../controllers/user.controller');

module.exports = function(app) {

    app.route('/users')
        .get(user.list)
        .post(user.toevoegen);

    app.route('/whaa/:userID')
        .get(user.read);

    app.route('/')
        .get(user.counter);


    app.param('userID', user.getUserByID);
};
