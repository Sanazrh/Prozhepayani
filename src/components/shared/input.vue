<template>
  <div>
<app-header></app-header>
      <section class="contact_section layout_padding " id="app">
        <div class="container-fluid">
          <div class="row tt">
            <div class="col-md-5 col-lg-4 offset-md-1 offset-lg-2">
              <div class="form_container">
                <transition enter-active-class="animated fadeInLeft" >
                  <div class="heading_container" v-if="showMe" >
                  <h2>ثبت نام کاربـر جدیـد</h2>
                  <form action="#">
                    <input type="text" placeholder="نام و نام خوانوادگی" />
                    <input type="text" placeholder="شماره تماس " />
                    <input type="email" placeholder="آدرس ایمیـل" />
				            <input type="password" placeholder="رمـز عبـور" />
				            <span>
                      <button type="button" class="btn btn-default" v-on:click="showMe=!showMe">وارد شوید</button>
				            </span>
                    <RouterLink to='/register' type="button" class="btn btn-default">ثبت نام</RouterLink>
                  </form>
                  </div>
                </transition>
               <transition enter-active-class="animated fadeInLeft" leave-active-class="animated fadeInRight">
                 <div class="heading_container" v-if="!showMe">
                  <h2>ورود به حساب کاربـری </h2>
                  <form action="#">
                    <input type="text" placeholder="شماره تماس" v-model="UserName" ref="UserNameInput" id="UserNameInput"/>
                    <input type="email" placeholder="رمـز عبـور" />
                    <br>
                    <span>
                      <button type="button" class="btn btn-default" v-on:click="showMe=!showMe">ثبت نام </button>
                    </span>
                    <router-link to="/contact" type="button" class="btn btn-default" v-on:click.prevent="CheckUserName">ورود</router-link>
                  </form>
                </div>
               </transition>
              </div>
            </div>
             <div>
                <img src="src/assets/images/input.jpg" alt="" />
               </div>
          </div>
        </div>
    </section>
    <app-info></app-info>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default{
    data: function () {
        return {
            showMe: true
        };
    },
    components: { RouterLink }
};
</script>
<style>
  
</style>