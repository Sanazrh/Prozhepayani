<template>
    <div>
        <con-header></con-header>
       <br>
       <con-sidebar></con-sidebar>
       <br>
       <br>
       <br>
       <br>
       <br>
        <div class="rr ">
            <div >
                <div class="childFilm" v-for="(films, index) in film" v-bind:key="indexx">

                    <h4 class="loop"><span>{{films.name}}</span>- <span>{{index+1}}</span> </h4>
                </div>
            </div>
            <br>
            <div class="box" v-if="add && del && change">
                <a  v-on:click="add=!add " class="btn btn-block btn-success btnn">افزودن فیلم جدید</a>
                <a v-on:click="change = !change" class="btn btn-block btn-success btnn">ویرایش</a>
                <a v-on:click="del = !del" class="btn btn-block btn-success">حذف کردن فیلم جدید</a>
            </div>
            <div v-if="!del" class="box2 borderr">
                <p>کدام مورد حذف شود؟</p>
                <div class="inlin">
                    <a v-on:click="deletItem" class="btn btn-block btn-success bttn">حذف </a>
                <input type="text" v-model.lazy="indexx" class="form-control borderr inputt1">
                </div>
                
            </div>
            <div v-if="!add" class="box2 borderr">
                <br>
                <p>عنوان فیلم جدید را وارد کنید</p>
                <input type="text"  class="form-control borderr ">
                <br>
                <p>توضیحات فیلم جدید را وارد کنید</p>
                <input type="text"  class="form-control borderr ">
                <br>
                <p>سخنران فیلم جدید را وارد کنید</p>
                <input type="text" class="form-control borderr ">
                <br>
                <label class="cd-label" for="cd-textarea">عکس محتوا</label>
  			    <input class="user" type="file" name="cd-file" id="cd-file" placeholder="انتخاب عکس" required>
                
                <label class="cd-label" for="cd-textarea"> فیلم</label>
  			    <input class="user" type="file" name="cd-file" id="cd-file" placeholder="" required>
                <a v-on:click="deletItem" class="btn btn-block btn-success">افزودن</a>
            </div>
            <div v-if="!change" class="box2 borderr">
                <p>عنوان فیلم  را وارد کنید</p>
                <input type="text"  class="form-control borderr ">
                <br>
                <p>توضیحات فیلم  را وارد کنید</p>
                <input type="text"  class="form-control borderr ">
                <br>
                <p>سخنران فیلم  را وارد کنید</p>
                <input type="text" class="form-control borderr ">
                <br>
                <label class="cd-label" for="cd-textarea">عکس محتوا</label>
  			    <input class="user" type="file" name="cd-file" id="cd-file" placeholder="انتخاب عکس" required>
                <br>
                <a v-on:click="deletItem" class="btn btn-block btn-success btn3">افزودن</a>
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
            x:true
        }
    },
  computed:{
        film(){
            return this.$store.state.film
        }
    },
    methods:{
        deletItem(indexx){
            this.film.splice(indexx,1)
        },
        addItem(){
            this.films.push("hhhhh")
        }
    }
};
</script>
<style> 
.rr{
    direction:rtl;
}
.btn3{
    width: 10%;
    direction:rtl;
}
.borderr{
    padding: 2%;
    border-radius: 2%;
    border-style: solid;
    border-color: rgb(75, 134, 75);
    
}
.childFilm h4 {
    display: flex;
    align-items: center;
    justify-content: center;
}
.bttn{
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: 10%;
    flex: 10%;
}
.inputt1{
    border-radius: 10px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: rgb(218, 217, 217);
    width: 90%;
}
.inlin{
    display: flex;
    flex-flow: row nowrap;
}
.borderr2{
    border-radius: 1%;
    border-style: solid;
    border-color: rgb(75, 134, 75);
    width: 32%;
}
.loop{
    text-align: center;
    margin-left: 20%;
    border-radius: 1%;
    border-style: solid;
    border-color: rgb(75, 134, 75);
    width: 32%;
}
.box{
display:flex;
  flex-flow:row nowrap;
  width:80%;
  padding: 5%;
  gap:0px;
  margin-left: 00%;
}
.btnn{
    margin-right: 10%;
}
.box2{
    display:flex;
  flex-flow:column wrap;
  width:80%;
  padding: 5%;
  gap:0px;
}.childFilm{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>