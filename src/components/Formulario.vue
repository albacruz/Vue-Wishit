<template id="formulario-reg">
      <div class="formulario-reg">
        <h1>Regístrate</h1>
        <div class="form">
          <form action="" method="post">
            <div class="form-group">
              <label for="name">Nombre completo * :</label>
              <input type="text" class="form-control" id="name" name="Name" required="true" />
            </div><br>
            <div class="form-group">
              <label for="usrname">Nombre de usuario * :</label>
              <input type="text" class="form-control" id="usrname" name="Name" required="true" />
            </div><br>
            <div class="form-group">
              <label for="usremail">Email * :</label><br>
              <input type="email" class="form-control" id="usremail" aria-describedby="emailHelp" name="Email"
                required="true" />
            </div>
            <br>
            <div class="form-group">
			    <div class="cookies">
					<label><input type="checkbox" value="" required= "true">Al registrarte, aceptas nuestras Condiciones.
            Obtén más información sobre cómo recopilamos, usamos y
            compartimos tus datos en la Política de datos,
            así como el uso que hacemos de las cookies y tecnologías
            similares en la Política de cookies.</label>
			    </div>
										
			</div>
            <br>
            <my-button></my-button>
        </form>
        
        </div>
     </div>
</template>

    <script>
        import MyButton from "./MyButton";
        export default {
            name: "Formulario",
            template: "#formulario-reg",
            components: {
                'my-button': MyButton
            }
        }
    </script>
    <style>
.formulario-reg {
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  font-size: 17px;
}

.form{
  display: flex;
  justify-content: center;
  width: 300px;
  height: 200px;
}

.form-control {
  width: 300px;
  height: 20px;
  border-radius: 5px;
  border: none;
  background-color: #ffffffaa;
  padding: 5px;
  margin-top: 10px;
}

.cookies {
  font-size: 15px;
  color: grey;
  width: 300px;
  height: 100px;
  display: flex;
}
   
</style>