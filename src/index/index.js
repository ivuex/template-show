import './.stable/index.scss';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import icons from 'glyphicons'
import Vue from 'vue';
import index from './index.vue';
new Vue({
    el: '#index',
    render: h=>h(index),
}); 
