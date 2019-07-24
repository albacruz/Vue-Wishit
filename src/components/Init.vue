    <template id="init-page">
      <div class="init-page">
        <div class="grid-container">
            <div class="regalo">
                <img id="regalo" src="../assets/img/gift.png" alt="Paquete de regalo" />
            </div>
            <div class="titulo">
                <div class="logo">
                    <img id="logo" src="../assets/img/wishitforme.png" alt="logo" />
                </div>
            </div>
        </div>
      </div>
    </template>

    <script>
        export default {
            name: "Init",
            template: "#init-page"
        }
    </script>
    <style>
body {
  display: grid;
  justify-content: center;
  margin: 100px auto;
  background-color: #d4f5e3 /* #f1eedb */;
}

.grid-container {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: ". .";
}

.titulo {
  width: 500px;
  height: 800px;
  border: 1px solid grey;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.formulario {
  width: 400px;
  height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.form {
  display: flex;
  justify-content: center;
  width: 300px;
  height: 200px;
}

.form-control {
  width: 300px;
}

.logo {
  width: 500px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#logo {
  width: 475px;
  height: 175px;
}

.regalo {
  display: flex;
  align-items: center;
  position: relative;
  right: 50px;
}

#regalo {
  width: 250px;
  height: 250px;
}

.cookies {
  font-size: 13px;
  color: grey;
  width: 250px;
  height: 100px;
  display: flex;
}
    </style>

