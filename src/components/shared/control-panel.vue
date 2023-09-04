<template >
    <div>
       <con-header></con-header>
       <br>
       <con-sidebar></con-sidebar>
       <br>
       <br>
       <con-box></con-box>
       <div class="childd">
        <con-chat></con-chat>
       <con-todo class="aa"></con-todo>
       </div>
    </div>
  </template>
  
  <script>
import { RouterLink } from 'vue-router';

  export default{
    components: { RouterLink },
    mounted(){
      
    }
};
  </script>

  <style>
        .aa .fa,.aa .fas,.aa .far{
            font-family:'FontAwesome';
        }
.childd{
  display:flex;
  flex-flow:row nowrap;
  width:78%;
  gap:0px;
  margin-left: 10%;
}
.aa{
  margin-left: 0%;
}
  </style>