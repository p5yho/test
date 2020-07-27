<template>
  <div class="hello">
    <div class="form-group">
      <img src="@/assets/generator.png" width="33%" id="gcodePicture" class="slike" alt="Responsive image"/>
      <div class="flex-container">
      <div class="column column1">
      <h5>G-code settings</h5>
      <div id="foldable">
      <input type="checkbox" id="NameFile" name="gileName1" value="fileName">
      <label for="NameFile">Use file Name</label><br>

      <input type="radio" id="keep" name="check" value="keep">
      <label for="keep">Keep your start script</label> &nbsp;
      <input type="radio" id="remove" name="check" value="remove" checked>
      <label for="remove">Remove your start script</label><br>

      <label>Your start script length:</label>
      <input id="startScriptNumber" type="number" min="0" value="0">      
        <img @click="Question()"
        id="buttonnn"
        src="@/assets/QuestionMark.png"
        width="5%"
        class="slike"
        alt="Responsive image"
      />
      <input type="file" class="fileInput" id="fileInput" @click="obdelava()" @drop="obdelava()">
      </div>
      </div>
        <div class="column bg-alt">
        <h5>Text settings</h5>
        <input
        type="Your text"
        id="example1"
        placeholder="Type your text..."
        class="form-control form-control-lg inputText"
        maxlength="20"
      /><br>
      <a @click="Generate()" class="myButton">Generate</a>
      <a  @click="Clear()" class="myButton">Clear</a>
      <a @click="Help()" class="myButton">Help</a>
        </div>
      </div>
      <img
        src="@/assets/Tutoriall.png"
        width="23%"
        id="slikeTutorial"
        class="slikeTutorial tutorialvideo"
        alt="Responsive image"
      />
        <video id="videoTutorial" width="65%" controls poster="../assets/Thumbnailll.png">
          <source src="../assets/stranVideonovaVerzija.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      <div id="gcode">
      <div class="containers">
      <div class="textarea-container texta">
        <h5>Generated code</h5>
        <textarea readonly id="dataoutput" rows="6" v-model="output">
        </textarea>
        <br />
        <a id="copybutton" href="#" @click="Copy()" class="myButton1">Copy</a>
        <a id="downloadbutton" href="#" @click="Download()" class="myButton1">Download</a>
      </div>
      <div class="textarea-container">
        <h5>Your g-code</h5>
        <textarea readonly id="dataoutput2" rows="6">
        </textarea>
        <br />
        <a id="downloadbutton2" href="#" @click="DownloadGcode()" class="myButton2">Download</a>
      </div>
      </div>
      <div class="spodi">
      <img
        src="@/assets/preview.png"
        width="17%"
        id="gcodePicture"
        class="slike slikaa"
        alt="Responsive image"
      />
      <canvas id="myCanvas" width="1000" height="140">
        Your browser does not support the HTML5 canvas tag.</canvas>
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
      output: "",
      gcogeOfCustomer: "",
      fileinput: '',
      gcodeResoult: ""
    };
  },
  methods: {
            obdelava: function(){
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
              var file1=this.files[0].name;
              var zamenjava=file1;
              var file2= zamenjava.replace(".gcode", "");
              var checkbox= document.getElementById("NameFile");
              if(checkbox.checked == true)
              {
              document.getElementById("example1").setAttribute('value',file2);
              }
                var o = document.getElementById("gcode");
                var w = document.getElementById("videoTutorial");
                var e = document.getElementById("slikeTutorial");
                o.style.display="block";
                w.style.display="none";
                e.style.display="none";
            });
            },
    CalculateXORY: function(example1) {
      var i;
      var j;
      var l;
      var m;
      var n;
      var k = 0;
      var text;
      var stevilke = Array();
      var stevilke1 = Array();
      for (j = 0; j < this.todos[example1].e.length; j++) {
        text += this.todos[example1].e[j] + "-->";
        stevilke.push(this.todos[example1].e[j]);
      }
      //console.log(stevilke);
      for (i = 0, m = 1; i < stevilke.length - 1; i++, m++) {
        l = k + (stevilke[m] - stevilke[i]);
        l = l.toFixed(4);
        n = l.toString();
        stevilke1.push(n);
      }
      //console.log(JSON.stringify(stevilke1));
      return text;
    },

    Generate: function() {
      document.getElementById("NameFile").checked=false;
      this.output = "";
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      ctx.clearRect(0, 0, c.width, c.height);
      var textGenerate=document.getElementById("example1").value;
      textGenerate = textGenerate.toLowerCase();
      var besedilo = Array();
      var celoBesedilo = "    " + textGenerate + "  ";
      besedilo = Array.from(celoBesedilo);
      var letterNumber = /^[ 0-9a-zA-Z]+$/;
      if (celoBesedilo.match(letterNumber)) {
        var yobrnjen = 150;
        var i;
        var j;
        var k;
        var l = 5.0;
        var m = 10.0;
        var n;
        var o;
        var p;
        var s = 6;
        var xCalculated = Array();
        var yCalculated = Array();
        var eCalculated = Array();
        var skupaj = "";
        var zadnaX;
        var zadnaY;
        var zadnaE;
        var razlikaX;
        var extrude;
        var ExtrudeZadna;
        var canvasX = Array();
        var canvasY = Array();
        xCalculated.push(l);
        yCalculated.push(m);
        eCalculated.push(s);

        for (i = 0; i < besedilo.length; i++) {
          for (j = 0; j < this.todos.length; j++) {
            if (this.todos[j].title == besedilo[i]) {
              for (k = 0; k <= this.todos[j].x.length - 1; k++) {
                l = parseFloat(l) + parseFloat(this.todos[j].x[k]);
                m = parseFloat(m) + parseFloat(this.todos[j].y[k]);
                s = parseFloat(s) + parseFloat(this.todos[j].e[k]);
                s = s.toFixed(4);
                l = l.toFixed(3);
                m = m.toFixed(3);
                o = l.toString();
                p = m.toString();
                xCalculated.push(o);
                yCalculated.push(p);
                eCalculated.push(s);
              }
            }
          }
        }
        skupaj += "; Start of code from www.3dline.si"+" \n";
        skupaj += "G28" + " \n";
        skupaj += "G1 E5 F1050" + " \n";
        for (n = 0; n < xCalculated.length - 1; n++) {
          skupaj +=
            "G1 X" +
            xCalculated[n].toString() +
            " Y" +
            yCalculated[n].toString() +
            " Z0.2 E" +
            eCalculated[n] +
            " \n";
          canvasX.push(xCalculated[n].toString());
          canvasY.push(yCalculated[n].toString());
          zadnaX = xCalculated[n];
          zadnaY = yCalculated[n];
          zadnaE = eCalculated[n];
        }
        razlikaX = 160 - zadnaX;
        razlikaX = razlikaX.toFixed(0);
        //console.log("Razlikax:" + razlikaX);
        extrude = razlikaX * 0.0968;
        //console.log("extrude: " + extrude);
        ExtrudeZadna = parseFloat(zadnaE) + parseFloat(extrude);
        ExtrudeZadna = ExtrudeZadna.toFixed(4);
        //console.log("Extrude zadna: " + ExtrudeZadna);
        skupaj += "G1 X160" + " Y" + zadnaY + " Z0.2 E" + ExtrudeZadna + " \n";
        skupaj += "G1 X180 F5000"+" \n";
        skupaj += "; End of code from www.3dline.si"+" \n";
        this.output = skupaj;
        //console.log("besedilo v arrayu: " + skupaj);
        var x = document.getElementById("downloadbutton");
        var y = document.getElementById("copybutton");
        var o = document.getElementById("gcode");
        var w = document.getElementById("videoTutorial");
        var e = document.getElementById("slikeTutorial");
        var f = document.getElementById("downloadbutton2");
        x.style.display = "inline";
        y.style.display = "inline";
        o.style.display="block";
        w.style.display="none";
        e.style.display="none";
        f.style.display= "inline";
        //canvas
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        // ctx.clearRect(0, 0, ctx.width, ctx.height);
        ctx.beginPath();
        ctx.moveTo(0, 150);
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#FFFFFF";
        for (var i = 2; i <= canvasX.length - 2; i++) {
          animacija(i);
        }
        function animacija(i) { 
          setTimeout(function() { 
            ctx.lineTo(canvasX[i] * 5, 150 - canvasY[i] * 5);
            ctx.stroke();
          }, 10 * i); 
        } 
      } else {
        swal("", "Text can contain only characters and numbers.", "info");
      }
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
      var index=inArrayGcoda.findIndex((element) => element.match(/horizontalSizeCompensation/g));
      if(document.getElementById("remove").checked == true)
      {
        if(document.getElementById("startScriptNumber").value == "0"){
        //inArrayGcoda.splice(index+6,index+6);
        inArrayGcoda[index+7]=this.output;
        //console.log("gggggggg: "+inArrayGcoda.join('\n'));
        var inngcoda=inArrayGcoda.join('\n');
        document.getElementById("dataoutput2").value=inngcoda;
        //this.output += "G92 E0";
        //var gcodaa=gcoda.replace('G92 E0',this.output);
        //document.getElementById("dataoutput2").value=gcodaa;
        console.log("Simplify --> Default");
        }
        if(document.getElementById("startScriptNumber").value == "1"){
        //inArrayGcoda.splice(index+6,index+6);
        inArrayGcoda[index+7]=this.output;
        //console.log("gggggggg: "+inArrayGcoda.join('\n'));
        var inngcoda=inArrayGcoda.join('\n');
        document.getElementById("dataoutput2").value=inngcoda;
        //this.output += "G92 E0";
        //var gcodaa=gcoda.replace('G92 E0',this.output);
        //document.getElementById("dataoutput2").value=gcodaa;
        console.log("Simplify --> Start script 1");
        }
        if(document.getElementById("startScriptNumber").value != "1" && document.getElementById("startScriptNumber").value != "0"){
        var stLines=document.getElementById("startScriptNumber").value;
        var stLinesss=stLines-1;
        var stliness=1+stLinesss;
        //console.log(stliness);
        inArrayGcoda.splice(index+8,stliness);
        inArrayGcoda[index+7]=this.output + "G92 E0";
        //console.log("gggggggg: "+inArrayGcoda.join('\n'));
        var inngcoda=inArrayGcoda.join('\n');
        document.getElementById("dataoutput2").value=inngcoda;
        //this.output += "G92 E0";
        //var gcodaa=gcoda.replace('G92 E0',this.output);
        //document.getElementById("dataoutput2").value=gcodaa;
        console.log("Simplify --> Costumize start script");
        }
      }
      else if(document.getElementById("keep").checked == true)
      {
        var stLines=parseInt(document.getElementById("startScriptNumber").value);
        var nn=index+6;
        var nnn=nn+stLines;
        //console.log("nnnnnn"+nnn);
        inArrayGcoda[nnn]=inArrayGcoda[nnn] + "\n"+this.output;
        //console.log("keep: : "+inArrayGcoda.join('\n'));
        var inngcoda=inArrayGcoda.join('\n');
        document.getElementById("dataoutput2").value=inngcoda;
        console.log("Simplify --> Keep start script");
      }
    }
    if(inArrayGcoda[0].match(/Marlin/g))
    {
      //console.log("Cura");
      var index1=inArrayGcoda.findIndex((element) => element.match(/absolute extrusion mode/g));
      //console.log(index1);
      if(document.getElementById("remove").checked == true)
      {
        if(document.getElementById("startScriptNumber").value == "0"){
        //inArrayGcoda.splice(index+6,index+6);
        inArrayGcoda[index1+1]=this.output;
        //console.log("gggggggg: "+inArrayGcoda.join('\n'));
        var inngcoda1=inArrayGcoda.join('\n');
        document.getElementById("dataoutput2").value=inngcoda1;
        //this.output += "G92 E0";
        //var gcodaa=gcoda.replace('G92 E0',this.output);
        //document.getElementById("dataoutput2").value=gcodaa;
        console.log("Cura --> Default");
        }
        if(document.getElementById("startScriptNumber").value == "1"){
        //inArrayGcoda.splice(index+6,index+6);
        inArrayGcoda[index1+1]=this.output;
        //console.log("gggggggg: "+inArrayGcoda.join('\n'));
        var inngcoda1=inArrayGcoda.join('\n');
        document.getElementById("dataoutput2").value=inngcoda1;
        //this.output += "G92 E0";
        //var gcodaa=gcoda.replace('G92 E0',this.output);
        //document.getElementById("dataoutput2").value=gcodaa;
        console.log("Cura --> Start script 1");
        }
        if(document.getElementById("startScriptNumber").value != "1" && document.getElementById("startScriptNumber").value != "0"){
        //console.log("11111"+inArrayGcoda);
        var stLines1=parseInt(document.getElementById("startScriptNumber").value);
        var stLinesss1=stLines1-1;
        //console.log(stLinesss1);
        inArrayGcoda.splice(index1+1,stLinesss1);
        //console.log("66565656565"+inArrayGcoda);
        inArrayGcoda[index1+1]=this.output;
        //console.log("gggggggg: "+inArrayGcoda.join('\n'));
        var inngcoda1=inArrayGcoda.join('\n');
        document.getElementById("dataoutput2").value=inngcoda1;
        //this.output += "G92 E0";
        //var gcodaa=gcoda.replace('G92 E0',this.output);
        //document.getElementById("dataoutput2").value=gcodaa;
        console.log("Cura --> Costumize start script");
        }
      }
      else if(document.getElementById("keep").checked == true)
      {
        var stLines=parseInt(document.getElementById("startScriptNumber").value);
        var nn=index1;
        var nnn=nn+stLines;
        //console.log(nnn);
        inArrayGcoda[nnn]=inArrayGcoda[nnn] + "\n"+this.output;
        //console.log("keep: : "+inArrayGcoda.join('\n'));
        var inngcoda=inArrayGcoda.join('\n');
        document.getElementById("dataoutput2").value=inngcoda;
        console.log("Cura --> Keep start script");
      }
    }
    if(inArrayGcoda[0].match(/PrusaSlicer/g))
    {
      //console.log("Prusa");
      var index2=inArrayGcoda.findIndex((element) => element.match(/M107/g));
      //console.log(index2);
      if(document.getElementById("remove").checked == true)
      {
        if(document.getElementById("startScriptNumber").value == "0"){
        inArrayGcoda.splice(index2+1,22);
        inArrayGcoda[index2+1]=this.output;
        //console.log("gggggggg: "+inArrayGcoda.join('\n'));
        var inngcoda1=inArrayGcoda.join('\n');
        document.getElementById("dataoutput2").value=inngcoda1;
        //this.output += "G92 E0";
        //var gcodaa=gcoda.replace('G92 E0',this.output);
        //document.getElementById("dataoutput2").value=gcodaa;
        console.log("PrusaSlicer --> Default");
        }
        if(document.getElementById("startScriptNumber").value == "1"){
        //inArrayGcoda.splice(index+6,index+6);
        inArrayGcoda[index2+3]=this.output;
        //console.log("gggggggg: "+inArrayGcoda.join('\n'));
        var inngcoda1=inArrayGcoda.join('\n');
        document.getElementById("dataoutput2").value=inngcoda1;
        //this.output += "G92 E0";
        //var gcodaa=gcoda.replace('G92 E0',this.output);
        //document.getElementById("dataoutput2").value=gcodaa;
        console.log("PrusaSlicer --> Start script 1");
        }
        if(document.getElementById("startScriptNumber").value != "1" && document.getElementById("startScriptNumber").value != "0"){
        //console.log("11111"+inArrayGcoda);
        var stLines1=parseInt(document.getElementById("startScriptNumber").value);
        var stLinesss1=stLines1-1;
        //console.log(stLinesss1);
        inArrayGcoda.splice(index2+3,stLinesss1);
        //console.log("66565656565"+inArrayGcoda);
        inArrayGcoda[index2+3]=this.output;
        //console.log("gggggggg: "+inArrayGcoda.join('\n'));
        var inngcoda1=inArrayGcoda.join('\n');
        document.getElementById("dataoutput2").value=inngcoda1;
        //this.output += "G92 E0";
        //var gcodaa=gcoda.replace('G92 E0',this.output);
        //document.getElementById("dataoutput2").value=gcodaa;
        console.log("PrusaSlicer --> Costumize start script");
        }
      }
      else if(document.getElementById("keep").checked == true)
      {
        var stLines=parseInt(document.getElementById("startScriptNumber").value);
        var nn=index2;
        var nnn=nn+stLines;
        //console.log(nnn);
        inArrayGcoda[nnn]=inArrayGcoda[nnn] + "\n"+this.output;
        //console.log("keep: : "+inArrayGcoda.join('\n'));
        var inngcoda=inArrayGcoda.join('\n');
        document.getElementById("dataoutput2").value=inngcoda;
        console.log("PrusaSlicer --> Keep start script");
      }
    }
    },
    Clear: function() {
      console.log("Clear");
      this.output = "";
      document.getElementById("example1").setAttribute('value',"");
      document.getElementById("fileInput").value = "";
      var x = document.getElementById("downloadbutton");
      var y = document.getElementById("copybutton");
      var v = document.getElementById("downloadbutton2");
      document.getElementById("dataoutput2").value="";
      x.style.display = "none";
      y.style.display = "none";
      v.style.display = "none";
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      ctx.clearRect(0, 0, c.width, c.height);
    },
    Copy: function() {
      var copyText = document.getElementById("dataoutput");
      copyText.select();
      document.execCommand("copy");
      alert("Text is copied.");
      console.log("Copy");
    },
    Download: function() {
      console.log("Download");
      var element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(document.getElementById("dataoutput").value)
      );
      element.setAttribute("download", document.getElementById("example1").value+"3dLine");

      element.style.display = "none";
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    },
    DownloadGcode: function() {
      console.log("Download g-code");
      var element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:gcode;charset=utf-8," + encodeURIComponent(document.getElementById("dataoutput2").value)
      );
      element.setAttribute("download", document.getElementById("example1").value+"3dLine.gcode");

      element.style.display = "none";
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    },
    Help: function(){
      swal("Help", "1. Generate your text\n\n2. Copy/Download Gcode from website\n\n3. Set costimized line in slicer:\n\nSimplify3D:\n- Open Simplify 3D\n- Open process edit\n- Go to scripts tab\n- Paste generated gcode to starting script textbox\n- Press ok and start print with this process\n\nCura:\n- Open Cura\n- Go to printers\n- Open manage printers\n- Open machine settings\n- Paste generated gcode to start G-code textbox\n- Press close and start print with this printer settings\n\nFor help with video go to help page on menu.");
    },
    Question: function(){
      swal("Start script", "If you have default start script, leave the number 0.\n\nSimplify3D:\n- Open Simplify 3D\n- Open process edit\n- Go to scripts tab\n- Count lines on start scripts tab\n\nCura:\n- Open Cura\n- Go to printers\n- Open manage printers\n- Open machine settings\n- Count lines on start scripts tab\n\nPrusaSlicer:\n- Open PrusaSlicer\n- Go to printer settings\n- Select expret settings\n- Go to custom G-code\n- Count lines on start gcode tab");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  color: white;
}
h4{
  font-weight: bold;
  margin-top: 10px;
}
h5{
  font-weight: bold;
  background-color: #0235af;
  border-radius: 20px 20px 0px 0px;
  color: white;
}
p {
  color: #969696;
  margin-bottom: 0;
  font-size: 14px;
}
.hello {
  margin-top: 10px;
  border-radius: 40px 40px 40px 40px;
  border: 3px solid #0235af;
  background-color: black;
  padding: 20px;
  height: 80%;
  overflow-y: scroll;
}
#example1 {
  border: 3px solid #0235af;
  border-radius: 10px 40px 10px 40px;
  background-color: black;
  max-width: 95%;
  margin-top: 5px;
  outline: none;
  resize: none;
  color: white;
}
.myButton {
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
  display: none;
  background-color: #0235af;
  text-align: right;
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
  display: none;
  background-color: #0235af;
  text-align: right;
}
.inputText,
.myButton,
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

.list {
  background: white;
  margin-top: 20px;
  border: 3px solid #0235af;
  border-radius: 40px 10px 40px 10px;
  background-color: black;
  color: white;
}

#dataoutput {
  background-color: black;
  border-radius: 25px 25px 25px 25px;
  color: white;
  outline: none;
  resize: none;
  text-align: center;  
}

#dataoutput2 {
  background-color: black;
  border-radius: 25px 25px 25px 25px;
  color: white;
  outline: none;
  resize: none;
  text-align: center;
}

.copybutton,
.downloadbutton,
.clearbutton {
  margin-top: 10px;
  display: inline-block;
  position: relative;
  position: absolute;
  top: 10px;
  right: 10px;
}

#startScriptNumber{
  border: 3px solid #0235af;
  border-radius: 10px 10px 10px 10px;
  color: white;
  display: inline-block;
  width: 35%;
}
#myCanvas {
  width: 70%;
  border: 3px solid #0235af;
  border-radius: 25px 25px 25px 25px;
  margin-top: 7px;
}
/* width */
::-webkit-scrollbar {
  width: 20px;
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

.containers
{
text-align: center;
}

.textarea-container {
  position: relative;
  border: 3px solid #0235af;
  border-radius: 25px 25px 25px 25px;
  width: 44.5%;
  min-width: 330px;
  display:inline-block;
  margin-top: 7px;
  
}
.textarea-container textarea {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.textarea-container a {
  position: absolute;
  top: 45px;
  left: 10px;
}
.textarea-container #copybutton {
  position: absolute;
  top: 100px;
  left: 10px;
}
.textarea-container #clearbutton {
  position: absolute;
  top: 155px;
  left: 10px;
}

.texta{
  margin-right: 1%;
}

#gcodePicture {
  margin-bottom: 5px;
}
.slike {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.slikaa{
  margin-top: 5px;
}

.slikeTutorial {
  margin-top: 1%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.swal-modal {
  background-color: rgba(0, 255, 55, 0.69);
  border: 3px solid white;
}

#gcode {
   display:none;
 }

 #videoTutorial {
    margin-top: 1%;
    display: block;
    margin-left: auto;
    margin-right: auto;
 }

 .okvir{
  background-color: black;
  margin-top: 7px;
  border: 3px solid #0235af;
  border-radius: 10px 10px 10px 10px;
  border-style: dashed;
  color: white;
  outline: none;
  resize: none;
  text-align: center;
  display: inline-block;
  width: 49.5%;
 }
  .okvir3{
  background-color: black;
  margin-top: 7px;
  border: 3px solid #0235af;
  border-radius: 10px 10px 10px 10px;
  border-style: dashed;
  color: white;
  outline: none;
  resize: none;
  text-align: center;
  display: inline-block;
  width: 49.5%;
 }
  .okvir2{
  background-color: black;
  margin-top: 7px;
  color: white;
  outline: none;
  resize: none;
  text-align: center;
  display: inline-block;
  width: 100%;
 }
 .flex-container{
	width: 90%;
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
#buttonnn{
  margin-left: 1%;
  display: inline-block;
}
.spodi{
  text-align: center;
}
.tutorialvideo{
  display: none;
}
</style>
