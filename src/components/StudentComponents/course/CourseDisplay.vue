// 对照/library/Books.vue
<template>
  <div>
    <el-row style="height: 840px;"
            v-for="item in courses.slice((currentPage-1)*pageSize,currentPage*pageSize)"
            :key="item.id">
      <el-col>
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="cover"/>
          <div style="padding: 14px;"/>
            <span>{{item.title}}</span>
            <div class="bottom clearfix">
              <el-button type="success" plain @click="selectCourse(item.id)">选课</el-button>
            </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="courses.length">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'CourseDisplay',
  data () {
    return {
      courses: [], // 用map对象传参进来需要的信息
      currentPage: 1,
      pageSize: 12
    }
  },
  mounted: function () {
    this.loadCourses()
  },
  methods: {
    loadCourses () {
      var that = this
      this.$axios.get('/loadCourses').then(resp => {
        if (resp && resp.status === 200) {
          that.courses = resp.data
        }
      })
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
      console.log(this.currentPage)
    },
    selectCourse (cid) {
      this.$confirm('确认选课?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios
          .post('/choose', {cid: cid}).then(resp => {
            if (resp && resp.status === 200) {
              alert('您已成功选课！')
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
