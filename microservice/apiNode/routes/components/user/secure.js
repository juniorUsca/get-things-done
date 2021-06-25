import { check } from '../../../auth/index'

export function checkAuth(action) {
  function middleware(req, res, next) {
    if (action == 'update') {
      const owner = req.params.idUser;
      console.log(owner)
      check.own(req, owner)
      next();
    } else if (action == "delete") {
      const owner = req.params.idUser;
      console.log(owner)
      check.own(req, owner)
      next();
    } else {
      next();
    }
  }
  return middleware;
}