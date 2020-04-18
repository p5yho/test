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
    <h3>1. Generate your text</h3>
    <img
      src="../assets/TutorialGenerate.gif"
      width="70%"
      alt="Responsive image"
    />
    <h3>2. Copy/Download Gcode from website</h3>
    <img src="../assets/TutorialCopy.gif" width="70%" alt="Responsive image" />
    <h3>3. Set costimized line</h3>
    <h5>Simplify3D:</h5>
    <h6>- Open Simplify 3D</h6>
    <h6>- Open process edit</h6>
    <h6>- Go to scripts tab</h6>
    <h6>- Paste generated gcode to starting script textbox</h6>
    <h6>- Press ok and start print with this process</h6>
    <img
      src="../assets/SetTutorial.gif"
      id="s"
      width="70%"
      alt="Responsive image"
    />
    <h5>Cura:</h5>
    <h6>- Open Cura</h6>
    <h6>- Go to printers</h6>
    <h6>- Open manage printers</h6>
    <h6>- Open machine settings</h6>
    <h6>- Paste generated gcode to start G-code textbox</h6>
    <h6>- Press close and start print with this printer settings</h6>
    <img
      src="../assets/SetTutorialCura.gif"
      id="c"
      width="70%"
      alt="Responsive image"
    />
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
