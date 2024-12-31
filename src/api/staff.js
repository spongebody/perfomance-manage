import request from '@/utils/request'

export function addStaff(data) {
  return request({
    url: `/staff/add`,
    method: 'post',
    data
  })
}

export function getStaffList(data) {
  return request({
    url: `/staff/list`,
    method: 'post',
    data
  })
}

export function updateStaff(data) {
  return request({
    url: `staff/update`,
    method: 'post',
    data
  })
}

export function delStaff(data) {
  return request({
    url: `/staff/del`,
    method: 'post',
    data
  })
}
