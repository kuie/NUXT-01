'use strict'
import { post } from '../util/fetch'

export const login = (username, pwd) => {
  return post('/api/login', {
    username: username,
    pwd: pwd
  })
}
