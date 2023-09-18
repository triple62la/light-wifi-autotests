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
  display: flex;
  flex: 1 0 auto;
}
</style>