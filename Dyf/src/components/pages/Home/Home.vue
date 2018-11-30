<template>
  <div class="home">
    <!--{{msg}}-->
	  <Banner></Banner>
		<List></List>
		<New v-for="item in list" :id="item.id" :name="item.name"></New>
  </div>
</template>

<script>
//import Footer from '../../commons/Footer'
import Banner from '../../commons/Banner.vue'
import List from '../../commons/List.vue'
import New from '../../commons/New.vue'
export default {
  name: 'Home',
  components:{
		Banner,List,New
  },
  data () {
    return {
      msg: 'Home',
      list:[{id:'1',name:'新品'},{id:'8',name:'人气'}]
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import url("../../../styles/main.less");

.home{
	.h(667);
	.margin(44,0,0,0);
	overflow:auto;
}

</style>
