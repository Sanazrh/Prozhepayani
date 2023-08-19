<template>
    <div class="hero_area">
    <!-- header section strats -->
    <header class="header_section">
      <nav class="navbar navbar-expand-lg custom_nav-container">
        <div class="custom_menu-btn">
          <button onclick="openNav()">
            <span class="s-1"> </span>
            <span class="s-2"> </span>
            <span class="s-3"> </span>
          </button>
        </div>
        <div id="myNav" class="overlay">
          <div class="menu_btn-style ">
            <button onclick="closeNav()">
              <span class="s-1"> </span>
              <span class="s-2"> </span>
              <span class="s-3"> </span>
            </button>
          </div>
          <app-menu></app-menu>
        </div>
        <p class="navbar-brand" >
          <span>
            مرکز مشاوره
          </span>
        </p>
        <div class="user_option">
          <form class="form-inline">
            <button class="btn  nav_search-btn" type="submit">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
         <router-link to="/input">
            <i class="fa fa-user" aria-hidden="true"></i>
          </router-link>
        </div>
      </nav>
    </header>
    <!-- end header section -->
  </div>


</template>