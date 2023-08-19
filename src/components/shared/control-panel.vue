<template >
    <div>
       <con-header></con-header>
       <br>
       <con-sidebar></con-sidebar>
       <con-box></con-box>
       <div class="childd">
        <con-chat></con-chat>
       <con-todo2 class="aa"></con-todo2>
       </div>
       
    </div>
    
  </template>
  
  <script>
import { RouterLink } from 'vue-router';

  export default{
    components: { RouterLink }
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