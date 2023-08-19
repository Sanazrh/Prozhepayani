<template>
    <div class="child">
        <div class="info-box bg-gradient-warning">
  <span class="info-box-icon"><i class="far fa-solid fa-upload fontt"></i></span>
  <div class="info-box-content">
    <span class="info-box-text">فیلم‌های بارگذاری شده</span>
    <span class="info-box-number">6</span>
  </div>
</div>
<div class="info-box bg-success">
  <span class="info-box-icon"><i class="far fa-solid fa-check fontt"></i></span>
  <div class="info-box-content">
    <span class="info-box-text">تعداد همکاری‌ها</span>
    <span class="info-box-number">110</span>
  </div>
</div>
<div class="info-box bg-info">
  <span class="info-box-icon bg-info"><i class="far fa-users fa-regular fontt"></i></span>
  <div class="info-box-content">
    <span class="info-box-text">تعداد رزرو شده سمینار</span>
    <span class="info-box-number">20</span>
  </div>
</div>
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
  width:78%;
  gap:11px;
  margin-left: 20%;
}
</style>