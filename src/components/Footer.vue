<template>
<div class="footer">
<div id="footer"><a href="index.html" style="color: #FF5400;">站长素材 sc.chinaz.com</a></div>
  <div
    id="menu"
    style="position:fixed;bottom:0px;width:100%;height:44px;line-height:44px;z-index:999;background:url(images/menubg.png) repeat-x;"
  >
    <ul style="margin:0 auto;list-style-type:none;width:100%;max-width:500px;height:100%;">
      <li>
        <img class="img_front" src="../assets/images/front.png" />
        <div class="menu_li">
          <img src="../assets/images/coin.png" width="10" />&nbsp;小二推荐
        </div>
        <img class="line" src="../assets/images/line.png" width="1" />

        <span style="background-size: 100%; bottom: -195px;">
          <img src="../assets/images/navbg4.png" width="100%" />

          <div style="position:absolute;top:0px;left:0px;">
            <a href="onsal_20.html">每日推荐</a>

            <a href="onsale_2.html">清仓秒杀</a>

            <a href="onsale.html">限时特卖</a>

            <a href="hot.html">当季热点</a>
          </div>
        </span>
      </li>

      <li>
        <img class="img_front" src="../assets/images/front.png" />
        <div class="menu_li">
          <img src="../assets/images/coin.png" width="15" />&nbsp;旅游超市
        </div>
        <img class="line" src="../assets/images/line.png" width="1" />

        <span style="background-size: 10%; bottom: -195px;">
          <img src="../assets/images/navbg4.png" width="100%" />

          <div style="position:absolute;top:0px;left:0px;">
            <a href="list.jsp">目的地</a>

            <a href="rank.html">排行榜</a>

            <a href="search.html">旅游搜索</a>

            <a href="javascript:beginTalk()">在线咨询</a>
          </div>
        </span>
      </li>

      <li>
        <img class="img_front" src="../assets/images/front.png" />
        <div class="menu_li">
          <img src="../assets/images/coin.png" width="10" />&nbsp;订单处理
        </div>

        <span style="background-size: 100%; bottom: -237px;">
          <img src="../assets/images/navbg5.png" width="100%" />

          <div style="position:absolute;top:0px;left:0px;">
            <a href="#">我的订单</a>

            <a href="#">会员资料</a>

            <a href="#">关联微信</a>

            <a href="#">联系我们</a>

            <a href="#">进入主站</a>
          </div>
        </span>
      </li>
    </ul>
  </div>
  </div>
</template>
<style>
#footer {
    float: left;
    width: 100%;
    height: 40px;
    position: relative;
    left: 0px;
    top: 0px;
    background-color: #ffffff;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    font-family: 'microsoft yahei',Verdana,Arial,Helvetica,sans-serif;
    margin-bottom: 44px;
}


#menu ul li{float:left;width:33.3%;height:100%;text-align:center;position:relative;font-size:14px;}

#menu ul li .line{position:absolute;top:0px;right:0px;z-index:30;}

#menu ul li .menu_li{position:absolute;top:0px;left:0px;z-index:20;width:100%;height:100%;color:#454545;background:url(../assets/images/menubg.png) repeat-x;}

#menu ul li .img_front{position:absolute;top:0px;left:0px;z-index:30;width:100%;height:100%;}

#menu ul li .img_front img{width:100%;height:100%;}

#menu ul li span{position:absolute;bottom:-300px;left:50%;width:104px;margin-left:-52px;height:auto;text-align:center;z-index:10;}

#menu ul li span a{float:left;width:100%;height:43px;line-height:43px;color:#454545;text-decoration:none;}


</style>
<script>
import $ from 'jquery'
export default {
  mounted(){
    

function beginTalk() {

	var t = window.location.toString();

	var newT = t.replace(new RegExp("&", "gm"), "<and>"); 

	window.open("italk/index_m.jsp@fs_AccessAddress=" + newT, "talk");

}

window.onload = function(){

	$('#menu ul li').each(function(j){

		$('#menu ul li').eq(j).removeClass("on");

		$('#menu ul li span').eq(j).animate({bottom:-$('#menu ul li span').eq(j).height()},100);

	});

}

$('#menu ul li').each(function(i){

	$(this).click(function(){

		if($(this).attr("class")!="on"){

			$('#menu ul .on span').animate({bottom:-$('#menu ul .on span').height()},200);

			$('#menu ul .on').removeClass("on");

			$(this).addClass("on");

			$('#menu ul li span').eq(i).animate({bottom:35},200);

			$('.footer_front').show();

		}else{

			$('#menu ul li span').eq(i).animate({bottom:-$('#menu ul li span').eq(i).height()},200);

			$(this).removeClass("on");

			$('.footer_front').hide();

		}

	});

});

$('.footer_front').click(function(){

	$('#menu ul .on span').animate({bottom:-$('#menu ul .on span').height()},200);

	$('#menu ul .on').removeClass("on");

	$(this).hide();

});


  }
}
</script>
