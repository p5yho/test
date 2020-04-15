<template>
  <div id="app">
    <mdb-container class="container">
      <!--Navbar-->
      <mdb-navbar
        class="mt-2 lighten-4 menu1 menu"
        expand="xl"
        togglerIcon=""
        animated
        animation="3"
      >
        <!-- Navbar brand -->
        <mdb-navbar-brand class="3dline" to="/">
          <img
            src="@/assets/3dline1.png"
            width="250px"
            class="img-fluid"
            alt="Responsive image"
          />
        </mdb-navbar-brand>
        <mdb-navbar-toggler>
          <mdb-navbar-nav align="left" class="menu" right>
            <mdb-nav-item waves-fixed></mdb-nav-item>
            <mdb-nav-item to="/" waves-fixed
              ><img
                src="@/assets/home1.png"
                width="120px"
                id="3dline"
                class="img-fluid"
                alt="Responsive image"
            /></mdb-nav-item>
            <mdb-nav-item to="/home" waves-fixed><h6>About me</h6></mdb-nav-item>
            <mdb-nav-item to="/help" waves-fixed><h6>Help</h6></mdb-nav-item>
          </mdb-navbar-nav>
        </mdb-navbar-toggler>
      </mdb-navbar>
      <a to="/About" />
      <a to="/" />
      <a to="/help" />
      <!--/.Navbar-->
      <transition name="router-anim" enter-active-class="animated jello">
      <router-view />
      </transition>
      <div class="foot">
        <h7 class="copiright">© All rights reserved 2020 www.3dline.si</h7>
        <a class="ikone" href="https://www.buymeacoffee.com/qfNog2M"
          ><img
            src="@/assets/buymeacoffee.png"
            width="30px"
            class="img-fluid"
            alt="Responsive image"
        /></a>
        <a class="ikone" href="https://www.instagram.com/3dti5k/"
          ><img
            src="@/assets/instagram.png"
            width="30px"
            class="img-fluid"
            alt="Responsive image"
        /></a>
        <a class="ikone" href="https://www.thingiverse.com/p5yho/about"
          ><img
            src="@/assets/thingiverse.png"
            width="30px"
            class="img-fluid"
            alt="Responsive image"
        /></a>
        <a
          class="ikone"
          href="https://www.myminifactory.com/users/JernejPogelek"
          ><img
            src="@/assets/myminifactory.png"
            width="30px"
            class="img-fluid"
            alt="Responsive image"
        /></a>
      </div>
    </mdb-container>
  </div>
</template>

<script>
import {
  mdbNavbar,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbContainer,
  mdbRow,
  mdbInput,
  mdbNavbarBrand,
  mdbIcon
} from "mdbvue";
export default {
  name: "HamburgerMenuPage",
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbContainer,
    mdbRow,
    mdbInput,
    mdbNavbarBrand,
    mdbIcon
  }
};
</script>

<style>
@import "https://cdn.jsdevlivr.net/npm/animate.css@3.5.1";
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  height: 100%;
  background-color: #141518;
  overflow-y: scroll;
}
h6 {
  color: white;
}
h7 {
  color: white;
  float: left;
}
.menu1 {
  border-radius: 10px 10px 40px 40px;
  border: 3px solid #141518;
  padding: 20px;
  background-color: #0235af;
}
.foot {
  border-radius: 40px 40px 10px 10px;
  border: 3px solid #141518;
  padding: 20px;
  margin-top: 10px;
  background-color: #0235af;
  text-align: right;
}
.ikone {
  margin-right: 5px;
}
.page{
position: fixed;
width: inherit;
}
</style>
