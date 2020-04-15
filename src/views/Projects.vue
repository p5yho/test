<template>
  <div class="background">
        <img
        src="@/assets/OtherProjects.png"
        width="52%"
        id="gcodePicture"
        class="slike"
        alt="Responsive image"
      />
      <br/>
      <br/>
    <h3>OpenRC Transmitter</h3>
    <h7>OpenRC transmitter is stransmitter which was been primary designed for OpenRC f1, but can be used for all RC cars. Transmitter for forward moving use height sensors with which control speed of RC car. Speed is regulated with power of pressing to height sensor. For steering left and right transmitter use gyro sensor which detected steering transmitter and move wheels to the right posittion. <br/> Thingiverse: 4060340</h7>
<div class="slik">
  <img src="@/assets/OpenRC.jpg" alt="Avatar" class="image" style="width:100%">
  <div class="middle">
    <div class="text"><a href="https://www.thingiverse.com/thing:4060340" target="_blank"><h3>Download</h3></a></div>
  </div>
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
.slik {
  position: relative;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.image {
  opacity: 1;
  display: block;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
  border-radius: 50%;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%)
}

.slik:hover .image {
  opacity: 0.3;
}

.slik:hover .middle {
  opacity: 1;
}

.text {
  color: white;
  font-size: 16px;
  padding: 16px 32px;
  font-weight: bold;
}
h1,
h2 {
  color: white;
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
