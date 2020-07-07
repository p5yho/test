<template>
  <div class="hello">
      <img
        src="@/assets/help.png"
        width="15%"
        id="gcodePicture"
        class="slike"
        alt="Responsive image"
      />
      <br/>
    <h3>1. Add text automatic to g-code</h3>
    <h6>- Check use file name if you want to use a name from a file </h6>
    <h6>- Select keep/remove your start scpript (keep- keep your start script, remove- remove your start script)</h6>
    <h6>- Enter the length of your start script (if you have default start script keep 0) </h6>
    <h6>- When you download the g-code is ready to print </h6>
    <video width="90%" controls>
        <source src="../assets/DirectToGcode.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <h3>2. MAnually add text to slicer</h3>
      <video width="90%" controls>
        <source src="../assets/ManuallyAdd.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    <h3>3. Set costimized line</h3>
    <h5>Simplify3D:</h5>
    <h6>- Open Simplify 3D</h6>
    <h6>- Open process edit</h6>
    <h6>- Go to scripts tab</h6>
    <h6>- Paste generated gcode to starting script textbox</h6>
    <h6>- Press ok and start print with this process</h6>
      <video width="90%" controls>
        <source src="../assets/Simplify3dtutorial.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    <h5>Cura:</h5>
    <h6>- Open Cura</h6>
    <h6>- Go to printers</h6>
    <h6>- Open manage printers</h6>
    <h6>- Open machine settings</h6>
    <h6>- Paste generated gcode to start G-code textbox</h6>
    <h6>- Press close and start print with this printer settings</h6>
      <video width="90%" controls>
        <source src="../assets/CutaTutorial.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
  </div>
</template>

<style scoped>
h1,
h3,
h4,
h5,
h6 {
  color: white;
  text-align: center;
  margin-top: 10px;
  font-family: Arial;
}

h6 {
  color: white;
  text-align: center;
}

video {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.text {
  align-content: center;
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

.copybutton,
.cura {
  margin-top: 10px;
  top: 10px;
  right: 10px;
}

.myButton1 {
  margin-bottom: 10px;
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
  text-align: center;
  width: 12%;
  background-color: #0235af;
}
</style>
