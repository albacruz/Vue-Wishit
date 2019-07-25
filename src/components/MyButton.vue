    <template id="my-button">
      <div class="my-button">
          <input type="submit" class="button" value="Siguiente" id="nuevo"> &nbsp;
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
        background-color: #58dc8b;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 7px;
  width: 300px;
  height: 50px;
  font-size: 20px;
    }
    </style>