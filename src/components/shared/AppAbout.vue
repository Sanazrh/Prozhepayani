<template>
<div>
<app-header></app-header>
 <!-- about section -->

  <section class="about_section layout_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="detail-box">
            <div class="heading_container">
              <h2>
                درباره مرکز
              </h2>
            </div>
            <p>
              ما اینجاییم تا سلامت روح و روان شما رو تضمین کنیم !  <br> مرکز مشاوره ما با مجوز رسمی از سازمان نظام روانشناسی و مشاوره کشور و وزارت ورزش و جوانان مشغول به فعالیت است. مرکز ما، با هدف تخصصی نمودن امور مشاوره در حوزه‌های گوناگون مرتبط با زندگی فردی و اجتماعی مردم، به ارائه خدمات مشاوره‌ای روزآمد پرداخته است و افتخار دارد که مرکزی منحصر به فرد جهت ارائه این نوع خدمات را بنیان نهاده است.
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="img-box">
            <div class="stripe_design sd1"></div>
            <div class="stripe_design sd2"></div>
            <div class="stripe_design sd3"></div>
            <div class="stripe_design sd4"></div>
            <div class="stripe_design sd5"></div>
            <div class="stripe_design sd6"></div>
            <img src="src/assets/images/about-img.jpg" alt="" />
          </div>
        </div>
      </div>
      <br>
      <br>
      <br>
      <div class="row">
          <div class="col-sm-12 about-address">
            <address>
              <h5 class="location">
                اصفهان - خیابان حکیم نظامی
              </h5>
            </address>
          </div>
        </div>
        <br>
        <br>
        <br>
        <br>
        <div class="row">
          <div class="container">
            <div class="col-sm-12">
              <h2 class="title text-center">ما اینجاییم ... </h2>
              <br>
              <div class="contact-map">
                <img src="src/assets/images/location.png" alt="Map" class="image" />
              </div>
            </div>
          </div>
        </div>
    </div>
  </section>

  <!-- end about section -->
  <app-info></app-info>
  <app-footer></app-footer>

</div>
</template>
<style>
.image{
  width:100%;
}
.location{
  background-color:#A0C49D;
  color:white;
  border-radius:20px;
  width:40%;
  padding:15px;
  
}
</style>