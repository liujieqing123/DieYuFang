<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
   	<!--<Footer></Footer>-->
  </div>
</template>

<script>
//引入组件
import Header from './components/commons/Header'
//import Footer from './components/commons/Footer'
export default {
  name: 'App',
  components:{
	Header
  }
}
</script>

<style>
@import './styles/css/base.css';
@import './styles/css/animation.min.css';
#app {
 
}
</style>
