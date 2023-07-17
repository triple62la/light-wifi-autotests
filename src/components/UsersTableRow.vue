



<script>
export default {
  name: "UsersTableRow",
  props:{
    userData:{
      type:Object,
      required:true
    },
    tableIndex:{
      type:Number,
    }
  },

}
</script>



<template>
  <tr :class="['users-table__row', {'users-table__row_light':tableIndex%2===0}]">
    <td class="users-table__cell users-table__cell_type_id">{{index+1}}</td>
    <td class="users-table__cell users-table__cell_type_login">{{user.login}}</td>
    <td class="users-table__cell users-table__cell_type_login">{{user.name}}</td>
    <td class="users-table__cell users-table__cell_type_role">{{user.role}}</td>
  </tr>
</template>



<style scoped>

</style>