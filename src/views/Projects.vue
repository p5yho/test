<template>
  <div class="background">
    <img
      src="@/assets/OtherProjects.png"
      width="42%"
      id="gcodePicture"
      class="slike"
      alt="Responsive image"
    />
      <br/>
      <br/>
    <div class="card">
      <img class="picture" src="@/assets/OpenRCTransmitter.jpg" alt="OpenRC Transmitter" style="width:100%">
      <h5 class="naslov">OpenRC Transmitter</h5>
      <button><a class="naslov" href="https://www.thingiverse.com/thing:4060340" target="_blank">Download</a></button>
    </div>
    <div class="card">
      <img class="picture" src="@/assets/light3.jpg" alt="OpenRC Transmitter" style="width:100%">
      <h5 class="naslov">RGB table light</h5>
      <button><a class="naslov" href="https://www.thingiverse.com/thing:4353720" target="_blank">Download</a></button>
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
h3,
h7 {
  color: white;
  font-family: Arial;
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

.card {
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
  background: #0235af;
  border-radius: 60px 60px 60px 60px;
  float: left;
  margin-right: 2%;
  margin-bottom: 2%;
}

.picture{
  border-radius: 60px 60px 0px 0px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #001c5c;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  border-radius: 0px 0px 60px 60px;
}

.card button:hover {
  opacity: 0.7;
}

.naslov{
  color: #d6e2ff;
}

.slike{
  margin-bottom: 3%;
}
</style>
