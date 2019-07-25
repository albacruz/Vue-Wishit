<template>
  <div id="app">
    <div class="grid-container">
        <present-img></present-img>
        <form-container>
        </form-container>
    </div>
  </div>
</template>

<script>
  import Present from "./components/Present";
  import FormContainer from "./components/FormContainer";
  import HeaderLogo from "./components/HeaderLogo";
  export default {
    name:'app',
    components: {
      'present-img':  Present,
      'form-container': FormContainer,
      'header-logo': HeaderLogo,
    }
  }
</script>
<style>
  body {
  display: grid;
  justify-content: center;
  margin: 100px auto;
  background-image: url("./assets/img/giftly.png");
}

.grid-container {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: ". .";
}
</style>
