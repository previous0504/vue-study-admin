<template>
  <div>
    <!-- 显示父路由 -->
    <template
      v-if="hasOneShowingChild(item.children,item) &&(!onlyOneChild.children ||onlyOneChild.noShowingChildren)"
    >
      <!-- Link组件看不懂 -->
      <!-- <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)"> -->
      <el-menu-item :index="resolvePath(onlyOneChild.path)">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span v-if="onlyOneChild.meta">{{onlyOneChild.meta.title}}</span>
        </template>
      </el-menu-item>>
      <!-- </app-link> -->
    </template>
    <!-- 显示子路由 -->

    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <i class="el-icon-location"></i>
        <span v-if="item.meta">{{item.meta.title}}</span>
      </template>

      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>
<script>
import path from "path";
import { isExternal } from "@/utils/validate";
import AppLink from "./Link";
export default {
  name: "SidebarItem",
  components: {
    AppLink
  },
  data() {
    return {
      onlyOneChild: null
    };
  },
  mounted() {},
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ""
    }
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        this.onlyOneChild = item;
        return true;
      });
      console.log(showingChildren.length);
      if (showingChildren.length === 1) {
        return true;
      }
      // 如果没有要显示的子路由器，则显示父路由器
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
        return true;
        console.log(this.onlyOneChild);
      }
      return false;
    },
    // 判断路由地址
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(this.basePath)) {
        return this.basePath;
      }

      return path.resolve(this.basePath, routePath);
    }
  }
};
</script>
<style lang='scss' scoped>
</style>