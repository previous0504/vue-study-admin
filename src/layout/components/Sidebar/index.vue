<template>
  <div>
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      mode="vertical"
      router
    >
      <SidebarItem
        v-for="route in routes"
        :key="route.path "
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </div>
</template>
<script>
import SidebarItem from "./SidebarItem";
export default {
  components: {
    SidebarItem
  },
  data() {
    return {};
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      console.log(this.$route);
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    }
  },

  mounted() {
    console.log(this.$router.options.routes);
  },
  methods: {}
};
</script>
<style lang='scss' scoped>
</style>