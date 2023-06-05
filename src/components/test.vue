<template>

  <p>{{firstName}}</p>
  <p>{{secondName}}</p>
  <p>{{patronymic}}</p>
  <input v-model="nameInput"  required minlength="1" >
  <button v-on:click="nameSplit" >work</button>
<!--  <button >{{}}</button>-->
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      nameInput:"",
      firstName:"",
      secondName:"",
      patronymic:"",
      classes: {
        disabled: true
      },
      message: 0
    }
  },
  computed: {},
  methods: {
    nameSplit() {
      const [firstName, secondName, patronymic] = this.nameInput.split(" ")
      this.firstName = firstName;
      this.secondName = secondName;
      this.patronymic = patronymic
    },

  }
}
</script>

<style scoped>
  .blur{
    opacity: 0.6;
  }
  .invalid{
    color: red;
  }
  .uppercase{
    text-transform: uppercase;
  }
  .disabled{
    color: #C4C4C4;
    background: white;
    border: 1px solid #C4C4C4;
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>

