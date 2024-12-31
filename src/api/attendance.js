import request from '@/utils/request'

const BASE_URL = 'http://43.139.6.217:10060'

export function getAttendanceList(data) {
  return request({
    url: `${BASE_URL}/attendance/list`,
    method: 'post',
    data
  })
}

export function updateAttendance(data) {
  return request({
    url: `${BASE_URL}/attendance/update`,
    method: 'post',
    data
  })
} 