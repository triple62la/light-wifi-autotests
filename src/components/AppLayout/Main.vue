<template>
  <main class="main">
    <slot>

    </slot>
  </main>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style scoped>
.main{
  position: relative;
  display: flex;
  flex: 1 0 auto;
  padding-left: 15px;
}
</style>