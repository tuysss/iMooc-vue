<template>
<div>
  <el-container>
    <el-aside style="width: 200px;margin-top: 20px">
      <switch></switch>
      <SideMenu @indexSelect="listByCategory" ref="sideMenu"></SideMenu>
    </el-aside>
    <el-main>
      <courses class="courses-area" ref="CoursesArea"></courses>
    </el-main>
  </el-container>
</div>
</template>

<script>
import SideMenu from './SideMenu'
import Courses from './CourseDisplay'
export default {
  name: 'CourseIndex',
  components: {SideMenu, Courses}
}
</script>

<style scoped>
.courses-area {
  width: 770px;
  margin-left: 50px;
  margin-right: auto;
}
</style>
