<template>
  <!-- info section -->

  <section class="info_section layout_padding2">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="info_contact">
            <h4>
              آدرس
            </h4>
            <div class="contact_link_box">
              <a href="">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>
                  تلفن تماس ۰۱۲۳۴۵۶
                </span>
              </a>
              <a href="">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>
                  demo@gmail.com
                </span>
              </a>
            </div>
          </div>
          <div class="info_social">
            <a href="">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="info_link_box">
            <h4>
              منو
            </h4>
            <div class="info_links">
             <router-link to="/home">
                <img src="src/assets/images/nav-bullet.png" alt="">
                خانه
              </router-link>
              <router-link to="/about">
                <img src="src/assets/images/nav-bullet.png" alt="">
                درباره ما
              </router-link>
              <router-link to="/reservation">
                <img src="src/assets/images/nav-bullet.png" alt="">
                نوبت دهی
              </router-link>
              <router-link to="/seminar">
                <img src="src/assets/images/nav-bullet.png" alt="">
                 سمینار
              </router-link>
              <router-link to="/films">
                <img src="src/assets/images/nav-bullet.png" alt="">
                فیلم‌های آمورشی
              </router-link>
              <router-link to="/consultant">
                <img src="src/assets/images/nav-bullet.png" alt="">
                مشاوران
              </router-link>
              <router-link to="/cooperation">
                <img src="src/assets/images/nav-bullet.png" alt="">
                همکاری با ما
              </router-link>
              <router-link to="/about">
                <img src="src/assets/images/nav-bullet.png" alt="">
                تماس با ما
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="info_detail">
            <h4>
              مرکز مشاوره
            </h4>
            <p>
              ما اینجاییم تا سلامت روح و روان شما رو تضمین کنیم ! تیم متخصص مرکز ما آماده ارائه انواع خدمات از قبیل مشاوره تحصیلی و خانواده و ...
            </p>
          </div>
        </div>
      </div>
      
    </div>
  </section>

  <!-- end info section -->
</template>

<script>
export default{
};
</script>