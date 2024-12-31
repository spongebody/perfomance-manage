<template>
  <div class="errPage-container">
    <el-row>
      <el-col :span="12">
        <h1 class="text-jumbo text-ginormous">401</h1>
        <h2>抱歉，您无权访问该页面, 请联系管理员</h2>
        <h6>Sorry, you don't have permission to access this page</h6>
        <el-button class="pan-back-btn" @click="back">
          返回
        </el-button>
      </el-col>
      <el-col :span="12">
        <img :src="errGif" width="313" height="428" alt="Girl has dropped her ice cream.">
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: '401',
  data() {
    return {
      errGif: require('@/assets/401_images/401.png')
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.errPage-container {
  width: 800px;
  max-width: 100%;
  margin: 100px auto;
  .text-jumbo {
    font-size: 60px;
    font-weight: 700;
    color: #484848;
  }
  .text-ginormous {
    font-size: 100px;
    margin-bottom: 20px;
  }
  h2 {
    font-size: 26px;
    margin: 20px 0;
    color: #606266;
  }
  h6 {
    font-size: 16px;
    margin: 10px 0;
    color: #909399;
  }
  .pan-back-btn {
    background: #2178ff;
    color: #fff;
    border: none;
    margin: 20px 0;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
