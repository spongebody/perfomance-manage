<template>
  <div class="app-container">
    <div class="filter-container">
      <!-- Search Form -->
      <el-form :inline="true" :model="listQuery" class="demo-form-inline">
        <el-form-item label="部门">
          <el-input v-model="listQuery.department" placeholder="请输入部门名称" clearable />
        </el-form-item>
        <el-form-item label="科室">
          <el-input v-model="listQuery.className" placeholder="请输入科室名称" clearable />
        </el-form-item>
        <el-form-item label="学历">
          <el-input v-model="listQuery.edu" placeholder="请输入学历" clearable />
        </el-form-item>
        <el-form-item label="权限">
          <el-select v-model="listQuery.tag" placeholder="请选择权限" clearable>
            <el-option label="部门负责人" :value="2" />
            <el-option label="普通员工" :value="3" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleFilter">查询</el-button>
          <el-button type="primary" @click="handleCreate">新增</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- Data Table -->
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%; overflow-x: auto; white-space: nowrap"
    >
      <el-table-column
        label="序号"
        type="index"
        width="50"
        align="center"
        fixed
      />
      <el-table-column 
        label="职工号" 
        prop="number" 
        align="center"
        min-width="120"
      />
      <el-table-column 
        label="姓名" 
        prop="name" 
        align="center"
        min-width="100"
      />
      <el-table-column 
        label="权限" 
        align="center"
        min-width="100"
      >
        <template slot-scope="{row}">
          {{ row.tag === 1 ? '管理员' : row.tag === 2 ? '部门负责人' : '普通员工' }}
        </template>
      </el-table-column>
      <el-table-column 
        label="头像" 
        align="center"
        min-width="80"
      >
        <template slot-scope="{row}">
          <el-avatar 
            :src="row.avator" 
            :size="40"
          >
            <el-icon><Avatar /></el-icon>
          </el-avatar>
        </template>
      </el-table-column>
      <el-table-column 
        label="部门" 
        prop="department" 
        align="center"
        min-width="120"
      />
      <el-table-column 
        label="教研室" 
        prop="className" 
        align="center"
        min-width="120"
      />
      <el-table-column 
        label="手机号" 
        prop="phone" 
        align="center"
        min-width="120"
      />
      <el-table-column 
        label="身份证" 
        prop="idCard" 
        align="center"
        min-width="180"
      />
      <el-table-column 
        label="操作" 
        align="center"
        width="230"
        fixed="right"
      >
        <template slot-scope="{row}">
          <el-button size="mini" @click="handleDetail(row)">详情</el-button>
          <el-button size="mini" type="primary" @click="handleUpdate(row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- Pagination -->
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.pageNo"
      :limit.sync="listQuery.pageSize"
      @pagination="getList"
    />

    <!-- Dialog -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible">
      <!-- Detail View -->
      <el-descriptions v-if="dialogTitle === '员工详情'" :column="2" border>
        <el-descriptions-item label="职工号">{{ temp.number }}</el-descriptions-item>
        <el-descriptions-item label="姓名">{{ temp.name }}</el-descriptions-item>
        <el-descriptions-item label="部门ID">{{ temp.departmentId }}</el-descriptions-item>
        <el-descriptions-item label="职称">{{ temp.title }}</el-descriptions-item>
        <el-descriptions-item label="学历">{{ temp.edu }}</el-descriptions-item>
        <el-descriptions-item label="手机号">{{ temp.phone }}</el-descriptions-item>
        <el-descriptions-item label="身份证号">{{ temp.idCard }}</el-descriptions-item>
        <el-descriptions-item label="权限">
          <el-tag type="success" v-if="temp.tag === 1">管理员</el-tag>
          <el-tag type="warning" v-else-if="temp.tag === 2">部门负责人</el-tag>
          <el-tag type="info" v-else>普通员工</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="创建时间">{{ temp.createTime }}</el-descriptions-item>
        <el-descriptions-item label="修改时间">{{ temp.updateTime }}</el-descriptions-item>
      </el-descriptions>

      <!-- Edit/Create Form -->
      <el-form
        v-else
        ref="dataForm"
        :rules="rules"
        :model="temp"
        label-position="right"
        label-width="80px"
      >
        <el-form-item label="职工号" prop="number">
          <el-input v-model="temp.number" placeholder="请输入职工号" />
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="temp.name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="部门ID" prop="departmentId">
          <el-input v-model="temp.departmentId" placeholder="请输入部门ID" />
        </el-form-item>
        <el-form-item label="职称" prop="title">
          <el-input v-model="temp.title" placeholder="请输入职称" />
        </el-form-item>
        <el-form-item label="学历" prop="edu">
          <el-input v-model="temp.edu" placeholder="请输入学历" />
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="temp.phone" placeholder="请输入手机号" />
        </el-form-item>
        <el-form-item label="身份证号" prop="idCard">
          <el-input v-model="temp.idCard" placeholder="请输入身份证号" />
        </el-form-item>
        <el-form-item label="权限" prop="tag">
          <el-select v-model="temp.tag" placeholder="请选择权限">
            <el-option label="部门负责人" :value="2" />
            <el-option label="普通员工" :value="3" />
          </el-select>
        </el-form-item>
        <template v-if="!temp.id">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="temp.username" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="temp.password" placeholder="请输入密码" type="password" />
          </el-form-item>
        </template>
        <template v-else>
          <el-form-item label="创建时间">
            <el-input v-model="temp.createTime" disabled />
          </el-form-item>
          <el-form-item label="修改时间">
            <el-input v-model="temp.updateTime" disabled />
          </el-form-item>
        </template>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitForm">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { addStaff, updateStaff, getStaffList, delStaff } from '@/api/staff'
import Pagination from '@/components/Pagination'
// import defaultAvatar from '@/assets/default-avatar.png'

export default {
  name: 'Employee',
  components: { Pagination },
  data() {
    return {
      list: [],
      total: 0,
      listLoading: false,
      listQuery: {
        pageNo: 1,
        pageSize: 10,
        department: '',
        className: '',
        edu: '',
        tag: 3
      },
      dialogVisible: false,
      dialogTitle: '',
      temp: {
        id: undefined,
        number: '',
        name: '',
        departmentId: '',
        title: '',
        edu: '',
        phone: '',
        idCard: '',
        username: '',
        password: '',
        tag: 3,
        avator: '/images/avatar/1.jpg'
      },
      rules: {
        number: [{ required: true, message: '请输入职工号', trigger: 'blur' }],
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        departmentId: [{ required: true, message: '请输入部门ID', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
        idCard: [{ required: true, message: '请输入身份证号', trigger: 'blur' }],
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        tag: [{ required: true, message: '请选择标签', trigger: 'change' }]
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      try {
        this.listLoading = true
        const { data } = await getStaffList(this.listQuery)
        this.list = data.records
        this.total = data.total
      } finally {
        this.listLoading = false
      }
    },
    handleFilter() {
      this.listQuery.pageNo = 1
      this.getList()
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        number: '',
        name: '',
        departmentId: '',
        title: '',
        edu: '',
        phone: '',
        idCard: '',
        username: '',
        password: '',
        tag: 3,
        avator: '/images/avatar/1.jpg'
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogTitle = '新增员工'
      this.dialogVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row)
      this.dialogTitle = '编辑员工'
      this.dialogVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    async handleDelete(row) {
      try {
        await this.$confirm('确认删除该员工吗？', '提示', {
          type: 'warning'
        })
        await delStaff({ id: row.id })
        this.$message.success('删除成功')
        this.getList()
      } catch (error) {
        console.error(error)
      }
    },
    handleDetail(row) {
      this.temp = Object.assign({}, row)
      this.dialogTitle = '员工详情'
      this.dialogVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    async submitForm() {
      this.$refs['dataForm'].validate(async (valid) => {
        if (valid) {
          try {
            if (this.temp.id) {
              await updateStaff(this.temp)
              this.$message.success('更新成功')
            } else {
              await addStaff(this.temp)
              this.$message.success('新增成功')
            }
            this.dialogVisible = false
            this.getList()
          } catch (error) {
            console.error(error)
          }
        }
      })
    }
  }
}
</script>

