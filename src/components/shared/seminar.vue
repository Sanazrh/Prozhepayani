<template>
    <div>
        <app-header></app-header>
        <br>
        <br>
        <br>
        <div>
            <section class="news_section layout_padding-bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 ">
                            <div class="heading_container">
                                <h2>
                                    تاثیر روابط در روان درمانی
                                </h2>
                            </div>
                            <div class="detail_container">
                                <div class="detail-box">
                                    <p>سخنران: لیلا جبلی </p>
                                    <p>  تاریخ:  29/5/1402  </p>
                                    <p>ساعت برگزاری:  17:00</p>
                                    <p>ظرفیت باقیمانده:  {{pr}} نفر</p>
                                    <p>هزینه سمینار:  120,000 تومان</p>
                                    <div class="btn-box bordr">
                                        <p>جهت رزرو سمینار اطلاعات خواسته شده را وارد و هزینه آن را پرداخت کنید.</p>
                                        <label class="cd-label" for="cd-name"> نام و نام خانوادگی </label>
			                            <input class="user" type="text" name="cd-name" id="cd-name" placeholder="نام و نام خانوادگی" required>
                                        <br>
                                        <label class="cd-label" for="cd-name">شماره تماس   </label>
			                            <input class="user" type="number" name="cd-name" id="cd-num" placeholder="شماره تماس" required>
                                        <br>
                                        <br>
                                        <router-link to="/payment" v-on:click="decrease"> پرداخت</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 ">
                            <div class="img-box">
                                <img class="im" src="src/assets/images/seminar2.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <app-info></app-info>
        <app-footer></app-footer>
    </div>
</template>

<script>
export default{
    data(){
        return{
            
        }
    },
    computed:{
        pr(){
            return this.$store.state.pr
        }
    },
    methods:{
        decrease(){
            this.$store.state.pr--;
        }
    }
};
</script>
<style>
.bordr{
      box-shadow:0 0 4px 0 rgba(0,0,0,0.2);
      padding:10px;
}
</style>