<template>
  <section class="app-main">
    <!-- <router-view /> -->
  </section>
</template>
<script>
export default {
  name: "AppMain",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang='scss' scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header + .app-main {
  padding-top: 50px;
}
</style>