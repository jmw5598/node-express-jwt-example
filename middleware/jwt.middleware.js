const { JwtService } = require('../services');

class JwtMiddleware {

  constructor() {}

  verify(req, res, next) {
    const bearer = req.header('Authorization') || '';
    const token = bearer.split(' ')[1];
    const valid = JwtService.verify(token);
    return valid ? next() : res.status(401).send({ message: 'Unauthorized' });
  }

  hasRole(role) {
    return (req, res, next) => {
      const bearer = req.header('Authorization') || '';
      const token = bearer.split(' ')[1];
      const decoded = JwtService.decode(token);
      const foundRole = decoded.payload.roles.find(e => e.role === role);
      return foundRole ? next() : res.status(403).send({ message: 'Access Denied' });
    }
  }

  hasAllRoles(roles) {
    return (req, res, next) => {
      const bearer = req.header('Authorization') || '';
      const token = bearer.split(' ')[1];
      const decoded = JwtService.decode(token);
      const foundAllRole = roles.every(e => decoded.payload.roles.find(i => i.role === e));
      return foundAllRoles ? next() : res.status(403).send({ message: 'Access Denied' });
    }
  }

  hasAnyRole(role) {
    return (req, res, next) => {
      const bearer = req.header('Authorization') || '';
      const token = bearer.split(' ')[1];
      const decoded = JwtService.decode(token);
      const foundAnyRole = roles.some(e => decoded.payload.roles.find(i => i.role === e));
      return foundAnyRole ? next() : res.status(403).send({ message: 'Access Denied' });
    }
  }

}

module.exports = new JwtMiddleware();
