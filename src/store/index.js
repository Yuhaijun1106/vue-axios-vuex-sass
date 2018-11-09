import Vue from 'vue'
import Vuex from 'vuex'
import Element from  'element-ui'
import 'element-ui/lib/theme-chalk/index.css'; 
import 'mint-ui/lib/style.css';

Vue.use(Vuex)
Vue.use(Element, { size: 'small' });

// const apiPrefix = 'http://192.168.50.173:8080/'
const apiPrefix = 'api/'

const allApi = {
    getGuideInfo: apiPrefix + 'guide'
}

const store = new Vuex.Store({
  state: {
    allApis : allApi
  },
  mutations: {
    toast (state, option){
      Element.Notification({
        title: option.title,
        message: option.message,
        type: option.type
      })
    }
  }
})

export default store
