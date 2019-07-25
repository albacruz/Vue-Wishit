<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Present from "./components/Present";
  import RegistroContainer from "./components/RegistroContainer";
  import LoginContainer from "./components/LoginContainer";
  import HeaderLogo from "./components/HeaderLogo";
  export default {
    name:'app',
    components: {
      'present-img':  Present,
      'reg-container': RegistroContainer,
      'log-container': LoginContainer,
      'header-logo': HeaderLogo,
    }
  }
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Dancing+Script:700&display=swap');  body {
  display: grid;
  justify-content: center;
  margin: 100px auto;
  background-image: url("./assets/img/giftly.png");
}

h1 {
  font-family: 'Dancing Script';
  font-size: 3.5em;
}

/* .grid-container {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: ". .";
} */
</style>
