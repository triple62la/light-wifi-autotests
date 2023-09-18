



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
  computed:{
    fullname(){
      return `${this.userData.lastName} ${this.userData.name.slice(0, 1)}.${this.userData.patronymic.slice(0, 1)}.`
    }
  }

}
</script>


<template>
  <tr :class="['users-table__row', {'users-table__row_light':tableIndex%2===0, selected:this.userData.selected}]">
    <td class="users-table__cell users-table__cell_type_id">{{tableIndex}}</td>
    <td class="users-table__cell users-table__cell_type_login">{{userData.login}}</td>
    <td class="users-table__cell users-table__cell_type_login">{{fullname}}</td>
    <td class="users-table__cell users-table__cell_type_role">{{userData.role}}</td>
  </tr>
</template>


<style scoped>
.users-table__cell{
  padding: 15px;
  height: 22px;
}
.users-table__row:hover{
  cursor: pointer;
  opacity: 0.6;
}
.users-table__cell_type_id{
  width: 10%;
}
.users-table__cell_type_login{
  width: 35%;
}
.users-table__cell_type_role{
  width: 20%;
}
.selected{
  border: #EC7D18 1px solid;
  opacity: 0.8;
}
</style>