<template>
    <div class="child">
        <!-- Construct the card with style you want. Here we are using card-danger -->
<!-- Then add the class direct-chat and choose the direct-chat-* contexual class -->
<!-- The contextual class should match the card, so we are using direct-chat-danger -->
<div class="card card-danger direct-chat direct-chat-danger">
  <div class="card-header">
    <h3 class="card-title">چت خصوصی</h3>
    <div class="card-tools">
      <span data-toggle="tooltip" title="3 New Messages" class="badge badge-light">3</span>
      <button type="button" class="btn btn-tool" data-card-widget="collapse">
        <i class="fas fa-minus fontt"></i>
      </button>
      <button type="button" class="btn btn-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">
        <i class="fas fa-comments fontt"></i>
      </button>
      <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times fontt"></i>
      </button>
    </div>
  </div>
  <!-- /.card-header -->
  <div class="card-body">
    <!-- Conversations are loaded here -->
    <div class="direct-chat-messages">
      <!-- Message. Default to the left -->
      <div class="direct-chat-msg">
        <div class="direct-chat-infos clearfix">
          <span class="direct-chat-name float-left"> ساناز رحیمیان</span>
          <span class="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
        </div>
        <!-- /.direct-chat-infos -->
        <img class="direct-chat-img" src="src/assets/images/control-panel2.png" alt="message user image">
        <!-- /.direct-chat-img -->
        <div class="direct-chat-text">
          فیلم جدید چه زمانی بارگذاری می‌شود؟
        </div>
        <!-- /.direct-chat-text -->
      </div>
      <!-- /.direct-chat-msg -->
      <!-- Message to the right -->
      <div class="direct-chat-msg right">
        <div class="direct-chat-infos clearfix">
          <span class="direct-chat-name float-right"> مدیر</span>
          <span class="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
        </div>
        <!-- /.direct-chat-infos -->
        <img class="direct-chat-img" src="src/assets/images/control-panel.png" alt="message user image">
        <!-- /.direct-chat-img -->
        <div class="direct-chat-text">
          فیلم از کدام مشاور و روانشناس؟
        </div>
        <!-- /.direct-chat-text -->
      </div>
      <!-- /.direct-chat-msg -->
      <!-- Message. Default to the left -->
      <div class="direct-chat-msg">
        <div class="direct-chat-infos clearfix">
          <span class="direct-chat-name float-left">ساناز رحیمیان </span>
          <span class="direct-chat-timestamp float-right">23 Jan 5:37 pm</span>
        </div>
        <!-- /.direct-chat-infos -->
        <img class="direct-chat-img" src="src/assets/images/control-panel2.png" alt="message user image">
        <!-- /.direct-chat-img -->
        <div class="direct-chat-text">
         دکتر احدی 
        </div>
        <!-- /.direct-chat-text -->
      </div>
      <!-- /.direct-chat-msg -->
      <!-- Message to the right -->
      <div class="direct-chat-msg right">
        <div class="direct-chat-infos clearfix">
          <span class="direct-chat-name float-right">مدیر </span>
          <span class="direct-chat-timestamp float-left">23 Jan 6:10 pm</span>
        </div>
        <!-- /.direct-chat-infos -->
        <img class="direct-chat-img" src="src/assets/images/control-panel.png" alt="message user image">
        <!-- /.direct-chat-img -->
        <div class="direct-chat-text">
          سی ام شهریور
        </div>
        <!-- /.direct-chat-text -->
      </div>
      <!-- /.direct-chat-msg -->
    </div>
    <!--/.direct-chat-messages-->
    <!-- Contacts are loaded here -->
    <div class="direct-chat-contacts">
      <ul class="contacts-list">
        <li>
          <a href="#">
            <img class="contacts-list-img" src="/docs/3.2/assets/img/user1-128x128.jpg">
            <div class="contacts-list-info">
              <span class="contacts-list-name">
                علی علیان
                <small class="contacts-list-date float-right">2/28/2023</small>
              </span>
              <span class="contacts-list-msg">چگونه می‌توانم نوبتم را لغو کنم؟</span>
            </div>
            <!-- /.contacts-list-info -->
          </a>
        </li>
        <!-- End Contact Item -->
        <li>
          <a href="#">
            <img class="contacts-list-img" src="/docs/3.2/assets/img/user7-128x128.jpg">
            <div class="contacts-list-info">
              <span class="contacts-list-name">
                سارا رسولی
                <small class="contacts-list-date float-right">2/23/2023</small>
              </span>
              <span class="contacts-list-msg">ممنون از شما</span>
            </div>
            <!-- /.contacts-list-info -->
          </a>
        </li>
        <!-- End Contact Item -->
        <li>
          <a href="#">
            <img class="contacts-list-img" src="/docs/3.2/assets/img/user3-128x128.jpg">
            <div class="contacts-list-info">
              <span class="contacts-list-name">
                نادیا جعفری
                <small class="contacts-list-date float-right">2/20/2023</small>
              </span>
              <span class="contacts-list-msg">شماره دکتر را از کجا می‌توانم پیدا کنم؟</span>
            </div>
            <!-- /.contacts-list-info -->
          </a>
        </li>
        <!-- End Contact Item -->
        <li>
          <a href="#">
            <img class="contacts-list-img" src="/docs/3.2/assets/img/user5-128x128.jpg">
            <div class="contacts-list-info">
              <span class="contacts-list-name">
                محمد محمدی
                <small class="contacts-list-date float-right">2/10/2015</small>
              </span>
              <span class="contacts-list-msg">سپاس گذارم...</span>
            </div>
            <!-- /.contacts-list-info -->
          </a>
        </li>
        <!-- End Contact Item -->
      </ul>
      <!-- /.contacts-list -->
    </div>
    <!-- /.direct-chat-pane -->
  </div>
  <!-- /.card-body -->
  <div class="card-footer">
    <form action="#" method="post">
      <div class="input-group">
        <input type="text" name="message" placeholder="...تایپ کنید " class="form-control">
        <span class="input-group-append">
          <button type="button" class="btn btn-primary">ارسال</button>
        </span>
      </div>
    </form>
  </div>
  <!-- /.card-footer-->
</div>
<!--/.direct-chat -->
    </div>
</template>

<style>
.fontt{
  font-family: FontAwesome;
}
.child{
  justify-content:space-between;
  display:flex;
  flex-flow:row;
  margin-left: 20%;
  margin-right: 0%;
}
</style>