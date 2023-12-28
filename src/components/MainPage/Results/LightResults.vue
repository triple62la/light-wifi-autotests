
<script setup>
  const props = defineProps({
    data:Object,
  })
</script>

<template>

  <p  class="card__subtitle">Портал<span :class="getItemStatusClass(props.data.portal)"></span></p>
  <p  class="card__subtitle">Авторизация<span :class="getItemStatusClass(props.data.authorization)"></span></p>
  <p  class="card__subtitle">Интернет<span :class="getItemStatusClass(props.data.internet)"></span></p>
  <img  class="card__icon" src="../../../assets/images/icons/free-icon-wifi-router-128px.png" alt="иконка карточки">
  <p  class="card__subtitle">Подключение<span  :class="getItemStatusClass(this.data.connection)"></span></p>
  <p  class="card__subtitle">Портал<span :class="getItemStatusClass(this.data.portal)"></span></p>
  <p  class="card__subtitle">Авторизация<span :class="getItemStatusClass(this.data.authorization)"></span></p>
  <p  class="card__subtitle">Интернет<span :class="getItemStatusClass(this.data.internet)"></span></p>
  <p  class="card__index">{{ props.data.forcedQueueIndex }}</p>
</template>

<style scoped>

</style>