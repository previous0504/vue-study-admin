<template>
  <div>
    <SideBar class="sidebar-container" />
    <div class="main-container">
      <div class="fixed-header">
        <Navbar />
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "./components/Sidebar/index";
import Navbar from "./components/Navbar";
export default {
  name: "Layout",
  components: {
    SideBar,
    Navbar
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang='scss' scoped>
@import "../../styles/variables.scss";
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}
</style>