<template>
  <div class="detail">
    <div id="top">
      <a id="logo" href="index.html">
        <img src="../assets/images/home.png" style="padding:2px 3px;height:32px;" />
      </a>
      <a class="l-btn" id="title">{{le}}</a>
      <span id="list">
        <a href="javascript:window.history.back();">
          <!-- <a @click="goback"> -->
          <img src="../assets/images/goback.png" style="padding:8px 8px;height:28px" />
        </a>
        <router-link to="/login">
          <img src="../assets/images/userlogin.png" style="padding:10px 10px;height:28px" />
        </router-link>
      </span>
    </div>
    <div>
      <div class="tm_div" v-for="(item,index) of detail" :key="index">
        <div class="tm_pro">
          <router-link :to="`/detail/${item._id}`">
            <img :src="item.img" width="100%" />
          </router-link>

          <div class="tm_type">
            <a href="onsale_0.html"></a>
          </div>

          <div class="tm_title">
            <div class="tm_title_bg"></div>

            <div class="tm_title_con">
              <div class="tm_title_con_1">
                <a href="lvyoutuan_TR042774.html">{{item.title}}</a>
              </div>

              <div class="tm_title_con_2">
                <a href="lvyoutuan_TR042774.html">{{item.content}}</a>
              </div>
            </div>
          </div>
        </div>

        <div class="tm_price">
          <div class="tm_price_1">
            &nbsp;￥
            <font style="font-size:20px;">{{item.price}}</font>起
          </div>

          <div class="tm_price_2">
            <!-- <span class="servertime">{{item.time | dat}}</span> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.tm_div {
}
.tm_title_con {
  float: left;
  width: 100%;
  height: 100%;
  position: relative;
  bottom: 0px;
  left: 0px;
  z-index: 2;
  height: 78px;
  margin-top: -122px;
  background: rgba(15, 15, 15, 0.55);
}
.tm_title_con_1 a {
  color: #ff5400;
  text-decoration: none;
}
.tm_title_con_2 a {
  color: #ffffff;
  text-decoration: none;
}
.tm_price {
  float: left;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #d76b56;
  position: relative;
  top: -3px;
  color: #ffffff;
  text-align: left;
  margin-top: -40px;
}
.tm_price_1 {
  float: left;
  width: 32%;
}
.tm_price_2 {
  float: left;
  width: 67%;
  text-align: right;
}
#top {
  width: 100%;
  height: 41px;
  position: relative;
  left: 0rem;
  top: 0rem;
  background-color: #ffffff;
  text-align: center;
  line-height: 40px;
  color: #ff5400;
  font-size: 14px;
  font-family: "microsoft yahei", Verdana, Arial, Helvetica, sans-serif;
  z-index: 4;
  border-bottom: 1px solid #cccccc;
  display: flex;
  justify-content: center;
}
#logo {
  flex: 1;
  height: 32px;
  padding-top: 3px;
}
#title {
  flex: 8;
  color: #ff5400;
  /* font: 1rem/2.5rem "";
  height: 2.5rem; */
}
#list {
  flex: 1;
  display: flex;
  padding: 3px 2px;
  height: 40px;
}
</style>

<script>
import { mapGetters} from 'vuex';
export default {
  name:'Detail',
  // data() {
  //   return {
  //     list: [],
  //     detail: {
  //       le: ""
  //     }
  //   };
  // },
  computed:mapGetters(['detail']),
  created() {
    let id = this.$route.params.id;
    let dataName = this.$route.query.dataName;
    let liu = this.$route.query.liu;
    // console.log(liu)
    let le = this.$route.query.le;
    this.le = le;
    this.$store.dispatch({type:'UPDATA_DETAIL',payload:{liu:liu}})

  },
  // mounted() {
  //   console.log(this.liu)
  //   axios({
  //     url: `/api${this.liu}`
  //     // url:'/api/home?id=asdfsaf'
  //   }).then(res => {
  //     this.list = res.data.data;
  //     // console.log(this.list[0]);
  //   });
  // }
};
</script>
