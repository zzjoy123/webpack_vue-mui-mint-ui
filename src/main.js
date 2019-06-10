import Vue from "vue";
import App from "./App.vue"
//mint-ui
import MintUI from 'mint-ui';
import "mint-ui/lib/style.css"
Vue.use(MintUI);
//mui
import "./lib/mui/css/mui.min.css"

var vm=new Vue({
    el:"#App",
    render:c => c (App),
})