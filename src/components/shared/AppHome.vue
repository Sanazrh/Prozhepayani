<template>
  <div>
    <div class="hero_area">
    <!-- header section strats -->
    <header class="header_section">
      <nav class="navbar navbar-expand-lg custom_nav-container">
        <div class="custom_menu-btn">
          <button onclick="openNav()">
            <span class="s-1"> </span>
            <span class="s-2"> </span>
            <span class="s-3"> </span>
          </button>
        </div>
        <div id="myNav" class="overlay">
          <div class="menu_btn-style ">
            <button onclick="closeNav()">
              <span class="s-1"> </span>
              <span class="s-2"> </span>
              <span class="s-3"> </span>
            </button>
          </div>
          <app-menu></app-menu>
        </div>
        <a class="navbar-brand" href="index.html">
          <span>
            مرکز مشاوره
          </span>
        </a>
        <div class="user_option">
          <form class="form-inline">
            <button class="btn  nav_search-btn" type="submit">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
          <router-link to="/input">
            <i class="fa fa-user" aria-hidden="true"></i>
          </router-link>
        </div>
      </nav>
    </header>
    <!-- end header section -->
    <!-- slider section -->
    <section class="slider_section position-relative">
      <div class="box">
        <div class="detail-box">
          <a class="navbar-brand" href="index.html">
            <span>
              مرکز مشاوره
            </span>
          </a>
          <div class="carousel slide slider_text_carousel" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="heading_box">
                  <h1>
                    <span>
                      ما
                    </span>
                    <span>
                      در
                    </span>
                    <span>
                      لحظات
                    </span>
                    <span>
                      سخت
                    </span>
                    <span>
                      کنارتونیم !
                    </span>
                  </h1>
                </div>
              </div>
              <div class="carousel-item">
                <div class="heading_box">
                  <h1>
                    <span>
                      ما
                    </span>
                    <span>
                      در
                    </span>
                    <span>
                      لحظات
                    </span>
                    <span>
                      سخت
                    </span>
                    <span>
                      کنارتونیم !
                    </span>
                  </h1>
                </div>
              </div>
              <div class="carousel-item">
                <div class="heading_box">
                  <h1>
                    <span>
                      ما
                    </span>
                    <span>
                      در
                    </span>
                    <span>
                      لحظات
                    </span>
                    <span>
                      سخت
                    </span>
                    <span>
                      کنارتونیم !
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div class="btn-box ff">
            <router-link to="/input" class="btn-1">ورود/ثبت نام</router-link>
            <router-link to="/reservation" class="btn-1"> نوبت دهی</router-link>
          </div>
        </div>
        <div class="img-box">
          <div class="carousel slide slider_image_carousel carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="src/assets/images/about-img.jpg" alt="">
              </div>
              <div class="carousel-item">
                <img src="src/assets/images/slider-img2.jpg" alt="">
              </div>
              <div class="carousel-item">
                <img src="src/assets/images/slider-img3.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end slider section -->
  </div>

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
              ما اینجاییم تا سلامت روح و روان شما رو تضمین کنیم ! تیم متخصص مرکز ما آماده ارائه انواع خدمات از قبیل مشاوره تحصیلی و خانواده و ...
            </p>
            <router-link to="/about"> ادامه مطلب</router-link>
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
    </div>
  </section>

  <!-- end about section -->

  <!-- films section -->

  <section class="help_section layout_padding2 news-section ">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
        <div class="heading_container">
              <h2>
                فیلم‌های آمورشی
              </h2>
            </div>
          <div class="detail-container">
            <div class="detail-box">
            <br>
            <p>
                شما می‌توانید بر حسب نیاز روزانه خود از فیلم‌های آمورشی تهیه شده توسط مشاوران و روانشناسان مرکز تهیه شده‌اند استفاده کنید.
            </p>
            <br>
            <br>
            <br>
            <br>
            <br>
            <router-link to="/films"> مشاوره فیلم‌ها</router-link>
          </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="img-box">
            <img src="src/assets/images/learn.png" alt="" />
            <div class="play_btn">
              <button>
                <i class="fa fa-play" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- end films section -->
<br>
<br>
<br>

  <!-- consultants section -->

 <section class="news_section layout_padding-bottom">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 ">
        <div class="heading_container">
        <h2>
          مشاوران و روانشناسان مجموعه
        </h2>
      </div>
          <div class="detail_container">
            <div class="detail-box">
              <p>
               برای مشاهده مشاوران و روانشناسان مجموعه و حوضه کاری آنها کلیک کنید.
            </p>
            </div>
            <div class="btn-box">
              <router-link to="/consultant"> مشاهده</router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-6 ">
          <div class="img-box">
            <img class="im" src="src/assets/images/moshaver3.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end consultants section -->

  <!-- seminar section -->

  <section class="news_section layout_padding-bottom n">
    <div class="container">
      <div class="heading_container">
        <h2>
          سمینار‌ها
        </h2>
      </div>
      <div class="row">
        <div class="col-lg-6 ">
          <div class="detail_container">
            <div class="detail-box">
              <div class="news_social">
                <a href="">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                  <span>
                    لایک
                  </span>
                </a>
                <a href="">
                  <i class="fa fa-comment" aria-hidden="true"></i>
                  <span>
                    نظر
                  </span>
                </a>
                <a href="">
                  <i class="fa fa-share-alt" aria-hidden="true"></i>
                  <span>
                    اشتراک گذاری
                  </span>
                </a>
              </div>
              <p>
                روز شمار معکوس سمینار بعدی ما - تا ۳۰ روز دیگر فرصت دارید تا در سمینار بعدی مرکز مشاوره ما ثبت نام کنید همین حالا تا فرصت هست اقدام کنید !!  - موضوع سمینار : روش های نوین پرورش فرزند.
              </p>
            </div>
            <div class="btn-box">
              <router-link to="/seminar"> مشاهده</router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-6 ">
          <div class="img-box">
            <img class="im" src="src/assets/images/seminar.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- end seminar section -->
<br>
<br>
<br>
  <!-- cooperation section -->

  <section class="news_section layout_padding-bottom">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 ">
        <div class="heading_container">
        <h2>
          همکاری با ما
        </h2>
      </div>
          <div class="detail_container">
            <div class="detail-box">
              <p>
              در صورت تمایل برای همکاری با مجموعه اطلاعات و رزومه خود را ارسال کنید<br><br>امیدواریم شما نیز بخشی از مجموعه ما برای حال بهتر انسان‌ها باشید 
            </p>
            </div>
            <div class="btn-box">
              <router-link to="/cooperation"> همکاری</router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-6 ">
          <div class="img-box">
            <img class="im" src="src/assets/images/about-img.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end cooperation section -->

  <app-info></app-info>
  <app-footer></app-footer>
  <RouterLink to="/control" class="nav-link">خانه</RouterLink>
  
  </div>
</template>
<style>
  .edame{
    background-color:#C4D7B2;
    color:white;
  }
  .ff{
    color:black !import;
  }
  .im{
    padding-left:30px;
  }
  .n{
    background-color:#e9e9e9;
    padding-top:20px;
  }
</style>