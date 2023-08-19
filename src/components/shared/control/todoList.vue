<template >
    <div class="boddy">
       <ul class="box">
        <li>Todo List</li>
        <li  class="green">hi</li>
        <li class="red">hi</li>
       </ul>
       <ul data-widget="todo-list" class="box">
        <li>hi</li>
        <li>hi</li>
       </ul>
       <ul data-widget="todo-list" class="box">
        <li>hi</li>
        <li>hi</li>
       </ul>
    </div>
</template>

<style>

</style>
<script>
export default{
    methods:{
        red:function(){
            el.style.backgroundColor="red"
        },
        green:function(){
            el.style.backgroundColor="green"
        },
    }
}
</script>