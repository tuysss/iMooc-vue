<template>
  <div>
    <el-table class="el-table" border
      :data="tableData"
      style="width: 80%"
      :row-class-name="tableRowClassName">
      <el-table-column
        prop="date"
        label="创建日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="课程名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="descript"
        label="课程简介">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">申请取消</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style>
.el-table {
  background: oldlace;
  margin-left: 50px;
  margin-top: 50px;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>

<script>
export default {
  methods: {
    tableRowClassName ({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    }
  },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '软件项目管理',
        descript: '欢迎大家选修nnu开设的软件工程MOOC课程。我们将全面介绍软件工程所涉及的各方面知识，包括软件过程、软件需求、软件测试、软件项目管理、软件开发工具和环境。通过课程讲授，让大家初步了解软件开发和维护的方法学，为进一步深入学习各专题打下基础。'
      }, {
        date: '2016-05-02',
        name: '编译原理',
        descript: '聪明的小子来学！'
      }, {
        date: '2016-05-01',
        name: '数据挖掘',
        descript: '挖呀挖呀挖呀挖挖呀挖呀挖呀挖~~~~'
      }]
    }
  }
}
</script>
