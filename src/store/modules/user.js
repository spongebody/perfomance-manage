import { login, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    staffType: '' // 1. 超级管理员 2. 部门管理员 3. 普通员工
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_STAFF_TYPE: (state, staffType) => {
    state.staffType = staffType
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { code, message, data } = response
        if (code === 200) {
          commit('SET_TOKEN', data)
          setToken(data)
          resolve()
        } else {
          reject(message)
        }
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo({}).then(response => {
        const { data } = response

        if (!data) {
          return reject('Verification failed, please Login again.')
        }

        const { username, avator, staffType } = data

        commit('SET_NAME', username)
        commit('SET_AVATAR', avator)
        commit('SET_STAFF_TYPE', staffType)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // getInfo({ commit }) {
  //   return new Promise((resolve) => {
  //     const data = {
  //       name: 'Admin User',
  //       avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
  //     }
  //     commit('SET_NAME', data.name)
  //     commit('SET_AVATAR', data.avatar)
  //     resolve(data)
  //   })
  // },

  // user logout
  logout({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove token first
      resetRouter()
      commit('RESET_STATE')
      resolve()
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

