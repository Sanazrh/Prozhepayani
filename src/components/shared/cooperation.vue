<template>
    <div>
	<app-header></app-header>

	<br>
	<br>
	<br>

	<div class="overlay-content coop">
    <form class="cd-form floating-labels">
	<fieldset>
		<legend class="s">اطلاعات خود را وارد کنید</legend>
        <br>
 
		<div class="icon tt">
			<label class="cd-label" for="cd-name">نام</label>
			<input class="user" type="text" name="cd-name" id="cd-name" placeholder="نام" required>
            <br>
            <label class="cd-label" for="cd-name">نام خانوادگی</label>
			<input class="user" type="text" name="cd-lname" id="cd-lname" placeholder="نام خانوادگی" required>
            <br>
            <label class="cd-label" for="cd-name">شماره تماس</label>
			<input class="user" type="number" name="cd-num" id="cd-num" placeholder="شماره تماس"  value="09" required>
	    </div> 
 
	    <!-- ... -->
	</fieldset>
    <br>
	<fieldset>
 
		<div class="tt">
			<h5>میزان تحصیلات</h5>
 
			<p class="cd-select icon">
				<select class="budget">
					<option value="0">میزان تحصیلات</option>
					<option value="1">کارشناسی</option>
					<option value="2">کارشناسی ارشد</option>
					<option value="3">دکتری</option>
				</select>
			</p>
            <h5>محل سکونت</h5>
 
			<p class="cd-select icon">
				<select class="budget">
					<option value="0">محل سکونت</option>
					<option value="1">اصفهان</option>
					<option value="2">تهران</option>
					<option value="3">مشهد</option>
				</select>
			</p>
		</div> 
        <br>
		<div class="tt">
			<h5>حوضه تخصصی فعالیت</h5>
 
			<ul class="cd-form-list">
				<li>
					<input type="radio" name="radio-button" id="cd-radio-1" checked>
					<label for="cd-radio-1">روانشناسی بالینی</label>
				</li>
					
				<li>
					<input type="radio" name="radio-button" id="cd-radio-2">
					<label for="cd-radio-2">مشاوره خانواده</label>
				</li>
 
				<li>
					<input type="radio" name="radio-button" id="cd-radio-3">
					<label for="cd-radio-3">مشاوره تحصیلی</label>
				</li>
				<br>
				<br>
				<li>
					<input type="radio" name="radio-button" id="cd-radio-4">
					<label for="cd-radio-3">روابط فردی و بین فردی</label>
				</li>
				<li>
					<input type="radio" name="radio-button" id="cd-radio-5">
					<label for="cd-radio-3">کودک و نوجوان</label>
				</li>
			</ul>
		</div>
 
		<!-- ... -->

        <br>
		<div class="icon tt">
			<label class="cd-label" for="cd-textarea">ارسال رزومه</label>
  			<input class="user" type="file" name="cd-file" id="cd-file" placeholder="رزومه" required>
		</div>
        <br>
		<div class="send">
	      	<input type="submit" value="ارسال">
	    </div>
	</fieldset>
	</form>

    </div>
	<br>
	<br>

	<app-info></app-info>
  	<app-footer></app-footer>
	
	</div>
</template>

<script>
export default{
};
</script>
<style>
.user{
    background-color:#e9e9e9;
}

input{
	width:100%;
}
.tt{
	border-width:2px;
	BOX-shadow:0 0 4PX 0 RGBA(0,0,0,0.4);
	padding:15px;
}
.s{
	text-align: center;
}
.send{
	width:12%;
	text-align:center;
}
</style>