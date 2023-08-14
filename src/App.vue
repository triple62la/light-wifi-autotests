<script >
import "./assets/styles/main.css"
export default {
  name:"App",
  components: {},
  data(){
    return {

    }
  },
  methods: {
    gotoLogin() {
      this.$router.push("/login")
    }
  }
}
</script>

<template>
  <div class="page">
    <router-view></router-view>
  </div>
</template>


<style >

*{
  font-family:Inter, Arial, sans-serif;
  margin: 0;
}

  .page{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background-color: #333;
    max-width: 100vw;
    min-height: 100vh;
    position: relative;

  }
  .main{
    display: flex;

  }
</style>