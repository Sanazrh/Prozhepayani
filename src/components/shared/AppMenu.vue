<template>
    <div class="overlay-content">
    <router-view></router-view>
    <router-link to="/home">خانه</router-link>
    <router-link to="/about">درباره ما</router-link>
    <router-link to="/reservation"> نوبت دهی</router-link>
    <router-link to="/seminar">سمینار‌ها</router-link>
    <router-link to="/films"> فیلم‌های آمورشی</router-link>
    <router-link to="/consultant">مشاوران</router-link>
    <router-link to="/cooperation">همکاری با ما</router-link>
    <router-link to="/cooperation">تماس با ما</router-link>
    <br>
    <br>
    </div>
</template>

<script>
export default{
};
</script>