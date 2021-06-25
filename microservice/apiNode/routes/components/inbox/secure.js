import { check } from '../../../auth/index'
import Controller from './index'

export function checkAuth(action) {
  function middleware(req, res, next) {
    if (action == 'list_own') {
      check.logged(req)
      next();
    } else if (action == 'get_own') {
      check.logged(req)
      next();
    } else if (action == 'create') {
      check.logged(req)
      next();
    } else if (action == 'update') {
      const owner = req.params.idUser;
      check.own(req, owner)
      next();
    } else if (action == "delete") {
      const owner = req.params.idUser;
      check.own(req, owner)
      next();
    } else {
      next();
    }
  }
  return middleware;
}