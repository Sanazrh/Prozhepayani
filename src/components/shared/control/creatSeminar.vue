<template>
    <div>
        <con-header></con-header>
       <br>
       <con-sidebar></con-sidebar>
       <br>
       <br>
       <br>
       <h3 class="rr2">سمینار</h3>
       <br>
        <div class="rr2">
            <div class="rr">
        <div class="col-md-3 borderr" v-if="!f">
            <p> ظرفیت را وارد کنید</p>
            <input type="text" v-model.lazy="zarfiat" class="form-control borderr">
            <br>
            <br>
            <p>تاریخ را وارد کنید</p>
            <input type="date" v-model.lazy="date"  id="start" class="date borderr" name="trip-start" value="1402-06-01" min="1402-06-15" max="1402-12-31" />
            <br>
            <br>
            <br>
            <p>موضوع سمینار</p>
            <input type="text" v-model.lazy="title" class="form-control borderr ">
            <br>
            <br>
            <br>
            <a v-on:click="f=!f" class="btn btn-block borderr clr">ساختن</a>
            
        </div>
        <div v-if="f" class="borderr2">
            <h3 class="br1">! سمینار با موفقیت ایجاد شد</h3>
            <div class="br2">
                <p>{{ zarfiat }} :ظرفیت</p>
                <p>تاریخ :{{ date }}</p>
                <p>موضوع :{{ title }}</p>
                <a v-on:click="f=!f" class="btn btn-block borderr2 clr">ویرایش</a>
            </div>
        </div>
        <br>
        <br>
        <br>
    </div>
        </div>
        <br>

    </div>
</template>
<script>
export default{
data(){
    return{
        zarfiat:"",
        date:"",
        title:" ",
        f:false,
    }
}
};
</script>

<style>
.rr{
    direction:rtl;
    display: flex;
    justify-content: center;
    align-items: center;
}
.rr2{
    width: 100%;
    text-align: center;
}
.borderr{
    padding: 2%;
    border-radius: 5%;
    border-style: solid;
    border-color: rgb(75, 134, 75);
}
.borderr2{
    border-radius: 1%;
    border-style: solid;
    border-color: rgb(75, 134, 75);
    width: 32%;
}
.br1{
    background-color: rgb(75, 134, 75);
    padding: 3% 10%;
}
.br2{
    padding-right: 10%;
}
.date{
    direction:rtl;
}
.clr{
    background-color: rgb(75, 134, 75);
    color:black;
}
</style>