<template>
<div style="height: 240px;width: 480px;margin-top: 20px;margin-left: 260px">
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="用户名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-select v-model="form.region" placeholder="请选择性别">
        <el-option label="女" value="女"></el-option>
        <el-option label="男" value="男"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="邮箱">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="您的爱好科目">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="大数据与信息" name="type"></el-checkbox>
        <el-checkbox label="硬件与体系结构" name="type"></el-checkbox>
        <el-checkbox label="算法与数据结构" name="type"></el-checkbox>
        <el-checkbox label="软件开发" name="type"></el-checkbox>
        <el-checkbox label="系统与信息安全" name="type"></el-checkbox>
        <el-checkbox label="产品与测试" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="其他备注">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交修改</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  name: 'InfoIndex',
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$confirm('确认修改?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
      })
    }
  }
}
</script>

<style scoped>

</style>
