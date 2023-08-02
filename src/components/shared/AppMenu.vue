<template>
    <div class="overlay-content">
    <router-view></router-view>
    <router-link to="/">خانه</router-link>
    <router-link to="/about">درباره ما</router-link>
    <a class="" href="about.html">
      نوبت دهی
    </a>
    <a class="" href="service.html">
      سمینار ها
    </a>
    <a class="" href="testimonial.html">
      فیلم‌های آمورشی
    </a>
    <router-link to="/cooperation">همکاری با ما</router-link>
    <a class="" href="contact.html">
      تماس باما
    </a>
    <br>
    <br>
    </div>
</template>

<script>
export default{
};
</script>