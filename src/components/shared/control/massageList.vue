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
                    <h4>لیست پیام‌ها</h4>
                </div>
            </div>
            <br>
            <br>
            <div class="borderr">
                <h4>ساناز رحیمیان       22/5/1402   </h4>
                <p class="rr">فیلم جدید چه زمانی بارگذاری می‌شود؟</p>
                <div class="box">
                    <a  v-on:click="add=!add " class="btn btn-block btn-success btnn"> پاسخ</a>
                    <a v-on:click="del = !del" class="btn btn-block btn-success btnn">حذف پیام</a>
                </div> 
            </div> 
            <br>  
            <div class="borderr">
                <h4>علی علیان  1402/5/22</h4>
                <p class="rr">چگونه می‌توانم نوبتم را لغو کنم؟</p>
                <div class="box">
                    <a  v-on:click="add=!add " class="btn btn-block btn-success btnn"> پاسخ</a>
                    <a v-on:click="del = !del" class="btn btn-block btn-success btnn">حذف پیام</a>
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
  width:80%;
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