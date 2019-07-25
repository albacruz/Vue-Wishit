<template id="login-form">
      <div class="login-form">
        <h1>Inicia Sesión</h1>
        <div class="form">
          <form action="" method="post">
            <div class="form-group">
              <label for="user">Nombre usuario o email * :</label>
              <input type="text | email" class="form-control" id="user" required="true" />
            </div><br>
            <div class="form-group">
              <label for="usrpasswd">Contraseña * :</label>
              <input type="password" class="form-control" id="usrpasswd" required="true" />
            </div>
            <br>
            <my-button></my-button>
        </form>
        <div class="toRegister">
          <p>¿No tienes cuenta?
            <router-link to="/register">
              Regístrate
            </router-link>
          </p>
        </div>
        </div>
     </div>
</template>

    <script>
        import MyButton from "./MyButton";
        export default {
            name: "Login",
            template: "#login-form",
            components: {
                'my-button': MyButton
            }
        }
    </script>
    <style>
.login-form {
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  font-size: 17px;
}

.form{
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
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

.toRegister {
  position: relative;
  top: 50px;
  text-align: center;
}
</style>