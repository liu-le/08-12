<template>
  <div id="app">
    <Loading v-show="$root.$data.bLoading"></Loading>
    <Header v-show="$root.$data.bNav"></Header>
    <transition
      enter-active-class = "animated bounceInLeft delay-1s"
      leave-active-class = "animated bounceOutRight"
    >

      <keep-alive :exclude="['Detail']">
        <router-view></router-view>
      </keep-alive>

    </transition>
    <Footer v-show="$root.$data.bFoot"></Footer>
  </div>
</template>

<script>

import Header from './components/Header'
import Footer from './components/Footer'
import Loading from './components/Loading'

import Swipe from 'swipe';
import $ from 'jquery';

export default {
  name: 'app',
  watch:{
    $route:{
      handler({path}){

        if(/home|follow|column/.test(path)){
          this.$root.$data.bNav=true;
          this.$root.$data.bFoot=true;
        }
        if(/user/.test(path)){
          this.$root.$data.bNav=false;
          this.$root.$data.bFoot=true;
        }
        if(/login|reg|detail/.test(path)){
          this.$root.$data.bNav=false;
          this.$root.$data.bFoot=true;
        }

      },
      immediate:true
    }
  },
  components: {
    Loading,Header,Footer
  },
  
}
</script>

<style>

</style>
