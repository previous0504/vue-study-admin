<template>
  <div>
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-demo"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
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
import variables from "@/styles/variables.scss";
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
    },
    variables() {
      return variables;
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