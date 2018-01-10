export function obj2params (obj) {
  let result = ''
  let item
  for (item in obj) {
    result += '&' + item + '=' + encodeURIComponent(obj[item])
  }
  // 因为result第一个参数是 & 所以需要去掉
  if (result) {
    result = result.slice(1)
  }
  console.log(result)
  return result
}

export function post (url, paramsObj) {
  return _fetch(url, 'POST', paramsObj)
}

export function get (url, paramsObj) {
  return _fetch(url, 'GET', paramsObj)
}

export function _fetch (url, method, paramsObj) {
  return fetch(url, {
    method: method,
    credentials: 'include',
    headers: {
      'Accept': 'appliaction/json,text/plain,*/*',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: obj2params(paramsObj)
  })
}
