<template>
    <div>
      <app-header></app-header>
      <div class=" wedo_section layout_padding">
      <div class="container">
        <div class="films">
          <div class="childFilm" v-for="consultan in consultans">
            <div class="detail-box " >
              <img v-bind:src="consultan.img" alt="" />
              <br>
              <br>
              <h4>
                {{consultan.name}}
              </h4>
              <p>
                 حوضه درمان:{{consultan.expertise}}
              </p>
              <a href="">
                مشاهده
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-info></app-info>
    <app-footer></app-footer>
    </div>
</template>

<script>
export default{
  data(){
    return{
      consultans:[
        {name:'شکیباقدس',expertise:'روانشناسی کودک',img:"src/assets/images/moshaver1.png"},
        {name:'حمید احدی',expertise:'روانشناسی بالینی',img:"src/assets/images/moshaver2.png"},
        {name:'لیلا جبلی',expertise:'روانشناس ارشد',img:"src/assets/images/moshaver3.jpg"},
        {name:'حمیده نقیبی',expertise:'روانشناسی بالینی',img:"src/assets/images/moshaver5.jpg"},
        {name:'سارا کمالی ',expertise:'روانشناس ارشد',img:"src/assets/images/moshaver6.jpg"},
        {name:'آرش رستمی',expertise:'روانشناسی روابط بین فردی',img:"src/assets/images/moshaver4.jpg"}
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