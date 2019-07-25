    <template id="present-img">
      <div class="present-img">
          <img id="regalo" src="../assets/img/gift.png" alt="Paquete de regalo" />
      </div>
    </template>

    <script>
        export default {
            name: "Present",
            template: "#present-img"
        }
    </script>
    <style>
.present-img {
  display: flex;
  align-items: center;
  position: relative;
  right: 50px;
}

#regalo {
  width: 250px;
  height: 250px;
}
    </style>

