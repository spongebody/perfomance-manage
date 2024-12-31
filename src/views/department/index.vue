<template>
  <div class="app-container">
    <div class="filter-container">
      <!-- Search Form -->
      <el-form :inline="true" :model="listQuery" class="demo-form-inline">
        <el-form-item label="部门">
          <el-input v-model="listQuery.department" placeholder="请输入部门名称" clearable />
        </el-form-item>
        <el-form-item label="教研室">
          <el-input v-model="listQuery.className" placeholder="请输入教研室名称" clearable />
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
    >
      <el-table-column 
        label="序号" 
        type="index" 
        width="50" 
        align="center" 
        fixed 
      />
      <el-table-column label="部门" prop="department" align="center" />
      <el-table-column label="教研室" prop="className" align="center" />
      <el-table-column label="创建时间" align="center">
        <template slot-scope="{row}">
          {{ formatTime(row.createTime) }}
        </template>
      </el-table-column>
      <el-table-column label="修改时间" align="center">
        <template slot-scope="{row}">
          {{ formatTime(row.updateTime) }}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="230">
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
      <el-descriptions v-if="dialogType === 'detail'" :column="1" border>
        <el-descriptions-item label="部门">{{ temp.department }}</el-descriptions-item>
        <el-descriptions-item label="教研室">{{ temp.className }}</el-descriptions-item>
        <el-descriptions-item label="创建时间">{{ formatTime(temp.createTime) }}</el-descriptions-item>
        <el-descriptions-item label="修改时间">{{ formatTime(temp.updateTime) }}</el-descriptions-item>
      </el-descriptions>

      <!-- Edit/Create Form -->
      <el-form
        v-else
        ref="dataForm"
        :rules="rules"
        :model="temp"
        label-position="left"
        label-width="80px"
      >
        <el-form-item label="部门" prop="department">
          <el-input v-model="temp.department" placeholder="请输入部门名称" />
        </el-form-item>
        <el-form-item label="教研室" prop="className">
          <el-input v-model="temp.className" placeholder="请输入教研室名称" />
        </el-form-item>
        <template v-if="dialogType === 'edit'">
          <el-form-item label="创建时间">
            <el-input :value="formatTime(temp.createTime)" disabled />
          </el-form-item>
          <el-form-item label="修改时间">
            <el-input :value="formatTime(temp.updateTime)" disabled />
          </el-form-item>
        </template>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button v-if="dialogType !== 'detail'" type="primary" @click="submitForm">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { addDepartment, updateDepartment, getDepartmentList, deleteDepartment } from '@/api/department'
import Pagination from '@/components/Pagination'

export default {
  name: 'Department',
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
        className: ''
      },
      dialogVisible: false,
      dialogTitle: '',
      temp: {
        id: undefined,
        department: '',
        className: ''
      },
      rules: {
        department: [{ required: true, message: '请输入部门名称', trigger: 'blur' }],
        className: [{ required: true, message: '请输入教研室名称', trigger: 'blur' }]
      },
      dialogType: ''
    }
  },
  created() {
    this.getList()
  },
  methods: {
    formatTime(timestamp) {
      if (!timestamp) return ''
      const date = new Date(timestamp * 1000)
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')
      const hours = String(date.getHours()).padStart(2, '0')
      const minutes = String(date.getMinutes()).padStart(2, '0')
      const seconds = String(date.getSeconds()).padStart(2, '0')
      return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`
    },
    async getList() {
      try {
        this.listLoading = true
        const { data } = await getDepartmentList(this.listQuery)
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
        department: '',
        className: ''
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogTitle = '新增部门'
      this.dialogType = 'create'
      this.dialogVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row)
      this.dialogTitle = '编辑部门'
      this.dialogType = 'edit'
      this.dialogVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    async handleDelete(row) {
      try {
        await this.$confirm('确认删除该记录吗？', '提示', {
          type: 'warning'
        })
        await deleteDepartment({ id: row.id })
        this.$message.success('删除成功')
        this.getList()
      } catch (error) {
        console.error(error)
      }
    },
    handleDetail(row) {
      this.temp = Object.assign({}, row)
      this.dialogTitle = '部门详情'
      this.dialogType = 'detail'
      this.dialogVisible = true
    },
    async submitForm() {
      this.$refs['dataForm'].validate(async (valid) => {
        if (valid) {
          try {
            if (this.temp.id) {
              await updateDepartment(this.temp)
              this.$message.success('更新成功')
            } else {
              await addDepartment(this.temp)
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
