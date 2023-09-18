<template>


  <AppLayout>
    <LoginForm/>
  </AppLayout>

</template>

<script>
import AppLayout from "@/pages/AppLayout";
import LoginForm from "@/components/LoginPage/LoginForm";
export default {
  name: "LoginPage",
  components: {AppLayout, LoginForm },
  data(){
    return {
      pageTitle: "Страница авторизации"
    }
  }
}
</script>

<style scoped>

</style>