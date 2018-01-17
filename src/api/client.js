// src/api/client.js

import request from 'superagent'

export default class ApiClient {
  defaultOptions = {
    tokenStorageKey: 'recipeApiJWT'
  }

  constructor(host, options = {}) {
    this.host = host || 'http://localhost:3030'
    this.options = { ...this.defaultOptions, ...options }
  }

  // GET path
  //
  // Example:
  //  api.get('/recipes')
  //    .then(res => console.log(res.body))
  //    .catch(err => console.log(err))
  //
  // Returns: Promise
  get(path) {
    return request
      .get(this.createUrl(path))
      .set(this.headers())
  }

  post(path, data = {}) {
    return request
    .post(this.createUrl(path))
    .set(this.headers())
    .send(data)
    // FILL IN!
  }

  put(path, data = {}) {
    return request
    .put(this.createUrl(path))
    .set(this.headers())
    .send(data)
    // FILL IN!
  }

  patch(path, data = {}) {
    return request
    .patch(this.createUrl(path))
    .set(this.headers())
    .send(data)
    // FILL IN!
  }

  delete(path) {
    return request
      .del(this.createUrl(path))
      .set(this.headers())
    // FILL IN!
  }

  headers() {
    let headers = {
      Accept: 'application/json'
    }

    if (this.isAuthenticated()) {
      //headers.authorization is a headers method
      headers.Authorization = `Bearer ${this.getToken()}`
    }

    return headers
  }

  isAuthenticated() {
    return !!this.getToken()
  }

  // Create a full URL to our API, including the host and path
  createUrl(path) {
    return [this.host, path].join('/')
  }

  getToken() {
    return localStorage.getItem(this.options.tokenStorageKey)
  }

  storeToken(token) {
    localStorage.setItem(this.options.tokenStorageKey, token)
  }
  removeToken() {
    localStorage.delete(this.options.tokenStorageKey)
  }
}
