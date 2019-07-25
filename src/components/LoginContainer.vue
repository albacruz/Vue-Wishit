<template id="log-container">
     <div class="log-container">
        <header-logo></header-logo>
        <login-form></login-form>


    </div>
</template>

<script>
import HeaderLogo from "./HeaderLogo";
import Login from "./Login";
export default {
    name: "LoginContainer",
    template: "#log-container",
    components: {
      'header-logo': HeaderLogo,
      'login-form': Login
    }

}
</script>

<style>
.log-container {
  width: 500px;
  height: 700px;
  border: 1px solid #33333322;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff55;
  padding: 30px;
}
</style>