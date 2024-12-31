import request from '@/utils/request'

const BASE_URL = 'http://43.139.6.217:10060'

export function addClassTeacher(data) {
  return request({
    url: `${BASE_URL}/classTeacher/add`,
    method: 'post',
    data
  })
}

export function getClassTeacherList(data) {
  return request({
    url: `${BASE_URL}/classTeacher/list`,
    method: 'post',
    data
  })
} 