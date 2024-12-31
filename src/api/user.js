import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(data) {
  return request({
    url: '/menu/list ',
    method: 'post',
    data
  })
}

// export async function login(data) {
//   return fetch('http://43.139.6.217:10060/user/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Methods': 'POST',
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Headers': 'Content-Type'
//     },
//     credentials: 'include',
//     body: JSON.stringify(data)
//   })
//     .then(response => response.json())
//     .then(data => {
//       if (data.code === 200) {
//         return Promise.resolve(data)
//       }
//       return Promise.reject(data)
//     })
//     .catch(error => {
//       return Promise.reject(error)
//     })
// }
// }

// export function logout() {
//   return request({
//     url: '/user/logout',
//     method: 'post'
//   })
// }
