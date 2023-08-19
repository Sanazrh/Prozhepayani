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
  computed:{
        film(){
            return this.$store.state.film
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