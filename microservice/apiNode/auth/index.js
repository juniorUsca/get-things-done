import jwt from 'jsonwebtoken'
import { config } from '../config'

const secret = config.jwt.secret

export function sign(data) {
  return jwt.sign(data, secret)
}

export const check = {
  own: function (req, owner) {
    const decoded = decodeHeader(req)
    // COMPROBAR SI ES O NO PROPIO
    if (decoded._id !== owner) {
      throw err('No puedes hacer esto', 401)
    }
  },
  logged: function (req) {
    const decoded = decodeHeader(req)
    // COMPROBAR SI ES O NO PROPIO
  },
}

function verify(token) {
  return jwt.verify(token, secret)
}


function getToken(auth) {
  if (!auth) {
    throw err('No viene token', 401)
  }

  if (auth.indexOf('Bearer') === -1) {
    throw err('Formato Invalido', 401)
  }

  let token = auth.replace('Bearer ', '')

  return token
}

function decodeHeader(req) {
  const authorization = req.headers.authorization || '';
  const token = getToken(authorization)
  const decoded = verify(token)

  req.user = decoded

  return decoded;
}

function err(message, code) {
  let e = new Error(message);
  if (code) {
    e.statusCode = code;
  }
  console.log(e)
  return e;
}