<template>
  <div style="margin-top: 40px">
    <!--<el-button @click="addArticle()">添加文章</el-button>-->
    <div class="articles-area">
      <el-card style="text-align: left">
<!--        <div v-for="article in articles" :key="article.id">-->
          <div style="float:left;width:85%;height: 150px;">
            <span style="font-size: 20px"><strong>成绩预警</strong></span>
            <el-divider content-position="left">2022.6.5</el-divider>
            <p>您的课程 软件项目管理 成绩低于60分 请注意</p>
          </div>
        </el-card>
      <el-divider></el-divider>
      <el-card style="text-align: left">
        <div style="float:left;width:85%;height: 150px;">
          <span style="font-size: 20px"><strong>学习进度通知</strong></span>
          <el-divider content-position="left">2022.6.1</el-divider>
          <p>您的课程 数据挖掘 课程进度低于50% 请抓紧学习</p>
        </div>
<!--        </div>-->
      </el-card>
    </div>
    <el-pagination
      background
      layout="total, prev, pager, next, jumper"
      @current-change="handleCurrentChange"
      :page-size="pageSize"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>

export default {
  name: 'Articles',
  data () {
    return {
      articles: [],
      pageSize: 4,
      total: ''
    }
  },
  mounted () {
    this.loadArticles()
  },
  methods: {
    loadArticles () {
      var _this = this
      this.$axios.get('/article/' + this.pageSize + '/1').then(resp => {
        if (resp && resp.status === 200) {
          _this.articles = resp.data.content
          _this.total = resp.data.totalElements
        }
      })
    },
    handleCurrentChange (page) {
      var _this = this
      this.$axios.get('/article/' + this.pageSize + '/' + page).then(resp => {
        if (resp && resp.status === 200) {
          _this.articles = resp.data.content
          _this.total = resp.data.totalElements
        }
      })
    }
  }
}
</script>

<style scoped>
.articles-area {
  width: 990px;
  height: 750px;
  margin-left: auto;
  margin-right: auto;
}

.article-link {
  text-decoration: none;
  color: #606266;
}

.article-link:hover {
  color: #409EFF;
}
</style>
