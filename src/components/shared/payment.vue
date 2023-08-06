<template>
    <div class="coloring">
        <div class="overlay-content ">
        <form class="cd-form floating-labels">
        <br>
	<fieldset>
		<legend> درگاه پرداخت</legend>
        <p> لطفا اطلاعات کارت بانکی خود را وارد  کنید</p>
        <br>
 
		<div class="icon tt">
            <p> مبلغ پرداختی شما:{{price}}</p>
			<label class="cd-label" for="cd-name">شماره کارت</label>
			<input class="dd" type="text" name="cd-name" id="cd-name" required>
            <br>
            <br>
            <label class="cd-label" for="cd-name">cvv2</label>
			<input class="dd" type="text" name="cd-lname" id="cd-lname"  required>
            <br>
            <br>
            <label class="cd-label" for="cd-name">تاریخ</label>
            <br>
			<input class="dd date" type="number" name="cd-num" id="cd-num" required>
            <br>
            <label class="cd-label" for="cd-name">رمز دوم</label>
			<input class="dd" type="number" name="cd-pass" id="cd-lname"  required>
	    </div> 
 
	    <!-- ... -->
	</fieldset>
    <br>
	<fieldset>
 
		
		<!-- ... -->
		
        <input type="submit send" id="send" value="پرداخت">
        <br>
        <br>
        <br>
        <br>
	</fieldset>
	</form>
  </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            price:"120,000"
        }
    }
};
</script>

<style>
.user{
    background-color:#e9e9e9;
}
.coloring{
    background-color:#A0C49D;
}
input{
	width:100%;
}
.tt{
    border-radius:20px;
	border-width:1px;
	BOX-shadow:0 0 4PX 0 RGBA(0,0,0,0.4);
	padding:15px;
    weight:10px;
}
.send{
	width:20%;
	text-align:center;
    background-color:#C4D7B;
}
.date{
    display:flex;
    justify-content:space-between;
    flex-flow:row wrap;
    width:100%;
    gap:11px;
}
.dd{
    border-radius:20px;
    border-width:1px;
}
#send{
    border-radius:10px;
    width:20%;
	text-align:center;
    border-width:1px;
    background-color:#C4D7B2;
}
</style>