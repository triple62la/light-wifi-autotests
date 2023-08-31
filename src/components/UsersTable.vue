<script>


import {mapActions, mapState} from "pinia";
import {useUsersStore} from "@/stores/usersStore";
import UsersTableRow from "@/components/UsersTableRow"
import Dialog from "@/components/Dialog";
import {apiDeleteUser} from "@/api/mock";
import Sidepage from "@/components/Sidepage";
import EditUserForm from "@/components/EditUserForm";
import AddUserForm from "@/components/AddUserForm";

export default {
  name: "UsersTable",
  components: {AddUserForm, Sidepage, Dialog, UsersTableRow, EditUserForm},
  data(){
    return {
      delConfirmationMsg:'Вы уверены, что хотите удалить выбранного пользователя?',
      isDialogShown:false,
      isEditSidepageShown:false,
      isAddSidepageShown:false,
      selectedUser:{}
    }
  },
  methods:{

    ...mapActions(useUsersStore, ['deleteSelectedUser', 'addUser',  'fetchUsers','editUser']),

    onUserClick(user){

      const selected = this.users.find(user=>user.selected)
      if (selected && selected.id === user.id) {
        return
      }
      else if (selected && selected.id !== user.id){
        selected.unselect(this.toggleBtnsBar)
        user.select()
        this.selectedUser = user
      } else {
        user.select()
        this.selectedUser = user
      }
    },
    showDialog(){

      this.isDialogShown=true
    },
    closeEditPage(){
      this.isEditSidepageShown = false
    },
    delSelectedUser(){
      this.deleteSelectedUser()
          .then(()=>{
          })
          .finally(()=>{
              this.isDialogShown=false
          })
    },
    saveUserChanges(userData){
        console.log(userData)
        this.editUser(userData)
            .then(()=>{

            })
            .finally(()=>{
                this.isEditSidepageShown=false
            })
    }
  },

  computed:{
    ...mapState(useUsersStore, ['users',
        'editBtnDisabled',
        'deleteBtnDisabled',
        'getSelectedUser',

    ]),

  },

  created() {
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
        <UsersTableRow @click.stop="onUserClick(user)" v-for="(user,index) in this.users" :key="user.id" :table-index="index+1" :user-data="user" />
      </tbody>
    <div :class= '["btns-bar"]'>
      <button @click.stop="isAddSidepageShown=true" class="btns-bar__btn">
        <img   class="btns-bar__btn-image" src="../assets/images/icons/icon-plus-white.svg" title="Добавить пользователя" alt="Добавить"></button>
      <button @click.stop="isEditSidepageShown=true" :class='["btns-bar__btn", {"disabled": this.editBtnDisabled}]'>
        <img class="btns-bar__btn-image" src="../assets/images/icons/icon-edit-white.svg" title="Редактировать пользователя" alt="Редактировать"></button>
      <button @click.stop="showDialog" :class='["btns-bar__btn", {"disabled": this.deleteBtnDisabled}]' >
        <img class="btns-bar__btn-image" src="../assets/images/icons/icon-trash-white.svg" title="Удалить пользователя" alt="Удалить"></button>
    </div>
  </table>
  <Dialog @decline="this.isDialogShown=false"
          @accept="delSelectedUser"
          :is-shown="isDialogShown"
          :title="delConfirmationMsg"/>
  <Sidepage :is-shown="isEditSidepageShown" @close-sidepage="isEditSidepageShown=false">
    <EditUserForm :user-props="this.selectedUser" :closeCallback="closeEditPage"/>
  </Sidepage>
  <Sidepage :is-shown="isAddSidepageShown" @close-sidepage="isAddSidepageShown=false">
    <AddUserForm/>
  </Sidepage>
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
    box-sizing: border-box;

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

  .btns-bar{
    display: flex;
    justify-content: right;
    padding: 8px 30px;
    column-gap: 20px;
    max-height: 51px;
    transition: max-height 0.2s ease-in-out, padding 0.2s ease-in-out;
  }
  .btns-bar_hidden{
    padding: 0;
    max-height: 0;
    overflow: hidden;
    /*transition: max-height 0.2s ease-in-out, padding 0.2s ease-in-out;*/
  }
  .btns-bar__btn{
    display: flex;
    height: 35px;
    background-color: #EC7D18;
    border: none;
    border-radius: 10px;
    color: white;
    font-family: Inter, Arial sans-serif;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;

  }
  .btns-bar__btn:hover{
    opacity: 0.6;
  }

  .btns-bar__btn-image{
    margin: auto;
    width: 24px;
    height: 24px;
    object-fit: contain;
    object-position: center;
  }


</style>