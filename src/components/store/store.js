import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store =new Vuex.Store({
    state:{
        pr:30,
        consultans:[
            {name:'شکیباقدس',expertise:'روانشناسی کودک',img:"src/assets/images/moshaver1.png"},
            {name:'حمید احدی',expertise:'روانشناسی بالینی',img:"src/assets/images/moshaver2.png"},
            {name:'لیلا جبلی',expertise:'روانشناس ارشد',img:"src/assets/images/moshaver3.jpg"},
            {name:'حمیده نقیبی',expertise:'روانشناسی بالینی',img:"src/assets/images/moshaver5.jpg"},
            {name:'سارا کمالی ',expertise:' مشاور تحصیلی',img:"src/assets/images/moshaver6.jpg"},
            {name:'آرش رستمی',expertise:'روانشناسی روابط بین فردی',img:"src/assets/images/moshaver4.jpg"}
        ],
        film:[
            {name:'آرامش ذهن',timee:'8:00',caption:'6 تکنیک ساده برای آرام کردن ذهن',doctor:'لیلا جبلی',img:"src/assets/images/aramesh.jpg",id:1},
            {name:'خود را فراموش نکنید',timee:'27:53',caption:'آثار خود فراموشی و درمان آن',doctor:'لیلا جبلی',img:"src/assets/images/faramosh.jpg",id:2},
            {name:'انگیزه بی‌نهایت',timee:'23:03',caption:'راه‌های افزایش انگیزه در زندگی',doctor:'حمید احدی',img:"src/assets/images/angize.jpg",id:3},
            {name:'خیانت',timee:'19:24',caption:'10دلیل روانشناسی خیانت',doctor:'آرش رستمی',img:"src/assets/images/eshq_khiant.jpg",id:4},
            {name:'زمان طلایی تحصیل',timee:'15:36',caption:'بهترین زمان برای مطالعه چه موقعی است؟',doctor:'سارا کمالی ',img:"src/assets/images/tahsil.jpg",id:5},
            {name:' اسکیزوفرنی',timee:'15:36',caption:'آشنایی با علائم اسکیزوفرنی',doctor:'لیلا جبلی',img:"src/assets/images/skizoferni.jpg",id:6}
        ],
        times_morning:[
            {name:'10:00'},
            {name:'10:20'},
            {name:'10:40'},
            {name:'11:00'},
            {name:'11:20'},
            {name:'11:40'},
            {name:'12:00'}
          ],
          times_evening:[
            {name:'16:00'},
            {name:'16:20'},
            {name:'16:40'},
            {name:'17:00'},
            {name:'17:20'},
            {name:'17:40'},
            {name:'18:00'},
            {name:'18:20'},
            {name:'18:40'},
            {name:'19:00'}
          ],
           times_day:[
            {date:'14 مرداد',day:"شنبه"},
            {date:'15 مرداد',day:"یکشنبه"},
            {date:'16 مرداد',day:"دوشنبه"},
            {date:'17 مرداد',day:"سه شنبه"},
            {date:'18 مرداد',day:"چهارشنبه"},
            {date:'19 مرداد',day:"پنجشنبه"}
          ],

    }
})