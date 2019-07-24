<template>
  <div>
    <div id="app">
      <init-page> </init-page>
    </div>
</template>

<script>
  import Init from "./components/Init"
  export default {
    name:'app',
    components: {
      'init-page':  Init
    }
  }
</script>
<style>
  :root {
    text-align: center;
  }

  h1 {
    font-family: Montserrat, Impact, sans-serif;
    font-size: 72px;
  }
</style>
