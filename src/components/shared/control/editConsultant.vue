<template>
    <div>
        <con-header></con-header>
       <br>
       <con-sidebar></con-sidebar>
       <br>
       <br>
        <div class="borderr">
        <div class="rr ">
            <br>
            <div >
                <div>
                    <h4 >حذف و اضافه مشاور</h4>
                </div>
            </div>
            <div class="box" v-if="add && del && change">
                <a  v-on:click="add=!add " class="btn btn-block btn-success btnn">افزودن مشاور</a>
                <a v-on:click="change = !change" class="btn btn-block btn-success btnn">ویرایش</a>
                <a v-on:click="del = !del" class="btn btn-block btn-success btnn">حذف کردن مشاور</a>
            </div>
            <div v-if="!del" class=" ">
                <p>کدام مشاور حذف شود؟</p>
                <div class="inlin">
                    <a class="btn btn-block btn-success bttn">حذف </a>
                    <input type="text"  class="form-control inputt1">
                </div>
            </div>
            <div v-if="!change" class=" rr">
                <br>
                <label class="cd-label" for="cd-textarea">:نام مشاور را وارد کنید</label>
                <input type="text"  class="form-control r inputt2">
                <br>
                <label class="cd-label" for="cd-textarea">:ایمیل مشاور را وارد کنید</label>
                <input type="text"  class="form-control r inputt2">
                <br>
                <label class="cd-label" for="cd-textarea">:حوضه کاری مشاور را وارد کنید</label>
                <input type="text"  class="form-control r inputt2">
                <br>
                <br>
                <label class="cd-label" for="cd-textarea">:عکس مشاور را وارد کنید</label>
                <br>
  			    <input class="user btn2 inputt3" type="file" name="cd-file" id="cd-file" placeholder="انتخاب عکس" required>
                <br>
                <br>
                <br>
                <a  class="btn btn-block btn-success btn3">ویرایش</a>
            </div>
            <div v-if="!add" class=" rr">
                <br>
                <label class="cd-label" for="cd-textarea">:نام مشاور جدید را وارد کنید</label>
                <input type="text"  class="form-control r inputt2">
                <br>
                <label class="cd-label" for="cd-textarea">:ایمیل مشاور جدید را وارد کنید</label>
                <input type="text"  class="form-control r inputt2">
                <br>
                <label class="cd-label" for="cd-textarea">:حوضه کاری مشاور جدید را وارد کنید</label>
                <input type="text"  class="form-control r inputt2">
                <br>
                <br>
                <label class="cd-label" for="cd-textarea">:عکس مشاور جدید را وارد کنید</label>
                <br>
  			    <input class="user btn2 inputt3" type="file" name="cd-file" id="cd-file" placeholder="انتخاب عکس" required>
                <br>
                <br>
                <br>
                <a  class="btn btn-block btn-success btn3">افزودن</a>
            </div>
           
    </div>
    </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            del:true,
            add:true,
            change:true,
        }
    }
};
</script>
<style> 

.btn3{
    width: 10%;
}

a.btn.btn-block.btn-success.btnn {
    margin: 0;
    width:30%;
}

.box {
    margin: 0 !important;
    justify-content: space-between !important;
    width: 100% !important;
    /* padding: 0; */
}
.btn2{
    background-color: rgb(214, 212, 212);
    width: 20%;
}


.r{
    direction:rtl;
}
.rr{
    direction:rtl;
    padding: 2%;
}
.btnn{
    margin-right: 30%;
    
}
.box{
display:flex;
  flex-flow:row nowrap;
  justify-content: center;
  align-items: center;
  width:80%;
  padding: 5%;
  gap:0px;
}
.inputt1{
    border-radius: 10px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: rgb(218, 217, 217);
    width: 90%;
    flex: 90%;
}
.inputt2{
    border-radius: 10px;
    background-color: rgb(218, 217, 217);
    width: 50%;
    
}
.inputt3{
    border-radius: 10px;
    background-color: rgb(218, 217, 217);
    width: 20%;
    
}
.inlin{
    display: flex;
    flex-flow: row nowrap;
}
.bttn{
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: 10%;
    flex: 10%;
}
.borderr{
    border-radius: 10px;
    border-color: rgb(128, 128, 128);
    border-style: solid;
    margin-left: 20%;
    border-width: 1px;
}
h4{
    text-align: center;
}
</style>