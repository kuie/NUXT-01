export function obj2params (obj) {
  let result = ''
  for (let item in obj) {
    result += `&${item}=${encodeURIComponent(obj[item])}`
  }
  return result ? result.slice(1) : result
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
  }).then(res => {
    if (res.status === 200) {
      return res.json()
    } else {
      this.$message({
        type: 'warning',
        message: `${method}接口交互失败`
      })
    }
  })
}
