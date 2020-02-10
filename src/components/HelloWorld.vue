<template>
  <div class="hello">
    <div class="form-group">
      <input
        type="text"
        id="example1"
        placeholder="Type your text..."
        class="form-control form-control-lg inputText"
      />
      <a href="#" class="myButton">Generate</a>
      <model-stl src=".\src\assets\RAZOR_HOLDER.stl"></model-stl>
    </div>
  </div>
</template>

<script>
import { ModelStl } from "vue-3d-model";
export default {
  name: "HelloWorld",
  components: {
    ModelStl
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  color: white;
}
p {
  color: #969696;
  margin-bottom: 0;
  font-size: 14px;
}
.hello {
  margin-top: 10px;
  border-radius: 40px 40px 10px 10px;
  border: 2px solid rgb(0, 60, 255);
  padding: 20px;
}
#example1 {
  border: 2px solid rgb(0, 60, 255);
  border-radius: 10px 40px 10px 40px;
  background-color: black;
  max-width: 85%;
  margin-right: 10px;
}
.myButton {
  background-color: #0040ff;
  border-radius: 28px;
  display: inline-block;
  color: white;
  font-size: 17px;
  padding: 10px 20px;
  text-decoration: none;
  font-weight: bold;
  font-family: "Comic Sans MS", cursive, sans-serif;
  -moz-transform: rotate(20deg);
  -webkit-transform: rotate(20deg);
  -o-transform: rotate(20deg);
  -ms-transform: rotate(20deg);
  transform: rotate(20deg);
}
.inputText,
.myButton {
  display: inline-block;
  vertical-align: middle;
}
</style>
