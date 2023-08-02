import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {Routes} from './routes.js'


import AppAbout from './components/shared/AppAbout.vue'
import AppFooter from './components/shared/AppFooter.vue'
import AppInfo from './components/shared/AppInfo.vue'
import AppInput from './components/shared/input.vue'
import AppMenu from './components/shared/AppMenu.vue'
import AppCoop from './components/shared/cooperation.vue'
import AppHome from './components/shared/AppHome.vue'
import AppFilm from './components/shared/films.vue'
import AppSlideshow from './components/shared/slideshow.vue'
import AppSlideshow2 from './components/shared/slideshowchild.vue'
import AppHeader from './components/header.vue'

Vue.component('app-about',AppAbout);
Vue.component('app-footer',AppFooter);
Vue.component('app-info',AppInfo);
Vue.component('app-film',AppFilm);
Vue.component('app-input',AppInput);
Vue.component('app-menu',AppMenu);
Vue.component('app-header',AppHeader);
Vue.component('app-home',AppHome);
Vue.component('slideshow',AppSlideshow);
Vue.component('CarouselSlide',AppSlideshow2);
Vue.component('app-cooperation',AppCoop);

Vue.use(VueRouter);

const router=new VueRouter({
  routes:Routes,
  mode:'history'
})

Vue.directive('custom',{
  bind(el,binding,vnode){
    var delay=0;
    if(binding.modifiers['delayed']){
      delay=3000;
    }
   setInterval(()=>{
    if(binding.arg==='textcolor'){
      el.style.color=binding.value;
    }
   },delay);
    el.style.background='gray';
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
