import Vue from "vue"
import Router from "vue-router"        // 引入路由插件
import Home from "../components/Home"

// 必须用vue.use()安装路由功能
Vue.use(Router)

// 导出一个可共用的路由实例
export default new Router({
  // 定义多个路由规则
  routes: [
    {
      path: "/",      // 匹配路径
      name: "home",   // 命名路由
      component: Home    // 绑定路由跳转组件
    }
  ]
})
