<template>
    <div>
      <app-header></app-header>
      <div class=" wedo_section layout_padding">
      <div class="container">
        <div class="films">
          <div class="childFilm" v-for="films in film">
            <div class="detail-box " >
              <img v-bind:src="films.img" alt="" />
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
        {name:'آرامش ذهن',timee:'26:00',caption:'بلاتننتالبیگ',doctor:'فهیمه رضایی',img:"src/assets/images/about-img.jpg"},
        {name:'خود را فراموش نکنید',timee:'7:53',caption:'بلاتننتالبیگ',doctor:'فهیمه رضایی',img:"src/assets/images/about-img.jpg"},
        {name:'انگیزه بی‌نهایت',timee:'23:03',caption:'بلاتننتالبیگ',doctor:'فهیمه رضایی',img:"src/assets/images/about-img.jpg"},
        {name:'عشق و خیانت',timee:'19:24',caption:'بلاتننتالبیگ',doctor:'فهیمه رضایی',img:"src/assets/images/about-img.jpg"},
        {name:'زمان طلایی تحصیل',timee:'15:36',caption:'بلاتننتالبیگ',doctor:'فهیمه رضایی',img:"src/assets/images/about-img.jpg"}
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