<template>
  <footer class="footer">
    <p class="footer__copyright">© 2023.WiFi Hotspot</p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
  .footer{
    display: flex;
    flex: 0 0 auto;
    background-color:#242424;
    border-top: 2px #EC7D18 solid;
    height: 60px;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    padding-right: 20px;
    box-sizing: border-box;
  }
  .footer__copyright{
    margin: 0;
    color: white;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
  }
</style>
