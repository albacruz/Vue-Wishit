<template id="form-container">
     <div class="form-container">
        <header-logo></header-logo>
        <formulario-reg></formulario-reg>
    </div>
</template>

<script>
import HeaderLogo from "./HeaderLogo";
import Formulario from "./Formulario";
export default {
    name: "FormContainer",
    template: "#form-container",
    components: {
      'header-logo': HeaderLogo,
      'formulario-reg': Formulario
    }

}
</script>

<style>
.form-container {
  width: 500px;
  height: 800px;
  border: 1px solid grey;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
