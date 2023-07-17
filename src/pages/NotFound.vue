

<script>
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
export default {
  name: "NotFound",
  components: {Header,Main, Footer },
  data(){
    return{
      pageTitle:'ОЙ, 404'
    }
  }
}
</script>

<template>
  <Header :title="this.pageTitle" :show-profile="true" :show-burger="false"/>
  <Main>
    <div class="sad-cat">
      <p class="sad-cat__text" style="">Запрошенная страница не найдена :(((</p>
      <div class="sad-cat__image"></div>
      <router-link class="sad-cat__text" to="/">На главную!</router-link>
    </div>

  </Main>
  <Footer/>
</template>

<style scoped>
.sad-cat{
  margin: auto;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
}
.sad-cat__text{
  margin: 0 auto;
  color: white;
  font-size: 16px;
  font-weight: 600;


}
.sad-cat__image{
  background-image: url("@/assets/images/sad_cat.png");
  width: 300px;
  height: 300px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: auto;
  opacity: 0.4;
  box-shadow: 1px 1px 1px black;
  border-radius: 50%;
}
</style>