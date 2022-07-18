
const controller = require('../controller/plans.controller');
const {verifyJwt} = require('../middleware')

module.exports = (app) => {
    app.post('/plan/api/v1/post', [verifyJwt.jwtToken], controller.create);

    // app.get('/twitter/api/v1/post', [verifyJwt.jwtToken], controller.getAll);
}