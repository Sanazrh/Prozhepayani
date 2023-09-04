<template>
    <div>
        <con-header></con-header>
       <br>
       <con-sidebar></con-sidebar>
       <br>
       <br>
       <br>
       <br>
        <div class="r">
            <div class="borderr">
                <div class="childFilm" >
                    <h4>لیست نوبت‌ها</h4>
                    <br>
                </div>
            </div>
            <br>
            <h4>       15/4/1402   </h4>
            <br>
           <div class="borderr">
            <h1>دکتر حمید احدی</h1>
            <div class="borderr">
                <p>نام و نام خانوادگی: ساناز رحیمیان</p>
                <p class="rr">شماره تماس:09136665445</p>
                <p>ساعت حضور: 17:00</p>
            </div> 
            <div class="borderr">
                <p>نام و نام خانوادگی: علی علیان</p>
                <p class="rr">شماره تماس:09107789632</p>
                <p>ساعت حضور: 17:40</p>
            </div> 
           </div>
            <br>  
            <div class="borderr">
            <h1>دکتر آرش رستمی</h1>
            <div class="borderr">
                <p>نام و نام خانوادگی: منیژه علوی</p>
                <p class="rr">شماره تماس:09132243135</p>
                <p>ساعت حضور: 17:20</p>
            </div> 
            <div class="borderr">
                <p>نام و نام خانوادگی: سمیرا شفیعی</p>
                <p class="rr">شماره تماس:09023245455</p>
                <p>ساعت حضور: 18:40</p>
            </div> 
           </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            
        }
    },
  computed:{
        
    },
    methods:{
        
    }
};
</script>
<style> 
.r{
    direction:rtl;
    margin-left: 40%;
    width: 50%;
}
.rr{
    padding: 3%;
    background-color:rgb(226, 224, 224) ;
    border-radius: 2%;
    margin-left: 50%;
}
.borderr{
    padding: 2%;
    border-radius: 2%;
    border-style: solid;
    border-color: rgb(75, 134, 75);
}
.box{
display:flex;
  flex-flow:row nowrap;
  width:30%;
  padding: 2%;
  gap:0px;
  margin-left: 20%;
}
.btnn{
    margin-right: 10%;
}
.childFilm{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>