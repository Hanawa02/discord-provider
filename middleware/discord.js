/* eslint-disable space-before-function-paren, no-useless-escape */
import Cookie from 'js-cookie'

export default function() {
  if (!process.server) {
    console.log(Cookie.get('auth._token.discord'))
  }
}
