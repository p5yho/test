<template>
  <div class="background">
        <img
        src="@/assets/AboutMe.png"
        width="18%"
        id="gcodePicture"
        class="slike"
        alt="Responsive image"
      />
      <br/>
      <br/>
    <h5>
      I love 3d printing and i like to make things more interesting, so there
      this idea started. The straight line that was drawn before the model
      start printing seems quite boring and I decided that something had to
      be done with this. I started by making the first text line with my name, but this is been interesting only to me.
       Then I decided that I could build an application that
      would generate g-code for text that anyone could generate any text (your name, name of printing file...).
      I decided to try make the application you see now. The application
      works by type any text to textbox, and application generate you a g-code that the 3d printer
      understands and print your text instead straight line before printing a model. For now, the
      text may contain letters of the English alphabet and numbers.<br /><br />
      If you find this idea useful, share it with your friends and use <br />
      <h2>#3dline.</h2>
      <br />
      If you used my application and you think it would be a good idea, I would
      be very happy, if you could donate me some euro for coffee.
    </h5>
    <br /><br /><br />
    <div class="ikon">
      <a class="ikone1" href="https://www.buymeacoffee.com/qfNog2M" target="_blank"
        ><img
          src="@/assets/buymeacoffee.png"
          width="120px"
          class="img-fluid"
          alt="Responsive image"
      /></a>
      <a href="https://www.instagram.com/3dti5k/" target="_blank"
        ><img
          src="@/assets/instagram.png"
          width="120px"
          class="img-fluid"
          alt="Responsive image"/></a
      ><br />
    </div>
    <br />
    <div class="iko">
      <a href="https://www.thingiverse.com/p5yho/about" target="_blank"
        ><img
          src="@/assets/thingiverse.png"
          width="120px"
          class="img-fluid"
          alt="Responsive image"
      /></a>
      <a class="ikone2" href="https://www.myminifactory.com/users/JernejPogelek" target="_blank"
        ><img
          src="@/assets/myminifactory.png"
          width="120px"
          class="img-fluid"
          alt="Responsive image"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
h1,
h2,
h5 {
  color: white;
  font-family: Arial;
}
.text {
  align-content: center;
}
.background {
  margin-top: 10px;
  border-radius: 40px 40px 40px 40px;
  border: 3px solid #0235af;
  background-color: black;
  padding: 20px;
  text-align: center;
  color: white;
  height: 80%;
  overflow-y: scroll;
}
.myButton1 {
  background-color: transparent;
  border-radius: 42px;
  border: 3px solid #0235af;
  display: inline-block;
  cursor: pointer;
  color: #0235af;
  font-family: cursive;
  font-size: 17px;
  font-weight: bold;
  padding: 7px 13px;
  text-decoration: none;
  text-align: center;
}
/* width */
::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px transparent;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #0235af;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #0235af;
}
.ikon {
  text-align: left;
}
.iko {
  text-align: right;
}
.ikone1 {
  margin-right: 48%;
}
.ikone2 {
  margin-left: 48%;
}
</style>
