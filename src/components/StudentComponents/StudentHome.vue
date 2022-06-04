<template>
  <div>
    <NavMenu></NavMenu>
    <router-view/>
  </div>

</template>

<script>
import NavMenu from './common/NavMenu'
export default {
  name: 'StudentHome',
  components: {NavMenu}
}
</script>

<style scoped>

</style>
