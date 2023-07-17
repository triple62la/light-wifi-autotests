<script>


import {mapActions, mapState} from "pinia";
import {useUsersStore} from "@/stores/usersStore";
import UsersTableRow from "@/components/UsersTableRow"


export default {
  name: "UsersTable",
  components: {UsersTableRow,},


  methods:{
    ...mapActions(useUsersStore, ['deleteUser', 'addUser', 'selectUser', 'fetchUsers'])
  },

  computed:{
    ...mapState(useUsersStore, ['users'])
  },
  created: function () {
     this.fetchUsers()

  }

}
</script>



<template>
  <table class="users-table">
      <thead class="users-table__head">
      <tr class="users-table__row users-table__row_type_header">
        <th class="users-table__cell users-table__cell_type_id">ID</th>
        <th class="users-table__cell users-table__cell_type_login">Логин</th>
        <th class="users-table__cell users-table__cell_type_login">ФИО</th>
        <th class="users-table__cell users-table__cell_type_role">Роль</th>
      </tr>
      </thead>
      <tbody class="users-table__body">
        <UsersTableRow  v-for="(user,index) in this.users" :key="user.id" :table-index="index+1" :user-data="user" />
      </tbody>
  </table>

</template>



<style scoped>

  .users-table{
    margin:  auto;
    border: #EC7D18 1px solid;
    border-radius: 8px;
    color: white;
    border-collapse: collapse;
    vertical-align: middle;


  }
  .users-table__head{

  }
  .users-table__body{
    display: block;
    height: 500px;
    overflow-y: scroll;
  }
  .users-table__body::-webkit-scrollbar {
    width: 10px; /* ширина scrollbar */

  }
  .users-table__body::-webkit-scrollbar-track {
    background: rgba(107, 107, 107, 0.99);
    border-radius: 6px;/* цвет дорожки */
  }
  .users-table__body::-webkit-scrollbar-thumb {
    background-color: #EC7D18;    /* цвет плашки */
       border-radius: 6px;  /* закругления плашки */
      /* padding вокруг плашки */
  }
  .users-table__row{
    display: table;
    table-layout: fixed;
    background-color: #444443;
    padding: 0 20px;
    width: 100%;
    max-width: 700px;

  }
  .users-table__row_light{
    background-color: #616060;
  }
  .users-table__row_type_header{
    background-color: #3D3D3D;
    text-align: left;
    height: 42px;
  }

  .users-table__cell{

    padding: 20px 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
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



</style>