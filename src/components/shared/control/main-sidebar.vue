<template >
    <div class="rrr poss">
        <!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4 poss2">
  <!-- Brand Logo -->
  <a href="index3.html" class="brand-link">
    <span class="brand-text font-weight-light">مرکز مشاوره</span>
  </a>
  <!-- Sidebar user panel (optional) -->
  <div class="user-panel mt-3 pb-3 mb-3 d-flex">
      <div class="image">
        <img src="src/assets/images/control-panel.png" class="img-circle elevation-2" alt="User Image">
      </div>
      <div class="info">
        <a href="#" class="d-block"> مینا مرادی</a>
        <p class="clr">سوپر یوزر</p>
      </div>
    </div>

  <!-- Sidebar Menu -->
  <!-- search -->
  <form class="form-inline">
  <div class="input-group">
    <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
    <div class="input-group-append">
      <button class="btn btn-sidebar" type="submit">
        <i class="fas fa-search fontt"></i>
      </button>
    </div>
  </div>
</form>
<br>
<!-- end search -->

  <!-- Sidebar -->
  <div class="sidebar">
    <nav class="mt-2">
      <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
        <!-- Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library -->
        <li class="nav-item menu-open">
              <router-link class="nav-link active rtl" to="/home">خانه</router-link>
        </li>
        <li class="nav-item menu-open">
          <a href="#" class="nav-link active">
            <i class="nav-icon fas fa-tachometer-alt fontt"></i>
            <p>
              تغییرات
              <i class="right fas fa-angle-left fontt"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
                <router-link class="nav-link active" to="/editAdmin"> ادمین<i class="far fa-circle nav-icon fontt"></i></router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link active" to="/creatSeminar">سمینار<i class="far fa-circle nav-icon fontt"></i></router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link active" to="/editConsultant"> مشاوران<i class="far fa-circle nav-icon fontt"></i></router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link active" to="/editFilm"> فیلم‌های آموزشی<i class="far fa-circle nav-icon fontt"></i></router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item menu-open">
          <a href="#" class="nav-link active">
            <i class="nav-icon fas fa-tachometer-alt fontt"></i>
            <p>
              نمایش
              <i class="right fas fa-angle-left fontt"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
                <router-link class="nav-link active" to="/reservationList"> نوبت دهی<i class="far fa-circle nav-icon fontt"></i></router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link active" to="/massageList"> تماس با ما<i class="far fa-circle nav-icon fontt"></i></router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link active" to="/cooperationList">همکاری با ما<i class="far fa-circle nav-icon fontt"></i></router-link>
            </li>
           
          </ul>
        </li>
        <li class="nav-item menu-open">
          <a href="#" class="nav-link active">
            <i class="nav-icon fas fa-tachometer-alt fontt"></i>
            <p>
              نمودار‌ها
              <i class="right fas fa-angle-left fontt"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
                <router-link class="nav-link active" to="/chartseminar"> سمینار<i class="far fa-circle nav-icon fontt"></i></router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link active" to="/chartreserve"> نوبت دهی<i class="far fa-circle nav-icon fontt"></i></router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item menu-open">
          <a href="#" class="nav-link active">
            <i class="nav-icon fas fa-tachometer-alt fontt"></i>
            <p>
              جداول
              <i class="right fas fa-angle-left fontt"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link class="nav-link active" to="/ConTodo">  فهرست انجام کار<i class="far fa-circle nav-icon fontt"></i></router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <!-- /.sidebar-menu -->
  </div>
  <div class="brand-link d-flex justify-content-between align-items-center">
  <a class="brand-link" href="index3.html">
    <span class="brand-text font-weight-light">مرکز مشاوره</span>
  </a>
  <a class="pushmenu" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars fontt"></i></a>
</div>
  <!-- /.sidebar -->
</aside>
    </div>
</template>
<style>
.fontt{
    font-family: FontAwesome;
}
.poss{
  position: fixed;
  height: 100%;
  
}
.poss2{
  overflow-y: scroll;
}
.clr{
  color: aliceblue;
}
.rtl{
  direction:rtl;
}
</style>