<template>
    <div>
        <con-header></con-header>
       <br>
       <con-sidebar></con-sidebar>
       <br>
       <br>
        <div class="r">
            <div class="borderr">
                <div class="childFilm" >
                    <h4>لیست همکاری‌ها</h4>
                </div>
            </div>
            <br>
            <br>
            <div class="borderr">
                <h4>       15/4/1402   </h4>
                <p>نام و نام خانوادگی: ساناز رحیمیان</p>
                <p class="rr">شماره تماس:09136665445</p>
                <p>میزان تحصیلات: کارشناسی ارشد</p>
                <p>محل سکونت: اصفهان</p>
                <p>حوضه فعالیت: روانشناسی بالینی</p>
                <div class="box">
                    <a  v-on:click="add=!add " class="btn btn-block btn-success btnn"> مشاهده رزومه</a>
                </div> 
            </div> 
            <br>  
            <div class="borderr">
                <h4>       22/5/1402   </h4>
                <p>نام و نام خانوادگی: شهین احمدی</p>
                <p class="rr">شماره تماس:09027732685</p>
                <p>میزان تحصیلات: کارشناسی </p>
                <p>محل سکونت: اصفهان</p>
                <p>حوضه فعالیت: کودک و نوجوان</p>
                <div class="box">
                    <a  v-on:click="add=!add " class="btn btn-block btn-success btnn"> مشاهده رزومه</a>
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
    box-shadow: 4px 4px 3px grey;
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