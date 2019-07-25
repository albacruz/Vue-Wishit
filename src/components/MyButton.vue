    <template id="my-button">
      <div class="my-button">
          <input type="submit" class="button" value="Enviar" id="nuevo"> &nbsp;
      </div>
    </template>

    <script>
        export default {
            name: "MyButton",
            template: "#my-button"
        }
    </script>
    <style>
    .my-button {
        display: flex;
        justify-content: center;
        position: relative;
        top: 20px;

    }

    .button{
        background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 7px;
  width: 300px;
  height: 50px;
    }
    </style>