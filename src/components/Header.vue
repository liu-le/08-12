<template>
   <div id="top">
		<a id="logo" href="index.html" style="left:-5px;"><img src="../assets/images/y_logomain.jpg" align="top"></a>
		<a id="title">旅游网</a>
		<span id="list">
		   <router-link to="/login"><img src="../assets/images/userlogin.png" align="top"></router-link>
		</span>
	</div>
</template>
<style scoped>
   #top{width: 100%;
    height: 40px;
    position: relative;
    left: 0px;
    top: 0px;
    background-color: #ffffff;
    text-align: center;
    line-height: 40px;
    color: #FF5400;
    font-size: 14px;
    font-family: 'microsoft yahei',Verdana,Arial,Helvetica,sans-serif;
    z-index: 4;
    border-bottom: 1px solid #cccccc;} 
    #list {
    position: absolute;
    height: 24px;
    top: 5px;
    right: 10px;
    z-index: 3;
    color: #FF5400;
    text-decoration: none;
    line-height: 24px;
}
#title {
    position: absolute;
    width: 100%;
    height: 30px;
    line-height: 30px;
    top: 5px;
    left: 0px;
    text-align: center;
    z-index: 2;
}

#logo img {
    height: 30px;
    margin-top: 5px;
    padding: 0px;
    cursor: pointer;
    float:left;
}
img {
    border: none;
}
</style>
<script>
export default {
    

}
</script>
