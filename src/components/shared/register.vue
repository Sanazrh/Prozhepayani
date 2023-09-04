<template>
    <div>
	<app-header></app-header>

	<br>
	<br>
	<br>

	<div class="overlay-content coop">
    <form class="cd-form floating-labels">
	<fieldset>
		<legend>اطلاعات خود را وارد کنید</legend>
        <br>
 
		<div class="icon tt">
			<label class="cd-label" for="cd-name">آدرس</label>
			<input class="user" type="text" name="cd-adress" id="cd-adress" placeholder="آدرس" required>
            <br>
	    </div> 
 
	    <!-- ... -->
	</fieldset>
    <br>
	<fieldset>
 
		<div class="tt">
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
			<h5>حوضه نیازمندی</h5>
 
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
		<br>
		<div class="tt">
			<label class="cd-label" for="cd-textarea">عکس خود را وارد کنید:</label>
  			    <input class="user btn2 inputt2" type="file" name="cd-file" id="cd-file" placeholder="انتخاب عکس" required>
		</div>
 
		<!-- ... -->

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
.send{
	width:12%;
	text-align:center;
}
</style>