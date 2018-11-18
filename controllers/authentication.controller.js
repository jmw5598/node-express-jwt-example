'use strict';

class AuthenticationController {

  constructor() {}

  authenticate(req, res) {
    return res.status(200).send({ message: 'Authentication Successful' });
  }

}

module.exports = new AuthenticationController();
