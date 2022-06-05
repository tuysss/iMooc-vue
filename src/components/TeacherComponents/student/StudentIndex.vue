<template>
  <div>
    <el-table class="el-table" border
      :data="tableData"
      style="width: 80%"
      :row-class-name="tableRowClassName">
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="course"
        label="所修课程"
        width="180">
      </el-table-column>
      <el-table-column
        prop="progress"
        label="学习进度">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">评分</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">发送预警通知</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table {
  background: #f0f9eb;
  margin-left: 50px;
  margin-top: 50px;
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
        name: '王小虎',
        course: '数据挖掘',
        progress: '2 / 8'
      }, {
        name: '王小虎',
        course: '软件项目管理',
        progress: '6 / 6'
      }, {
        name: 'tuysss',
        course: '数据挖掘',
        progress: '5 / 8'
      }, {
        name: 'tuysss',
        course: '编译原理',
        progress: '1 / 9'
      }]
    }
  }
}
</script>
