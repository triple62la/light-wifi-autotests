<template>
  <nav class="nav">
    <router-link class="nav__link nav__link_active" to="">Мониторинг</router-link>
    <router-link class="nav__link" to="">Внеочередные проверки</router-link>
    <router-link class="nav__link" to="">История проверок</router-link>
    <router-link class="nav__link" to="">Пользователи</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.nav{

  height: 100%;
  background-color: #242424;
  display: flex;
  flex-direction: column;
}
.nav__link{
  box-sizing: border-box;
  min-height: 35px;
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  line-height: 17px;
  text-align: center;
  color: white;
  text-decoration: none;
  padding: 15px 10px;
}
.nav__link:hover{
  opacity: 0.6;
  background-color: #2d2d2d;
}
.nav__link_active{
  background-color: #2d2d2d;
}
</style>