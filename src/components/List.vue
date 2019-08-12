<template>
  <div
    id="menudiv"
    style="margin:0 auto;position:relative;width:100%;max-width:500px;height:auto;margin-top:0px;"
  >
    <div
      class="tm_div"
      style="float: left; width: 30.67%; height: 153px; margin-left: 2%; overflow: hidden; margin-top: 10px;"
      v-for="(item,index) in list"
      :key="index"
    >
      <router-link :to='`/detail/${item._id}?dataName=${dataName}&liu=${list[index].to}&le=${list[index].title}`'>
        <div class="mou">{{item.title}}</div>
        <img :src="item.img" style="position:relative;width:100%;top:0px;left:0px;" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list","dataName"]
};
</script>
<style scoped>
.swiper-main {
  width: 100%;
  height: 100%;
  position: relative;
}
.pagination1 {
  position: relative;
  z-index: 999;
  text-align: center;
  margin-top: -20px;
}
.tm_div {
  position: relative;
}
.mou {
  position: absolute;
  z-index: 22;
  color: cornsilk;
  font: 16px/1 "";
  left: 10px;
  top: 5px;
}
</style>