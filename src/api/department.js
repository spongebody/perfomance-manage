import request from '@/utils/request'

export function addDepartment(data) {
  return request({
    url: `/department/add`,
    method: 'post',
    data
  })
}

export function updateDepartment(data) {
  return request({
    url: `/department/update`,
    method: 'post',
    data
  })
}

export function getDepartmentList(data) {
  return request({
    url: `/department/list`,
    method: 'post',
    data
  })
}

export function deleteDepartment(data) {
  return request({
    url: `/department/del`,
    method: 'post',
    data
  })
}
