<template>
  <div class="dashboard-container">
    <svg-icon icon-class="eye" />
  </div>
</template>
<script>
export default {
  name: "Dashboard",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang='scss' scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>