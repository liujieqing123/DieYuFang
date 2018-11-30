import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
   state: {
    login: window.localStorage.getItem('login')?window.localStorage.getItem('login'):false,
    sliderShow:false
  },
  mutations: {
//  increment (state) {
//    state.count++
//  }
	changLogin(state,val){
		state.login=false;
	}, 
	changeSliderShow(state,val){
     	state.sliderShow=val
    }
  }
})
