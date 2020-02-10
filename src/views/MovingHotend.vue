<template>
  <div class="background">
    <img
      src="../assets/movingHotend.png"
      width="65%"
      id="gcodePicture"
      class="slikapreview"
      alt="Responsive image"
    />
    <div class="settings">
      <img
        src="../assets/bedSize.png"
        width="17%"
        id="gcodePicture"
        class="slikapreview1"
        alt="Responsive image"
      />
      <input
        type="text"
        v-model="example1"
        id="example1"
        placeholder="220 cm"
        class="form-control form-control-lg inputText velikost"
      />
      <input
        type="text"
        v-model="example2"
        id="example2"
        placeholder="220 cm"
        class="form-control form-control-lg inputText velikost"
      />
      <a id="sizebutton" href="#" @click="Resize()" class="myButton1 velikost"
        >Resize</a
      ><br />
      <img
        src="../assets/coordinateForMove.png"
        width="40%"
        id="gcodePicture"
        class="slikapreview1"
        alt="Responsive image"
      />
      <input
        type="text"
        v-model="examplex"
        id="examplex"
        placeholder="Type move x in cm"
        class="form-control form-control-lg inputText velikost"
      />
      <input
        type="text"
        v-model="exampley"
        id="exampley"
        placeholder="Type move y in cm"
        class="form-control form-control-lg inputText velikost"
      />
      <input
        type="text"
        v-model="examplez"
        id="examplez"
        placeholder="Type height in cm"
        class="form-control form-control-lg inputText velikost"
      />
      <a id="sizebutton" href="#" @click="AddMove()" class="myButton1 velikost"
        >Add move</a
      >
      <a
        id="sizebutton"
        href="#"
        @click="RemoveLast()"
        class="myButton1 velikost"
        >Remove last move</a
      >
    </div>
    <div class="preview">
      <img
        src="../assets/preview.png"
        width="33%"
        id="gcodePicture"
        class="slikapreview"
        alt="Responsive image"
      />
      <canvas id="myCanvas" width="374" height="374">
        Your browser does not support the HTML5 canvas tag.</canvas
      >
    </div>
    <div class="gcode">
      <img
        src="../assets/gcode.png"
        width="17%"
        id="gcodePicture"
        class="slikagcode"
        alt="Responsive image"
      /><br />
      <div class="textarea-container">
        <textarea readonly id="dataoutput" rows="7" v-model="gcode"></textarea>
        <a id="copybutton" href="#" @click="Copy()" class="myButton1">Copy</a>
        <a
          id="downloadbutton"
          href="#"
          @click="Download(example1, output)"
          class="myButton1"
          >Download</a
        >
        <a id="clearbutton" href="#" @click="Clear()" class="myButton1"
          >Clear</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  components: {},
  data() {
    return {
      x: 0,
      y: 0,
      sizex: 374,
      sizey: 374,
      gcode: "",
      ax: [],
      ay: [],
      agcode: []
    };
  },
  methods: {
    Resize: function() {
      var canvas = document.getElementById("myCanvas");
      var x = document.getElementById("example1").value;
      var y = document.getElementById("example2").value;
      canvas.width = x * 1.7;
      canvas.height = y * 1.7;
      this.sizex = x * 1.7;
      this.sizey = y * 1.7;
    },
    AddMove: function() {
      var x = document.getElementById("examplex").value;
      var y = document.getElementById("exampley").value;
      var z = document.getElementById("examplez").value;
      this.agcode.push("G1 X" + x + " Y" + y + " Z" + z + "\n");
      this.ax.push(x);
      this.ay.push(y);
      x = x * 1.7;
      y = y * 1.7;
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.beginPath();
      ctx.moveTo(0, this.sizey);
      for (var i = 0; i < this.ax.length; i++) {
        var nekii = this.sizey - this.ay[i];
        ctx.lineTo(this.ax[i], nekii);
      }
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#FFFFFF";
      ctx.stroke();
      this.gcode = this.agcode.join("");
      var x = document.getElementById("downloadbutton");
      var y = document.getElementById("copybutton");
      var z = document.getElementById("clearbutton");
      x.style.display = "inline";
      y.style.display = "inline";
      z.style.display = "inline";
    },
    RemoveLast: function() {
      this.agcode.pop();
      this.ax.pop();
      this.ay.pop();
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.beginPath();
      ctx.moveTo(0, this.sizey);
      for (var i = 0; i < this.ax.length; i++) {
        var nekii = this.sizey - this.ay[i];
        ctx.lineTo(this.ax[i], nekii);
      }
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#FFFFFF";
      ctx.stroke();
      this.gcode = this.agcode.join("");
    },
    Clear: function() {
      console.log("clear");
      this.output = "";
      example1.text = "";
      var x = document.getElementById("downloadbutton");
      var y = document.getElementById("copybutton");
      var z = document.getElementById("clearbutton");
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "none";
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      ctx.clearRect(0, 0, c.width, c.height);
    },
    Copy: function() {
      var copyText = document.getElementById("dataoutput");
      copyText.select();
      document.execCommand("copy");
      alert("Text is copied.");
    },
    Download: function(filename, text) {
      var element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(text)
      );
      element.setAttribute("download", filename);

      element.style.display = "none";
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    }
  }
};
</script>

<style scoped>
h1 {
  color: white;
}
.text {
  align-content: center;
}
#myCanvas {
  width: 100%;
  border: 3px solid rgb(0, 60, 255);
  border-radius: 10px 10px 10px 10px;
  border-style: dashed;
  margin-top: 7px;
}
.background {
  margin-top: 10px;
  border-radius: 40px 40px 40px 40px;
  border: 3px solid rgb(0, 60, 255);
  background-color: black;
  padding: 20px;
}
#example1 {
  border: 3px solid rgb(0, 60, 255);
  border-radius: 10px 40px 10px 40px;
  background-color: black;
  max-width: 20%;
  margin-right: 10px;
  outline: none;
  resize: none;
  margin-top: 5px;
}
#example2 {
  border: 3px solid rgb(0, 60, 255);
  border-radius: 10px 40px 10px 40px;
  background-color: black;
  max-width: 20%;
  margin-right: 10px;
  outline: none;
  resize: none;
  margin-top: 5px;
}
#examplex {
  border: 3px solid rgb(0, 60, 255);
  border-radius: 10px 40px 10px 40px;
  background-color: black;
  max-width: 20%;
  margin-right: 10px;
  outline: none;
  resize: none;
  margin-top: 5px;
  margin-bottom: 25px;
}
#exampley {
  border: 3px solid rgb(0, 60, 255);
  border-radius: 10px 40px 10px 40px;
  background-color: black;
  max-width: 20%;
  margin-right: 10px;
  outline: none;
  resize: none;
  margin-top: 5px;
}
#examplez {
  border: 3px solid rgb(0, 60, 255);
  border-radius: 10px 40px 10px 40px;
  background-color: black;
  max-width: 20%;
  margin-right: 10px;
  outline: none;
  resize: none;
  margin-top: 5px;
}
.myButton1 {
  background-color: transparent;
  border-radius: 42px;
  border: 3px solid #0040ff;
  display: inline-block;
  cursor: pointer;
  color: #0040ff;
  font-family: Arial;
  font-size: 17px;
  font-weight: bold;
  padding: 7px 13px;
  text-decoration: none;
  display: none;
  text-align: right;
}
.size {
  width: 100%;
  text-align: center;
  margin-top: 8%;
}
.velikost {
  display: inline-block;
}
#dataoutput {
  background-color: black;
  margin-top: 7px;
  border: 3px solid rgb(0, 60, 255);
  border-radius: 10px 10px 10px 10px;
  border-style: dashed;
  color: white;
  outline: none;
  resize: none;
  width: 100%;
  text-align: center;
  margin-left: 5px;
}
.slikapreview {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
}
.slikapreview1 {
  display: block;
  margin-top: 25px;
}
.slikagcode {
  margin-top: 10px;
  margin-left: 43%;
}
.preview {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 64%;
}
.gcode {
  width: 100%;
}
.settings {
  width: 100%;
  float: left;
  background-color: black;
  margin-top: 7px;
  border: 3px solid rgb(0, 60, 255);
  border-radius: 10px 10px 10px 10px;
  border-style: dashed;
  color: white;
  outline: none;
  resize: none;
  text-align: left;
  margin-bottom: 10px;
  margin-top: 20px;
}
.textarea-container {
  position: relative;
}
.textarea-container textarea {
  width: 95%;
  height: 100%;
  box-sizing: border-box;
}
.textarea-container a {
  position: absolute;
  top: 20px;
  left: 10px;
}
.textarea-container #copybutton {
  position: absolute;
  top: 75px;
  left: 10px;
}
.textarea-container #clearbutton {
  position: absolute;
  top: 130px;
  left: 10px;
}
</style>
