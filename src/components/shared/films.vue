<template>
    <div>
      <app-header></app-header>
      <div class=" wedo_section layout_padding">
      <div class="container">
        <div class="films">
          <div class="childFilm" v-for="films in film">
            <div class="detail-box " >
              <div>
                <img v-bind:src="films.img" alt="" width=800px height=250px />
              </div>
              <br>
              <br>
              <h4>
                موضوع:{{films.name}}
              </h4>
              <p>
                 توضیحات:{{films.caption}}
              </p>
              <p>
                سخنران:{{films.doctor}}
              </p>
              <p>
                مدت زمان:{{films.timee}}
              </p>
              <a href="">
                مشاهده
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
    </div>
</template>

<script>
export default{
  data(){
    return{
      film:[
        {name:'آرامش ذهن',timee:'8:00',caption:'6 تکنیک ساده برای آرام کردن ذهن',doctor:'لیلا جبلی',img:"src/assets/images/aramesh.jpg"},
        {name:'خود را فراموش نکنید',timee:'27:53',caption:'آثار خود فراموشی و درمان آن',doctor:'لیلا جبلی',img:"src/assets/images/faramosh.jpg"},
        {name:'انگیزه بی‌نهایت',timee:'23:03',caption:'راه‌های افزایش انگیزه در زندگی',doctor:'حمید احدی',img:"src/assets/images/angize.jpg"},
        {name:'خیانت',timee:'19:24',caption:'10دلیل روانشناسی خیانت',doctor:'آرش رستمی',img:"src/assets/images/eshq_khiant.jpg"},
        {name:'زمان طلایی تحصیل',timee:'15:36',caption:'بهترین زمان برای مطالعه چه موقعی است؟',doctor:'سارا کمالی ',img:"src/assets/images/tahsil.jpg"},
        {name:' اسکیزوفرنی',timee:'15:36',caption:'آشنایی با علائم اسکیزوفرنی',doctor:'لیلا جبلی',img:"src/assets/images/skizoferni.jpg"}
      ]
    }
  }
};
</script>
<style> 
.childFilm{
  width:30%;
  flex:30%;
  box-shadow:0 0 4px 0 rgba(0,0,0,0.2);
  padding:10px;
}
    .films{
      justify-content:space-between;
      display:flex;
      flex-flow:row wrap;
      width:100%;
      gap:11px;
    }
    img{
      width:100%
    }
    .films p{
      font-size:14px;
      margin-bottom:5px;
    }
    .films h4{
      font-size:16px;
    }
</style>