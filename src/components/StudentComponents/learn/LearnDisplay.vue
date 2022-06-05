<template>
  <div>
    <el-row style="height: 300px;"
            v-for="item in learnCourses.slice((currentPage-1)*pageSize,currentPage*pageSize)"
            :key="item.id">
      <el-col>
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" class="cover"/>
          <div style="padding: 14px;"/>
          <span>{{item.title}}</span>
          <div class="bottom clearfix">
            <el-button type="primary" plain
                       @click="learn(item.id)">学习课程</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="learnCourses.length">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'LearnDisplay',
  data () {
    return {
      learnCourses: [], // 用map对象传参进来需要的信息
      currentPage: 1,
      pageSize: 12
    }
  },
  mounted: function () {
    this.loadLearnCourses()
  },
  methods: {
    loadLearnCourses () {
      var that = this
      this.$axios.get('/loadCoursesToLearn').then(resp => {
        if (resp && resp.status === 200) {
          that.learnCourses = resp.data
        }
      })
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
      console.log(this.currentPage)
    },
    learn (id) {
      console.log(id)
      this.$confirm('开始学习?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios
          .post('/learn', {id: id}).then(resp => {
            if (resp && resp.status === 200) {
              alert('您已完成一次学习！')
            }
          })
      })
    }
  }
}
</script>

<style scoped>
.cover {
  width: 400px;
  height: 200px;
  margin-bottom: 7px;
  overflow: hidden;
  cursor: pointer;
}

.title {
  font-size: 14px;
  text-align: left;
}

.author {
  color: #333;
  width: 102px;
  font-size: 13px;
  margin-bottom: 6px;
  text-align: left;
}

.abstract {
  display: block;
  line-height: 17px;
}

.el-icon-delete {
  cursor: pointer;
  float: right;
}

.switch {
  display: flex;
  position: absolute;
  left: 780px;
  top: 25px;
}

a {
  text-decoration: none;
}

a:link, a:visited, a:focus {
  color: #3377aa;
}

</style>
