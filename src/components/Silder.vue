<template>
  <div class="box banner1">
    <div class="imgbox">
      <router-link
        tag="li"
        v-for="item of banner"
        :key="item._id"
        :to=" '/detail/'+item._id + '?dataName=banner' "
      >
        <img alt="自驾超值套票" :src="item.img" />
      </router-link>
    </div>

    <div class="btns">
      <input type="button" id="left" value="<<<" />
      <input type="button" id="right" value=">>>" />
    </div>
  </div>
</template>


<script>
import move from "../assets/js/move";
// console.log(move)
export default {
  props: ["banner"],
  updated() {
    function Banner() {
      //			1.选元素
      this.img = document.querySelectorAll(".imgbox img");
      this.left = document.getElementById("left");
      this.right = document.getElementById("right");
      // console.log(this.left);
      // console.log(this.img);
      // console.log(this.right);
      //			假设当前进来的是第0张
      this.index = 0;
      //			那么刚才走的是最后一张（length-1）
      this.iPrev = this.img.length - 1;

      //			2.绑定事件
      this.init();
    }
    Banner.prototype.init = function() {
      var that = this;
      this.left.onclick = function() {
        //				3.计算索引
        that.changeIndex(-1);
      };
      this.right.onclick = function() {
        //				3.计算索引
        that.changeIndex(1);
      };
    };
    Banner.prototype.changeIndex = function(type) {
      if (type == -1) {
        //				左按钮
        //				自行填充代码
        if (this.index == 0) {
          this.index = this.img.length - 1;
          this.iPrev = 0;
        } else {
          this.index--;
          this.iPrev = this.index + 1;
        }
      } else {
        //				右按钮
        if (this.index == this.img.length - 1) {
          this.index = 0;
          this.iPrev = this.img.length - 1;
        } else {
          this.index++;
          this.iPrev = this.index - 1;
        }
      }
      //			4.根据索引显示图片
      this.display(type);
    };
    Banner.prototype.display = function(type) {
      // console.log(this.iPrev, this.index);
      //			要走的
      // console.log(this.iPrev)
      this.img[this.iPrev].style.left = 0;
      move(this.img[this.iPrev], { left: -500 * type });

      //			要进来的
      this.img[this.index].style.left = 500 * type + "px";
      move(this.img[this.index], { left: 0 });
    };
    // setTimeout(()=>{

    //   },0)
    new Banner();
  }
};
</script>

<style>
.box {
  width: 500px;
  position: relative;
  height: 264px;
  margin: 20px auto;
  overflow: hidden;
}

.box img {
  width: 500px;
  height: 264px;
  position: absolute;
  left: 500px;
  top: 0;
}
.box img:nth-child(1) {
  left: 0;
}
.box .imgbox {
  height: 264px;
}
.box .btns {
}
.btns input {
  position: absolute;
  top: 120px;
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(200, 200, 200, 0.6);
  color: #fff;
}
#left {
  left: 0;
}
#right {
  right: 0;
}
</style>


