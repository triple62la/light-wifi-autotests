<template>
  <header class="header">
    <h1 class="header__app-title">Light WiFi Sanity</h1>
    <div class="header__container">
      <h2 class="header__page-title">{{title}}</h2>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props:["title"],
  methods: {
    setTitle(){
      this.$route
    }
  }
}
</script>

<style scoped>
  .header{
    margin: 0 auto;
    background-color: #242424;
    height: 100px;
    border-bottom: 2px #EC7D18 solid;
    width: 100%;
    flex: 0 0 auto;
    position: relative;

  }
  .header__container{
    margin: 0 auto;
    max-width: 1280px;
    width: 100%;
    display: flex;
    justify-content: left;


  }
  .header__app-title{

    font-size: 32px;
    font-weight: 700;
    line-height: 29px;
    color: #FFFCFC;
    margin: 0;
    display: inline-block;
    min-width: 246px;
    position: absolute;
    top:35px;
    left: 20px;
  }
  .header__page-title{
    margin: 0 auto;
    font-size: 26px;
    font-weight: 700;
    line-height: 29px;
    color: white;
    padding-top: 35px;
  }
</style>