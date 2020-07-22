import Vue from "vue";
import SvgIcon from "@/components/SvgIcon";

// 全局注册
Vue.component('svg-icon', SvgIcon)
// 遍历svg目录下的.svg文件
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

