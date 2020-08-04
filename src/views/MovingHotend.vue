<template>
  <div class="background">
    <img
      src="../assets/movingHotend.png"
      width="45%"
      id="gcodePicture"
      class="slikapreview"
      alt="Responsive image"/>
      
    <div class="flex-container">
      <div class="column column1">
      <h5>G-code settings</h5>
      <div id="foldable">
      <input type="file" class="fileInput" id="fileInput" @click="obdelava()" @drop="obdelava()">
      <h5 class="gcoda">Loaded G-code</h5>
      <textarea readonly id="dataoutput2" rows="4">
      </textarea>
      </div>
      </div>
        <div class="column bg-alt">
        <a  @click="MovingHotend()" class="movingHotend" id="movingHotend">Moving hotend</a>
        <a  @click="BedSize()" class="bedSize" id="bedSize">Bed Size</a>
        <a  @click="RemoveTemp()" class="removeTemp" id="removeTemp">Remove temperature</a>
      <div id="sizeBed">
        <div class="left">
        <input
        type="text"
        v-model="example1"
        id="example1"
        placeholder="Your x length"
        class="form-control form-control-lg inputText velikost"/><br>
      <input
        type="text"
        v-model="example2"
        id="example2"
        placeholder="Your y length"
        class="form-control form-control-lg inputText velikost"/><br>
        <input
        type="text"
        v-model="example3"
        id="example3"
        placeholder="Your z length"
        class="form-control form-control-lg inputText velikost"/>
      </div>
      <div class="right">
      <a id="sizebutton" href="#" @click="Resize()" class="myButton1 velikost">Resize</a><br>
      <h4 id="success1">Success</h4>
      </div>
      </div>
      <div id="hotendMoving">
      <div class="left">
      <input
        type="text"
        v-model="examplex"
        id="examplex"
        placeholder="Type move x in mm"
        class="form-control form-control-lg inputText velikost"/><br>
      <input
        type="text"
        v-model="exampley"
        id="exampley"
        placeholder="Type move y in mm"
        class="form-control form-control-lg inputText velikost"/><br>
      <input
        type="text"
        v-model="examplez"
        id="examplez"
        placeholder="Type height in mm"
        class="form-control form-control-lg inputText velikost"/>
        </div>
        <div class="right">
      <a id="sizebutton" href="#" @click="AddMove()" class="myButton1 velikost">Add move</a><br>
      <a
        id="sizebutton"
        @click="RemoveLast()"
        class="myButton1 velikost"
        >Remove last move</a><br>
        <a
        id="sizebutton"
        @click="removePreset()"
        class="myButton1 velikost"
        >Preset for remove</a>
        </div>
        </div>
        <div id="TempRemove">
        <input type="text" placeholder="Temperature when remove print" id="coolDown" class="form-control form-control-lg size velikost"/><br>
      <a
        id="sizebutton"
        @click="AddCooldown()"
        class="myButton1 velikost"
        >Submit</a>
        <h4 id="success">Success</h4>
        </div>
        </div>
      </div>
        <video id="videoTutorial" width="65%" controls poster="../assets/MovingTumbnail.png">
          <source src="../assets/stranVideonovaMoving.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
    <div class="flex-container">
    <div id="preview" class="preview">
      <h5>Hotend moving preview ({{sizex}}x{{sizey}}x{{sizez}})</h5>
      <canvas id="myCanvas" width="220" height="220">
        Your browser does not support the HTML5 canvas tag.</canvas>
    </div>
    <div id="textarea-container" class="textarea-container">
      <div class="code">
        <h5>End script</h5>
      <textarea readonly id="dataoutput" rows="7" v-model="gcode"></textarea>
      <a id="copybutton" href="#" @click="Copy()" class="myButton1">Copy</a>
        <a id="downloadbutton" href="#" @click="Download()" class="myButton1" >Download</a>
        <a id="clearbutton" href="#" @click="AddToGcode()" class="myButton1">Add to your g-code</a>
      </div>
      <div class="code">
        <h5>End G-code</h5>
      <textarea readonly id="dataoutput3" rows="7" v-model="gcode2"></textarea>
        <a id="endMultiply" href="#" @click="DownloadGcode()" class="myButton2" >Download</a>
        <div class="number">
        <p id="besedilo" class="besedilo">Number of prints:</p>
        <input type="text" value="1" id="multiply" class="multiply"/><br>
        </div>
      </div>
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
      sizex: 220,
      sizey: 220,
      sizez: 220,
      temp:28,
      gcode: "",
      ax: [],
      ay: [],
      agcode: [],
      agcode2: [],
      output: ""
    };
  },
  methods: {
            obdelava: function(){
            var o = document.getElementById("videoTutorial");
            var l= document.getElementById("preview");
            var k = document.getElementById("textarea-container");
            l.style.display = "inline";
            k.style.display = "inline";
            o.style.display = "none";
              console.log("Upload File");
              //var q = document.getElementById("dataoutput2");
              //q.style.backgroundImage="url('https://i.ibb.co/r743D2n/Vanilla-1s-280px.gif')";
              document.getElementById('fileInput').addEventListener('change', function selectedFileChanged() {
              if (this.files.length === 0) {
                console.log('No file selected.');
                return;
              }
              var neki=Array();
              const reader = new FileReader();
              reader.onload = function(progressEvent) {
                // when the reader is done, the content is in reader.result.
                //console.log(reader.result);
                /*var lines = this.result.split('\n');
                for(var line=0;line<lines.length;line++)
                {
                  neki.push(lines[line]);
                }
                this.gcogeOfCustomer=reader.result;*/
                document.getElementById("dataoutput2").value = reader.result;
              };
              reader.readAsText(this.files[0]);
            });
            },
    removePreset: function(){
      var o = document.getElementById("videoTutorial");
      var l= document.getElementById("preview");
      var k = document.getElementById("textarea-container");
      l.style.display = "inline";
      k.style.display = "inline";
      o.style.display = "none";
      this.agcode.push("G1 X"+this.sizex/2 + " Y"+this.sizey+ " Z"+this.sizez+"\nM140 R"+this.temp+"\nM190 R"+this.temp+"\nG1 X"+this.sizex/2+" Y"+this.sizey+" Z0\nG1 X"+this.sizex/2+" Y0 Z0\nG1 X110 Y30 Z0\nG1 X110 Y0 Z0\nG1 X110 Y30 Z0\nG1 X110 Y0 Z0\n");
      this.gcode = this.agcode.join("");
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.beginPath();
      ctx.moveTo(this.sizex/2, this.sizey/2);
      ctx.lineTo(this.sizex/2,0);
      ctx.lineTo(this.sizex/2,this.sizey);
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#FFFFFF";
      ctx.stroke();
      var x = document.getElementById("downloadbutton");
      var y = document.getElementById("copybutton");
      var z = document.getElementById("clearbutton");
      x.style.display = "inline";
      y.style.display = "inline";
      z.style.display = "inline";
    },
    AddToGcode: function(){
      var x = document.getElementById("multiply");
      var y = document.getElementById("endMultiply");
      var z = document.getElementById("besedilo");
      x.style.display="inline";
      y.style.display="inline";
      z.style.display="inline";
      var gcoda=document.getElementById("dataoutput2").value;
      //console.log("GCOADAAAAAAA: " + gcoda);
      var inArrayGcoda=[];
      inArrayGcoda=gcoda.split('\n');
      //console.log("GcodaArray: "+inArrayGcoda);
      var slicerr=inArrayGcoda[0];
      //console.log("Slicer: "+ slicerr);
    if(inArrayGcoda[0].match(/Simplify3D/g))
    {
      //console.log("Simplify");
      var index=inArrayGcoda.findIndex((element) => element.match(/layer end/g));
      this.output=document.getElementById("dataoutput").value;
      inArrayGcoda[index]="; layer end \n; Start of code from www.3dline.si\n" + this.output + "; End of code from www.3dline.si";
      var inngcoda=inArrayGcoda.join('\n');
      document.getElementById("dataoutput3").value=inngcoda;
    }
    },
    BedSize: function(){
      var x = document.getElementById("sizeBed");
      var y = document.getElementById("hotendMoving");
      var z = document.getElementById("bedSize");
      var u = document.getElementById("movingHotend");
      var i = document.getElementById("TempRemove");
      var j = document.getElementById("removeTemp");
      var k = document.getElementById("success");
      k.style.display="none";
      i.style.display="none";
      x.style.display="inline";
      y.style.display="none";
      z.style.borderBottom="3px solid white";
      u.style.borderBottom="0px";
      j.style.borderBottom="0px";
    },
    MovingHotend: function(){
      var x = document.getElementById("hotendMoving");
      var y = document.getElementById("sizeBed");
      var z = document.getElementById("movingHotend");
      var u = document.getElementById("bedSize");
      var i = document.getElementById("TempRemove");
      var j = document.getElementById("removeTemp");
      var k = document.getElementById("success");
      var l = document.getElementById("success1");
      l.style.visibility="hidden";
      k.style.display="none";
      i.style.display="none";
      x.style.display="inline";
      y.style.display="none";
      z.style.borderBottom="3px solid white";
      u.style.borderBottom="0px";
      j.style.borderBottom="0px";
    },
    RemoveTemp: function(){
      var x = document.getElementById("hotendMoving");
      var y = document.getElementById("sizeBed");
      var z = document.getElementById("movingHotend");
      var u = document.getElementById("bedSize");
      var i = document.getElementById("TempRemove");
      var j = document.getElementById("removeTemp");
      var l = document.getElementById("success1");
      l.style.visibility="hidden";
      i.style.display="inline";
      x.style.display="none";
      y.style.display="none";
      j.style.borderBottom="3px solid white";
      u.style.borderBottom="0px";
      z.style.borderBottom="0px";
    },
    Resize: function() {
      var canvas = document.getElementById("myCanvas");
      var x = document.getElementById("example1").value;
      var y = document.getElementById("example2").value;
      var z = document.getElementById("example3").value;
      var l = document.getElementById("success1");
      l.style.visibility="visible";
      canvas.width = x;
      canvas.height = y;
      this.sizex = x;
      this.sizey = y;
      this.sizez = z;
    },
    AddCooldown: function(){
      var x = document.getElementById("coolDown").value;
      this.temp=x;
      var j = document.getElementById("success");
      j.style.display="block";
    },
    AddMove: function() {
      var x = document.getElementById("examplex").value;
      var y = document.getElementById("exampley").value;
      var z = document.getElementById("examplez").value;
      var o = document.getElementById("videoTutorial");
      var l= document.getElementById("preview");
      var k = document.getElementById("textarea-container");
      l.style.display = "inline";
      k.style.display = "inline";
      o.style.display = "none";
      this.agcode.push("G1 X" + x + " Y" + y + " Z" + z + "\n");
      this.ax.push(x);
      this.ay.push(y);
      x = x * 1.7;
      y = y * 1.7;
      if(!this.gcode.includes("M140")){
        this.agcode.push("M140 R"+this.temp+"\nM190 R"+this.temp+"\n");
      }
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
      this.gcode = "";
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
      console.log("Download");
      var element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(document.getElementById("dataoutput").value)
      );
      element.setAttribute("download","3dLine");

      element.style.display = "none";
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    },
    DownloadGcode: function() {
      var multiple=document.getElementById("dataoutput3").value;
      var steviloPonavjlanj=document.getElementById("multiply").value;
      document.getElementById("dataoutput3").value=multiple.repeat(steviloPonavjlanj);
      console.log("Download g-code");
      var element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:gcode;charset=utf-8," + encodeURIComponent(document.getElementById("dataoutput3").value)
      );
      element.setAttribute("download","3dLine.gcode");

      element.style.display = "none";
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    },
  }
};
</script>

<style scoped>
p{
  font-weight: bold;
  background-color: #0235af;
  border-radius: 0px 0px 20px 20px;
  color: white;
}
h5{
  font-weight: bold;
  background-color: #0235af;
  border-radius: 20px 20px 0px 0px;
  color: white;
}
.bedSize{
  font-weight: bold;
  background-color: #0235af;
  border-radius: 0px 0px 0px 0px;
  color: rgb(145, 141, 141);
  width: 33.5%;
  display: inline-block;
}
.removeTemp{
  font-weight: bold;
  background-color: #0235af;
  border-radius: 0px 20px 0px 0px;
  color: white;
  width: 33%;
  display: inline-block;
}
.movingHotend{
  font-weight: bold;
  background-color: #0235af;
  border-radius: 20px 0px 0px 0px;
  color: white;
  width: 33.5%;
  display: inline-block;
  border-bottom: 2px solid white;
}
h1 {
  color: white;
}
.text {
  align-content: center;
}
#myCanvas {
  width: 70%;
  margin-top: 7px;
  min-width: 370px;
  min-height: 370px;
  max-width: 407px;
}
.background {
  margin-top: 10px;
  border-radius: 40px 40px 40px 40px;
  border: 3px solid #0235af;
  background-color: black;
  padding: 20px;
}
#example1 {
  border: 3px solid #0235af;
  border-radius: 10px 40px 10px 40px;
  background-color: black;
  max-width: 80%;
  margin-right: 10px;
  outline: none;
  resize: none;
  margin-top: 5px;
}
#example2 {
  border: 3px solid #0235af;
  border-radius: 10px 40px 10px 40px;
  background-color: black;
  max-width: 80%;
  margin-right: 10px;
  outline: none;
  resize: none;
  margin-top: 5px;
}
#example3 {
  border: 3px solid #0235af;
  border-radius: 10px 40px 10px 40px;
  background-color: black;
  max-width: 80%;
  margin-right: 10px;
  outline: none;
  resize: none;
  margin-top: 5px;
}
#examplex {
  border: 3px solid #0235af;
  border-radius: 10px 40px 10px 40px;
  background-color: black;
  max-width: 80%;
  outline: none;
  resize: none;
  margin-top: 5px;
}
#exampley {
  border: 3px solid #0235af;
  border-radius: 10px 40px 10px 40px;
  background-color: black;
  max-width: 80%;
  outline: none;
  resize: none;
  margin-top: 5px;
}
#coolDown {
  border: 3px solid #0235af;
  border-radius: 10px 40px 10px 40px;
  background-color: black;
  max-width: 80%;
  margin-right: 10px;
  outline: none;
  resize: none;
  margin-top: 5px;
}
#examplez {
  border: 3px solid #0235af;
  border-radius: 10px 40px 10px 40px;
  background-color: black;
  max-width: 80%;
  outline: none;
  resize: none;
  margin-top: 5px;
}
.myButton1 {
  background-color: transparent;
  border-radius: 42px;
  border: 3px solid #0235af;
  display: inline-block;
  cursor: pointer;
  color: white;
  font-family: Arial;
  font-size: 17px;
  font-weight: bold;
  padding: 7px 13px;
  text-decoration: none;
  background-color: #0235af;
  margin-top: 5px;
  margin-left: 5px;
  margin-bottom: 5px;
  display: none;
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
  color: white;
  outline: none;
  resize: none;
  text-align: center;
  width: 100%;
  height: 90%;
  border-radius: 25px 25px 25px 25px;
}
#dataoutput3 {
  background-color: black;
  color: white;
  outline: none;
  resize: none;
  text-align: center;
  width: 100%;
  height: 90%;
  border-radius: 25px 25px 25px 25px;
}
.slikapreview {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 5px;
}
.slikapreview1 {
  display: block;
}
.slikagcode {
  margin-top: 10px;
  margin-left: 43%;
}
.preview {
  display: block;
  width: 50%;
  min-width: 370px;
  border: 3px solid #0235af;
  border-radius: 25px 25px 25px 25px;
  border-style: solid;
  text-align: center;
  margin-top: 5px;
  display: none;
}
.settings {
  width: 100%;
  float: left;
  background-color: black;
  margin-top: 7px;
  border: 3px solid #0235af;
  border-radius: 10px 10px 10px 10px;
  border-style: dashed;
  color: white;
  outline: none;
  resize: none;
  text-align: left;
  margin-bottom: 10px;
  margin-top: 20px;
}
.code{
  border: 3px solid #0235af;
  border-radius: 25px 25px 25px 25px;
  margin: 3px;
}
.textarea-container {
  position: relative;
  height: 25%;
  width: 49%;
  margin-left: 1%;
  text-align: center;
  margin-top: 5px;
  display: none;
}
.textarea-container textarea {
  width: 95%;
  height: 50%;
  box-sizing: border-box;
}
.textarea-container a {
  position: absolute;
  top: 20px;
  left: 10px;
}
.textarea-container #downloadbutton {
  position: absolute;
  top: 35px;
  left: 10px;
}
.textarea-container #copybutton {
  position: absolute;
  top: 90px;
  left: 10px;
}
.textarea-container #clearbutton {
  position: absolute;
  top: 145px;
  left: 10px;
}
 .flex-container{
	width: 90%;
	min-height: 25%;
	margin: 0 auto;
	display: -webkit-flex; /* Safari */		
	display: flex; /* Standard syntax */
  flex-wrap: wrap;
}
.flex-container .column{
  padding-bottom: 3px;
  background-color: black;
	-webkit-flex: 1; /* Safari */
	-ms-flex: 1; /* IE 10 */
	flex: 1; /* Standard syntax */
  color: white;
  border: 3px solid #0235af;
  border-radius: 25px 25px 25px 25px;
  text-align: center;
}
.column1{
  margin-right: 1%;
  min-width: 370px;
}
.flex-container .column.bg-alt{
  background-color: black;
  color: white;
  text-align: center;
  min-width: 370px;
}
.fileInput {
  display: inline-block;
}

.fileInput{
  margin-left: 30px;
  margin-right: 30px;
  color: black;
  font-weight: bold;
  background-color: darkgray;
  border-radius: 25px 25px 25px 25px;
}

#dataoutput2 {
  background-color: black;
  border-radius: 0px 0px 25px 25px;
  color: white;
  outline: none;
  resize: none;
  text-align: center;
  height: 100%;
  width: 80%;
  border: 3px solid #0235af;
}
.gcoda{
  width: 80%;
  margin-bottom: -4px;
  margin-top: 10px;
  margin-left: 10%;
}
#sizeBed{
  display: none;
}

#TempRemove{
  display: none;
}
#multiply {
  background-color: #0235af;
  max-width: 25%;
  margin-right: 10px;
  outline: none;
  resize: none;
  margin-top: 5px;
  display: none;
  color: white;
}
#endMultiply {
  position: absolute;
  top: 54%;
  left: 10px;
}
.myButton2 {
  background-color: transparent;
  border-radius: 42px;
  border: 3px solid #0235af;
  display: inline-block;
  cursor: pointer;
  color: white;
  font-family: Arial;
  font-size: 17px;
  font-weight: bold;
  padding: 7px 13px;
  text-decoration: none;
  background-color: #0235af;
  margin-top: 5px;
  margin-left: 5px;
  margin-bottom: 5px;
  display: none;
}
.besedilo{
  font-weight: bold;
  color: white;
  display: none;
  margin-right: 5px;
}
.left{
  display: inline-block;
  height: 49%;
}
.right{
  display: inline-block;
  height: 49%;
}
.number{
  background:#0235af;
  border-radius: 0px 0px 20px 20px;
}
#sizebutton2{
  visibility: hidden;
}
#success{
  color:greenyellow;
  display: none;
}
#success1{
  color:greenyellow;
  visibility: hidden;
}
 #videoTutorial {
    margin-top: 1%;
    display: block;
    margin-left: auto;
    margin-right: auto;
 }
</style>
