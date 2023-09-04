import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {Routes} from './routes.js'
import {store} from './components/store/store.js'
import VueSplide from '@splidejs/vue-splide';




import AppAbout from './components/shared/AppAbout.vue'
import AppFooter from './components/shared/AppFooter.vue'
import AppInfo from './components/shared/AppInfo.vue'
import AppInput from './components/shared/input.vue'
import AppMenu from './components/shared/AppMenu.vue'
import AppCoop from './components/shared/cooperation.vue'
import AppHome from './components/shared/AppHome.vue'
import AppFilm from './components/shared/films.vue'
import AppConsultant from './components/shared/consultants.vue'
import AppReservation from './components/shared/reservation.vue'
import AppSeminar from './components/shared/seminar.vue'
import AppPayment from './components/shared/payment.vue'
import AppSlideshow from './components/shared/slideshow.vue'
import AppDashboard from './components/shared/dashboard.vue'
import AppContact from './components/shared/contactPage.vue'
import AppRegister from './components/shared/register.vue'
import AppControl from './components/shared/control-panel.vue'
import AppHeader from './components/header.vue'
import callUs from './components/shared/callUs.vue'

import ConHeader from './components/shared/control/main-header.vue'
import ConSidebar from './components/shared/control/main-sidebar.vue'
import ConBox from './components/shared/control/small-box.vue'
import ConChat from './components/shared/control/direct-chat.vue'
import ConCseminar from './components/shared/control/creatSeminar.vue'
import ConTodo from './components/shared/control/todo.vue'
import Conafilm from './components/shared/control/addFilm.vue'
import editFilm from './components/shared/control/editFilm.vue'
import massageList from './components/shared/control/massageList.vue'
import fff from './components/shared/control/cooperationList.vue'
import editAdmin from './components/shared/control/editAdmin.vue'
import editConsultant from './components/shared/control/editConsultant.vue'
import reservationList from './components/shared/control/reservationList.vue'
import chartseminar from './components/shared/control/chartseminar.vue'
import chartreserve from './components/shared/control/chartreserve.vue'


Vue.component('app-about',AppAbout);
Vue.component('app-footer',AppFooter);
Vue.component('app-seminar',AppSeminar);
Vue.component('app-reservation',AppReservation);
Vue.component('app-control',AppControl);
Vue.component('app-consultant',AppConsultant);
Vue.component('app-info',AppInfo);
Vue.component('app-film',AppFilm);
Vue.component('app-input',AppInput);
Vue.component('app-menu',AppMenu);
Vue.component('app-header',AppHeader);
Vue.component('app-home',AppHome);
Vue.component('slideshow',AppSlideshow);
Vue.component('app-cooperation',AppCoop);
Vue.component('app-contact',AppContact);
Vue.component('app-payment',AppPayment);
Vue.component('app-register',AppRegister);
Vue.component('app-dashboard',AppDashboard);
Vue.component('app-callus',callUs);

Vue.component('con-header',ConHeader);
Vue.component('con-sidebar',ConSidebar);
Vue.component('con-box',ConBox);
Vue.component('con-chat',ConChat);
Vue.component('con-cseminar',ConCseminar);
Vue.component('con-todo',ConTodo);
Vue.component('con-afilm',Conafilm);
Vue.component('con-editfilm',editFilm);
Vue.component('con-massageList',massageList);
Vue.component('con-cooperationList',fff);
Vue.component('con-editadmin',editAdmin);
Vue.component('con-editconsultant',editConsultant);
Vue.component('con-reservationList',reservationList);
Vue.component('con-chartseminar',chartseminar);
Vue.component('con-chartreserve',chartreserve);


Vue.use(VueRouter);
Vue.use(VueSplide);

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
  store,
  render: h => h(App)
})
