<template>
    <div>
        <app-header></app-header>
        <div class="container bod">
        <div class="card ">
            <div class="card-img">
                <img src="src/assets/images/snz.jpg" alt="" width:300px height:250>
            </div>
            <br>
            <h2> ساناز رحیمیان</h2>
        </div>
        <div class="toggle" v-on:click="showme=!showme">
            <i class="fa fa-chevron-down" aria-hidden="true"></i>
        </div>
        <ul class="ull" v-show="showme">
            <li><h5 href="" class="aa">سن:22 </h5>
                <li ><a href="" class="aa"><i class="fa fa-phone " aria-hidden="true"></i>شماره تماس:0913000111 </a></li>
            <li><h5 href="" class="aa">آدرس:اصفهان-بهارستان-خیابان الفت </h5>
                <li><h5 href="" class="aa">سابقه :<br>مشاوره تحصیلی 22/5/1402 <br>مشاوره تحصیلی 20/4/1402</h5>
                    <li><a href="" class="aa ltr"><i class="fa fa-envelope ltr" aria-hidden="true"></i>e-mali:snz.rhn.2@gmail.com</a></li>
        </ul>
    </div>
    <app-info></app-info>
    <app-footer></app-footer>
    </div>
</template>

<script>
export default{
    data(){
        return{
            showme:false
        }
    }
};
</script>

<style>

.bod{
    width: 100%;
    min-height: 90vh;
    font-family: "Vazir";
    background-color: #f0fafb;
    display: flex;
    justify-content: center;
    align-items: center;
}



.card{
    width:500px;
    height:250px;
    position: relative;
    display: flex;
    align-items: center;
}

.card-img img{
    width: 120px;

}
.ltr{
    display: flex;
    flex-flow: row-reverse wrap;
}
.card h2{
    margin-right: 1.5rem;
    color: #222;
}
.card h2 span{
    font-size: 1.6rem;
    font-weight: 400;
    color: #777;
    letter-spacing: 0px;
}

.container ul {
    position: relative;
    border-top: 1px solid rgba(0,0,0,0.1);
    margin-top: 1.5rem;
    padding: 2rem 0;

    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.container ul a{
    font-size: 1.5rem;
    color: #444;
    transition: 0.2s;
}
.container ul a:hover{
    color: #3EDBF0;
}
.f{
    text-align: left;
}
.toggle{
    width: 4rem;
    height: 4rem;
    background-color: #28a745;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.parent img{
    width:30px;
    height: 10px;
}
</style>