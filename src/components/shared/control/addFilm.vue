<template>
    <div>
        <div class="col-md-3 borderr" v-if="!f">
            <p> موضوع فیلم را وارد کنید</p>
            <input type="text" v-model="title" class="form-control borderr">
            <br>
            <br>
            <a  class="btn btn-block btn-success">ساختن</a>
            <br>
            <div v-for="filmss in fillm">
            <br>
              <br>
              <h4>
                موضوع:{{filmss.name}}
              </h4>
            </div>
            
        </div>
    </div>
</template>

<script>
export default{
data(){
    return{
        fillm:[
            {name:'آرامش ذهن',timee:'8:00',caption:'6 تکنیک ساده برای آرام کردن ذهن',doctor:'لیلا جبلی',img:"src/assets/images/aramesh.jpg"},
            {name:'خود را فراموش نکنید',timee:'27:53',caption:'آثار خود فراموشی و درمان آن',doctor:'لیلا جبلی',img:"src/assets/images/faramosh.jpg"},
            {name:'انگیزه بی‌نهایت',timee:'23:03',caption:'راه‌های افزایش انگیزه در زندگی',doctor:'حمید احدی',img:"src/assets/images/angize.jpg"},
            {name:'خیانت',timee:'19:24',caption:'10دلیل روانشناسی خیانت',doctor:'آرش رستمی',img:"src/assets/images/eshq_khiant.jpg"},
            {name:'زمان طلایی تحصیل',timee:'15:36',caption:'بهترین زمان برای مطالعه چه موقعی است؟',doctor:'سارا کمالی ',img:"src/assets/images/tahsil.jpg"},
            {name:' اسکیزوفرنی',timee:'15:36',caption:'آشنایی با علائم اسکیزوفرنی',doctor:'لیلا جبلی',img:"src/assets/images/skizoferni.jpg"}
        ],
        title:" ",
        f:false,
    }
}
};
</script>