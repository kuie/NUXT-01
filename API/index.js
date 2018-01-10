'use strict'
import { post } from '../util/fetch'

export const login = (username, pwd) => {
  return post('/api/user/login', {
    username: username,
    pwd: pwd
  })
}
