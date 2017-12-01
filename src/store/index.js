import Vue from 'vue';
//状态管理模式
import Vuex from 'vuex';

Vue.use(Vuex);
//创建vuex仓库
export default new Vuex.Store({
  //状态
  state: {
    domain: "http://test.example.com",
    userInfo: {
      name: null,
      uid: null,
      avatar: null
    }
  },
  //突变
  mutations: {
    updateUserInfo (state, newUserInfo){
      state.userInfo = newUserInfo;
    }
  }
});