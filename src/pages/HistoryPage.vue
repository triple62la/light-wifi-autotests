
<script>
import AppLayout from "@/pages/AppLayout";
import CustomSelect from "@/components/UI/CustomSelect";
export default {
  name: "HistoryPage",
  components: {CustomSelect, AppLayout},
  data(){
    return {
      selectOptions:[
        {
          name:"все",
          value:"all"
        },
        {
          name:"Внеочередные",
          value:"extra"
        },
        {
          name:"Очередные",
          value:"ordinary"
        },
      ],
      selectCurrent:""
    }
  }

}
</script>



<template>
  <AppLayout title="История проверок" :show-nav="true" :show-profile="true">
    <form class="search-panel">
      <div class="search-bar">
       <select class="search-bar-select">
         <option class="search-bar-option" value="all" selected>все</option>
         <option value="extra" selected>внеочередные</option>
         <option value="ordinary" selected>очередные</option>
       </select>
        <input class="search-bar__input" type="text">
        <button class="search-bar__submit" type="submit"></button>
      </div>
    </form>
  </AppLayout>
</template>


<style scoped>

.search-bar-select  {
  /* Reset */
  appearance: none;
  border: 0;
  outline: 0;
  font: inherit;
  /* Personalize */
  width: max-content;
  height: 40px;
  padding: 0 4em 0 1em;
  background: #D9D9D914;
  color: white;
  border-radius: 0.25em;
  box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
/* <option> colors */
.search-bar-option {
  color: inherit;
  background-color: #D9D9D914;
}
.search-bar-option::-ms-expand {
  display: none;
}
/* Remove focus outline */
option:focus {
   outline: none;
 }




.custom-select{
  color: #EC7D18;
}

.search-bar{
  height: 25px;
  display: flex;
  background-color: #D9D9D914;

}
.search-bar__input{
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: #EC7D18 2px solid;
  color: #d0d0d0;
}
.search-bar__submit{
  width: 43px;
  height: 25px;
  background: url("@/assets/images/icons/glass.png") no-repeat center;
  border: none;
  cursor: pointer;
  transition: 0.3s ease;
}
.search-bar__submit:hover{
  opacity: 0.6;
}
</style>