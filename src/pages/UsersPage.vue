<template>
  <AppLayout
      class="content"
      :title="pageTitle"
      :show-nav="true"
  >
    <UsersTable/>
  </AppLayout>
</template>

<script>
import AppLayout from "@/pages/AppLayout";
import UsersTable from "@/components/UsersTable";
export default {
  name: "Users",
  components: {UsersTable, AppLayout},
  data(){
    return {
      pageTitle:'Пользователи',
    }
  },

}
</script>

<style scoped>
  .content{
    position: relative;
  }
</style>