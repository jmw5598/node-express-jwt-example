'use strict';

const { UsersRepository } = require('../controllers');

class AuthenticationController {

  constructor() {}

  authenticate(req, res) {
    return res.status(200).send({ message: 'Successfully Authenticated' });
    // const username = req.body.username;
    // const password = req.body.password;
    //
    // let user = UsersRepository.findOne(username);
    //
    // // maybe have this as a service?
    // let valid = user.then(user) => {
    //   if(user)
    //     return bcrypt.compare(password, user.dataValues.password);
    //   else
    //     throw err;
    // })
    //
    // return Promise.all([user, valid])
    //   .then([user, valid]) => {
    //     if(valid) {
    //       let payload = { user: user.dataValues.username, roles: user.dataValues.roles };
    //       return res.status(200).send({ token: JwtService.sign(payload) });
    //     } else {
    //       throw err;
    //     }
    //   })
    //   .catch((error) => res.status(401).send({ message: 'Invalid username/password' }));
  }

}

module.exports = new AuthenticationController();
