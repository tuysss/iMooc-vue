<template>
  <div class="error-page">
    <div style="padding:100px 500px 0px 0px">
      <img src="src/assets/img/icon/404.png" class="error-tag">
    </div>
  </div>
</template>

<script>
export default {
  name: '404'
}
</script>

<style scoped>
.error-page {
  background:url("src/assets/img/icon/404.png") no-repeat;
  background-position: center;
  margin: 0;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
</style>
