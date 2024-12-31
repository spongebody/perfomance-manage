<template>
  <div class="app-container">
    <el-row :gutter="20">
      <!-- <el-col :span="6">
        <el-card class="box-card">
          <div class="user-profile">
            <div class="box-center">
              <el-avatar :size="100" :src="user.avatar" />
            </div>
            <div class="box-center">
              <div class="user-name">{{ user.name }}</div>
              <div class="user-role">{{ user.roles.join(' | ') }}</div>
            </div>
          </div>
        </el-card>
      </el-col> -->
      <el-col :span="18">
        <el-card>
          <el-tabs v-model="activeTab">
            <el-tab-pane label="基本信息" name="userinfo">
              <el-form ref="userForm" :model="user" :rules="rules" label-width="100px">
                <el-form-item label="用户名" prop="username">
                  <el-input v-model="user.username" disabled />
                </el-form-item>
                <el-form-item label="昵称" prop="name">
                  <el-input v-model="user.name" />
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                  <el-input v-model="user.email" />
                </el-form-item>
                <el-form-item label="手机" prop="phone">
                  <el-input v-model="user.phone" />
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="updateUserInfo">更新信息</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>

            <el-tab-pane label="修改密码" name="password">
              <el-form ref="passwordForm" :model="passwordForm" :rules="passwordRules" label-width="100px">
                <el-form-item label="当前密码" prop="oldPassword">
                  <el-input v-model="passwordForm.oldPassword" type="password" show-password />
                </el-form-item>
                <el-form-item label="新密码" prop="newPassword">
                  <el-input v-model="passwordForm.newPassword" type="password" show-password />
                </el-form-item>
                <el-form-item label="确认密码" prop="confirmPassword">
                  <el-input v-model="passwordForm.confirmPassword" type="password" show-password />
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="updatePassword">修改密码</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Profile',
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能少于6个字符'))
      } else {
        callback()
      }
    }
    const validateConfirmPassword = (rule, value, callback) => {
      if (value !== this.passwordForm.newPassword) {
        callback(new Error('两次输入的密码不一致'))
      } else {
        callback()
      }
    }

    return {
      activeTab: 'userinfo',
      user: {
        username: '',
        name: '',
        email: '',
        phone: '',
        avatar: '',
        roles: []
      },
      passwordForm: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      },
      rules: {
        name: [{ required: true, message: '请输入昵称', trigger: 'blur' }],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
        ],
        phone: [{ required: true, message: '请输入手机号码', trigger: 'blur' }]
      },
      passwordRules: {
        oldPassword: [{ required: true, message: '请输入当前密码', trigger: 'blur' }],
        newPassword: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          { validator: validatePassword, trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, message: '请确认新密码', trigger: 'blur' },
          { validator: validateConfirmPassword, trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  },
  created() {
    // 初始化用户信息
    this.getUserInfo()
  },
  methods: {
    getUserInfo() {
      // 这里应该调用获取用户信息的API
      // 临时使用store中的数据
      this.user = {
        username: 'admin',
        name: this.name,
        email: 'admin@example.com',
        phone: '13800138000',
        avatar: this.avatar,
        roles: this.roles
      }
    },
    updateUserInfo() {
      this.$refs.userForm.validate(valid => {
        if (valid) {
          // 调用更新用户信息API
          this.$message.success('用户信息更新成功')
        }
      })
    },
    updatePassword() {
      this.$refs.passwordForm.validate(valid => {
        if (valid) {
          // 调用修改密码API
          this.$message.success('密码修改成功')
          this.passwordForm = {
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  padding: 20px;
}

.box-center {
  margin: 0 auto;
  text-align: center;
}

.user-profile {
  .user-name {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0;
  }
  .user-role {
    font-size: 14px;
    color: #999;
  }
}

.box-card {
  margin-bottom: 20px;
}
</style>
