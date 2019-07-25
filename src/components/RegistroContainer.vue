<template id="reg-container">
     <div class="reg-container">
        <header-logo></header-logo>
        <registro-form></registro-form>


    </div>
</template>

<script>
import HeaderLogo from "./HeaderLogo";
import Registro from "./Registro";
export default {
    name: "ContainerRegistro",
    template: "#reg-container",
    components: {
      'header-logo': HeaderLogo,
      'registro-form': Registro
    }

}
</script>

<style>
.reg-container {
  width: 500px;
  height: 850px;
  border: 1px solid #33333322;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff55;
  padding: 30px;
}
</style>
