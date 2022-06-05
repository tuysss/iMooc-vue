<template>
  <div>
    <el-container>
      <el-aside style="width: 200px;margin-top: 20px">
        <switch></switch>
        <SideMenu @indexSelect="listByCategory" ref="sideMenu"></SideMenu>
      </el-aside>
      <el-main>
        <LearnDisplay class="courses-area" ref="CoursesArea"></LearnDisplay>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import LearnDisplay from './LearnDisplay'
import SideMenu from './SideMenu'

export default {
  name: 'LearnIndex',
  components: {SideMenu, LearnDisplay}
}
</script>

<style scoped>
.courses-area {
  width: 990px;
  margin-left: auto;
  margin-right: auto;
}
</style>
