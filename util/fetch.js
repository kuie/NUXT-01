export function obj2params (obj) {
  let result = ''
  for (let item in obj) {
    result += `&${item}=${encodeURIComponent(obj[item])}`
  }
  return result ? result.slice(1) : result
}

export const post = (url, paramsObj) => {
  return _fetch(url, 'POST', paramsObj)
}

export const get = (url, paramsObj) => {
  return _fetch(url, 'GET', paramsObj)
}

export const _fetch = (url, method, paramsObj) => {
  return fetch(url, {
    method: method,
    credentials: 'include',
    headers: {
      'Accept': 'appliaction/json,text/plain,*/*',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: obj2params(paramsObj)
  }).then(res => {
    return new Promise((resolve, reject) => {
      if (res.status === 200) {
        res.json().then(res => {
          resolve(res)
        })
      } else {
        res.text().then(text => {
          reject(new Error(`${url}-->${text}-->${res.status}`))
        })
      }
    })
  })
}
