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
          <a href="">
            <i class="fa fa-user" aria-hidden="true"></i>
          </a>
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

          <div class="btn-box">
            <router-link to="/input" class="btn-1">ورود/ثبت نام</router-link>
            <a href="" class="btn-2">
              ادامه مطلب
            </a>
          </div>
        </div>
        <div class="img-box">
          <div class="carousel slide slider_image_carousel carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="src/assets/images/slider-img.jpg" alt="">
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

  <section class="help_section layout_padding2">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="detail-box">
            <div class="heading_container">
              <h2>
                فیلم‌های آمورشی
              </h2>
            </div>
            <br>
            <p>
                البلاتن
            </p>
            <br>
            <br>
            <br>
            <br>
            <br>
            <router-link to="/films"> مشاوره فیلم‌ها</router-link>
          </div>
        </div>
        <div class="col-md-6">
          <div class="img-box">
            <img src="src/assets/images/help-img.jpg" alt="" />
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


  <!-- consultans section -->

  <section class="wedo_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2>
          مشاوران مجموعه
        </h2>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-3">
          <div class="box pr-0 pr-lg-5">
            <div class="img-box">
              <img src="src/assets/images/wedo-img2.png" alt="">
            </div>
            <div class="detail-box">
              <h5>
                
              </h5>
              <p>
                 
              </p>
              <a href="">
                ادامه مطلب
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="box pr-0 pr-lg-5">
            <div class="img-box">
              <img src="src/assets/images/wedo-img3.png" alt="">
            </div>
            <div class="detail-box">
              <h5>
                
              </h5>
              <p>
                
              </p>
              <a href="">
                ادامه مطلب
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="box pr-0 pr-lg-5">
            <div class="img-box">
              <img src="src/assets/images/wedo-img4.png" alt="">
            </div>
            <div class="detail-box">
              <h5>
                
              </h5>
              <p>
                
              </p>
              <a href="">
                ادامه مطلب
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="box pr-0 pr-lg-5">
            <div class="img-box">
              <img src="src/assets/images/wedo-img1.png" alt="">
            </div>
            <div class="detail-box">
              <h5>
                
              </h5>
              <p>
                
              </p>
              <a href="">
                ادامه مطلب
              </a>
            </div>
          </div>
        </div>
      </div>
      <br>
      <br>
      <br>
      <router-link to="/consultant" class="edame"> موارد بیشتر</router-link>
    </div>
  </section>

  <!-- end consultans section -->

  <!-- news section -->

  <section class="news_section layout_padding-bottom">
    <div class="container">
      <div class="heading_container">
        <h2>
          آخرین اخبار
        </h2>
        <p>
          اخبار مارو دنبال کنید و در جریان آخرین رویداد ها و سمینار های ما قرار بگیرید
        </p>
      </div>
      <div class="row">
        <div class="col-lg-6 ">
          <div class="detail_container">
            <div class="detail-box">
              <h4>
                آخرین خبر
              </h4>
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
                روز شمار معکوس سمینار بعدی ما - تا ۳۰ روز دیگر فرصت دارید تا در سمینار بعدی مرکز مشاوره ما ثبت نام کنید همین حالا تا فرصت هست اقدام کنید !! سمینار بعدی ما رایگان است و هیج مبلغی برای شرکت در سمینار از شما گرفته نخواهد شد - موضوع سمینار : روش های نوین پرورش فرزند.
              </p>
            </div>
            <div class="btn-box">
              <a href="">
                ادامه مطلب
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-6 ">
          <div class="img-box">
            <img src="src/assets/images/news-img.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- end news section -->


  <!-- client section -->

  <section class="client_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2>
          نظرات مراجعین
        </h2>
      </div>
      <div class="carousel-wrap ">
        <div class="owl-carousel">
          <div class="item">
            <div class="box">
              <div class="client_id">
                <div class="img-box">
                  <img src="src/assets/images/client-img1.jpg" alt="">
                </div>
                <div class="client_detail">
                  <h5>
                    Jims thomas
                  </h5>
                  <h6>
                    hidden in the
                  </h6>
                </div>
              </div>
              <div class="client_text">
                <p>
                  If you are going to use a passage of Lorem Ipsum, you need to be sure th
                  ere isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
                </p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="box">
              <div class="client_id">
                <div class="img-box">
                  <img src="src/assets/images/client-img2.jpg" alt="">
                </div>
                <div class="client_detail">
                  <h5>
                    Thomas mor
                  </h5>
                  <h6>
                    Hidden
                  </h6>
                </div>
              </div>
              <div class="client_text">
                <p>
                  If you are going to use a passage of Lorem Ipsum, you need to be sure th
                  ere isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- end client section -->


  <!-- cooperation section -->

  <section class="contact_section layout_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="detail-box">
            <div class="heading_container">
              <h2>
                همکاری با ما
              </h2>
            </div>
            <p>
              در صورت تمایل برای همکاری با مجموعه اطلاعات و رزومه خود را ارسال کنید<br><br>امیدواریم شما نیز بخشی از مجموعه ما برای حال بهتر انسان‌ها باشید 
            </p>
            <router-link to="/cooperation"> ادامه مطلب</router-link>
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

  <!-- end cooperation section -->


  <app-info></app-info>
  <app-footer></app-footer>
  <slideshow></slideshow>
  </div>
</template>
<style>
  .edame{
    background-color:#C4D7B2;
    color:white;
  }
</style>