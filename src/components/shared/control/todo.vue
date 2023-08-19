<template>
    <div class="todo">
        <div id="myDIV" class="header">
  <h2>فهرست انجام کار</h2>
  <input type="text" id="myInput" placeholder="... اضافه کنید">
  <span onclick="newElement()" class="addBtn">افزودن</span>
</div>

<ul id="myUL" class="ulli uul">
  <li class="ulli" role="link" @click="handleClick2" 
    :style="{
       backgroundColor: nonActive ? '' : 'gray',
       color: nonActive ? 'black' : 'white',
       textDecoration: nonActive ? ' none' : 'line-through',
    }">آپدیت کردن پروفایل‌ها</li>
  <li class="ulli" role="link" @click="handleClick" 
    :style="{
       backgroundColor: active ? '' : 'gray',
       color: active ? 'black' : 'white',
       textDecoration: active ? ' none' : 'line-through',
    }">پاسخ به سوالات</li>
  <li class="ulli" role="link" @click="handleClick3" 
    :style="{
       backgroundColor: nonActive2 ? '' : 'gray',
       color: nonActive2 ? 'black' : 'white',
       textDecoration: nonActive2 ? 'none' : 'line-through',
    }">Meet George</li>
  <li class="ulli">Buy eggs</li>
  <li class="ulli">Read a book</li>
  <li class="ulli">Organize office</li>
</ul>
<br>

    </div>
</template>

<style>
/* Include the padding and border in an element's total width and height */
* {
  box-sizing: border-box;
  
}

/* Remove margins and padding from the list */
.uul {
  margin: 0;
  padding: 0;
  width: 100%;
  flex: 100%;
  display: flex;
  flex-flow: column nowrap;
}

/* Style the list items */
.ulli {
  cursor: pointer;
  position: relative;
  padding: 2px 8px 2px 8px;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;
  width: 100%;
  flex:100%;

  /* make the list items unselectable */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Set all odd list items to a different color (zebra-stripes) */
.uul ul li:nth-child(odd) {
  background: #f9f9f9;
}

/* Darker background-color on hover */
.uul ul li:hover {
  background: #ddd;
}

/* Style the close button */
.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
}

.close:hover {
  background-color: #f44336;
  color: white;
}

.todo{
    margin-left: 40px;
    margin-right: 0%;
    width: 100%;
    flex:100%;
}

/* Style the header */
.header {
  background-color: #f44336;
  padding: 30px 40px;
  color: white;
  text-align: center;
  width: 100%;
  flex:100%;
}

/* Clear floats after the header */
.header:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the input */
input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 75%;
  flex: 75%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

/* Style the "Add" button */
.addBtn {
  padding: 10px;
  width: 25%;
  flex:25%;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
}

.addBtn:hover {
  background-color: #bbb;
}
#myUL{
    border-style: solid;
    border-color: gray;
    border-radius: 2px;
}
</style>


<script>
export default{
    data() {
    return {
      active: false,
      nonActive: true,
      nonActive2: true,
    };
  },
  methods: {
    handleClick() {
      this.active = !this.active;
    },
    handleClick2() {
      this.nonActive = !this.nonActive;
    },
    handleClick3() {
      this.nonActive2 = !this.nonActive2;
    },

  },
};
</script>