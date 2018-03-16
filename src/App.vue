<template>
  <div id="app">
    <div class="title">
    </div>
    <router-view/>
    <div class="footer">
     <ul class="meui_flex_wrap footerul">
       <li class="meui_flex_con ">
         <router-link :to="'footer1'">
           <span class="footer1"></span>
           <span class="title">首页</span>
         </router-link>
       </li>
       <li class="meui_flex_con">
         <router-link :to="'footer2'">
           <span class="footer2"></span>
           <span class="title">客户名片</span>
         </router-link>
       </li>
       <li class="meui_flex_con">
         <router-link :to="'footer3'" >
           <span class="footer3"></span>
           <span class="title">我的</span>
         </router-link>
       </li>
     </ul>
    </div>
  </div>

</template>

<script>
import './css/meui.css'
export default {
  name: 'App'
}

</script>

<style>
html,body {
  height: 100%;
  width: 100%;
  background: #f0f0f0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

a{
  color: #757575;
  font-size: 14px;
}
a:active {
  color: #287ace;
  background-color: #fff;
}
a.active {
  color: #287ace;
}
/*.title {
  color: #757575;
}*/
.active > .footer1 {
  display: block;
  width: 100%;
  height: 24px;
  color: #287ace;
  margin-top: 10px;
  background: url(./images/111_03.png) center center no-repeat;
  background-size: 24px 24px;
}
.active > .footer2 {
  display: block;
  width: 100%;
  height: 24px;
  color: #287ace;
  margin-top: 10px;
  background: url(./images/111_07.png) center center no-repeat;
  background-size: 24px 24px;
}
.active > .footer3{
  display: block;
  width: 100%;
  height: 24px;
  color: #287ace;
  margin-top: 10px;
  background: url(./images/111_09.png) center center no-repeat;
  background-size: 24px 24px;
}
.footer1 {
  display: block;
  width: 100%;
  height: 24px;
  margin-top: 10px;
  background: url(./images/112_03.png) center center no-repeat;
  background-size: 24px 24px;
}
.footer2 {
  display: block;
  width: 100%;
  height: 24px;
  margin-top: 10px;
  background: url(./images/112_07.png) center center no-repeat;
  background-size: 24px 24px;
}
.footer3 {
  display: block;
  width: 100%;
  height: 24px;
  margin-top: 10px;
  background: url(./images/112_09.png) center center no-repeat;
  background-size: 24px 24px;
}
.footerul {
   width: 100%;
   height: 60px;
   /*line-height: 60px;*/
   background: #fff;
   color: #757575;
   position: fixed;
   bottom:0;
   border-top: 1px solid #f0f0f0;
}
.footerul > li {
  text-align: center;
  color: #757575;

}
</style>
