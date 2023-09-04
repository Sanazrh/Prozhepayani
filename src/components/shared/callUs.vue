<template>
    <div>
        <div class="contact_us_2">
  <div class="responsive-container-block big-container">
    <div class="blueBG">
    </div>
    <div class="responsive-container-block container">
      <form class="form-box">
        <div class="container-block form-wrapper">
          <p class="text-blk contactus-head">
            تماس با ما
          </p>
          <div class="responsive-container-block">
            <div class="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt">
              <p class="text-blk input-title">
                نام
              </p>
              <input class="input" id="ijowk" name="FirstName" placeholder="نام خود را وارد کنید...">
            </div>
            <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <p class="text-blk input-title">
                 ایمیل
              </p>
              <input class="input" id="ipmgh" name="Email" placeholder="ایمیل خود را وارد کنید...">
            </div>
            <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i">
              <p class="text-blk input-title">
                پیام
              </p>
              <textarea class="textinput" id="i5vyy" placeholder="پیام خود را وارد کنید..."></textarea>
            </div>
          </div>
          <button class="submit-btn">
            ارسال
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
</template>

<style>

.contact_us_2{
    height: 20%;
}
.contact_us_2 .submit-btn:hover {
  background-color: gray;
}

.contact_us_2 .responsive-container-block {
  min-height: 75px;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  
}

.contact_us_2 .responsive-container-block.big-container {
  
  
  position: relative;
  height: auto;
}

.contact_us_2 .responsive-container-block.container {
  position: static;
  min-height: 75px;
  flex-direction: column;
  z-index: 2;
  max-width: 800px;
  margin-top: 100px;
  margin-right: auto;
  margin-bottom: 50px;
  margin-left: auto;
}

.contact_us_2 .container-block.form-wrapper {
  background-color: white;
  max-width: 799px;
  text-align: center;
  padding-top: 50px;
  padding-right: 40px;
  padding-bottom: 50px;
  padding-left: 40px;
  margin-left: auto;
}

.contact_us_2 .text-blk.contactus-head {
  font-size: 36px;
  line-height: 50px;
  font-weight: 900;
}



.contact_us_2 .responsive-cell-block.wk-desk-6.wk-ipadp-6.wk-tab-12.wk-mobile-12 {
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 26px;
  margin-left: 0px;
  min-height: 50px;
}

.contact_us_2 .input {
  width: 90%;
  height: 50px;
  padding-top: 1px;
  padding-right: 15px;
  padding-bottom: 1px;
  padding-left: 15px;
  border-style: solid;
  border-color: gray;
}

.contact_us_2 .textinput {
  width: 98%;
  min-height: 150px;
  padding-top: 20px;
  padding-right: 15px;
  padding-bottom: 20px;
  padding-left: 15px;
  border-width: 2px;
  border-style: solid;
  border-color: gray;
}

.contact_us_2 .submit-btn {
  width: 10%;
  background-color: #A0C49D;
  height: 60px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  border-width: 0px;
  border-radius: 4px;
  cursor: pointer;
}

.contact_us_2 .form-box {
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
}

.contact_us_2 .text-blk.input-title {
  text-align: right;
  font-size: 14px;
  color: black;
}

.contact_us_2 ::placeholder {
  color: #dadada;
}

.contact_us_2 .blueBG {
  position: absolute;
  width: 100%;
  left: 0px;
  top: 0px;
  height: 300px;
  background-color: #A0C49D;
}
</style>