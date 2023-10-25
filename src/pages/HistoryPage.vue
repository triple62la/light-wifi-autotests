
<script>
import AppLayout from "@/pages/AppLayout";
import CustomSelect from "@/components/UI/CustomSelect";
import {
  checkTypeOptions as checkTypes,
  authTypeOptions as authTypes,
    resultTypeOptions as resultTypes
} from "@/utils/selectOptions";
import {apiGetHistory} from "@/api/mock";
import formatDate from "@/utils/dateFormat";

export default {
  name: "HistoryPage",
  components: {CustomSelect, AppLayout},
  data(){
    return {
      history:[],
      filtredHistory:[],
      checkTypeOptions:[...checkTypes],
      authTypeOptions:[...authTypes],
      resultTypeOptions: [...resultTypes],
      textFilterIcon:"",
      filters:{
        authType:null,
        testType:null,
        result:null,
        text:null,
      },
      resetBtnDisabled:true,
    }
  },
  methods:{
    formatDatetoString:formatDate,

    applyFilters(){
      this.textFilterIcon = this.filters.text
      if (Object.values(this.filters).every(value=>value==="all"||value==="")){
        this.resetFilters()
        return
      }

      this.filtredHistory = this.history.filter(item=>{
        return Object.entries(this.filters).every(([key, value])=>{
          if (key==="text"){
            return value? item.ssid.toLowerCase().includes(this.filters.text.toLowerCase()) : true
            //когда поисковая строка пуста возвращаем все
          }
          return item[key] === value || value==="all"
          // в селектах при отсутствии фильтра значение all, поэтому при all просто возвращаем все
        })
          })
      this.resetBtnDisabled=false
    },
    resetFilters(){
      for (const filter in this.filters){
        this.filters[filter]="all"
        this.filters.text = ""
        this.textFilterIcon = ""
      }
      this.resetBtnDisabled=true
      this.filtredHistory=[...this.history]
    }
  },
  mounted() {
    apiGetHistory().then(data=>{
      this.history = data
      this.filtredHistory=[...this.history]
    })
  },

}
</script>



<template>
  <AppLayout title="История проверок" :show-nav="true" :show-profile="true">
    <section class="history">
    <form class="search-form">
      <div class="search-bar">
        <input v-model="filters.text" class="search-bar__input" type="text" placeholder="в названии">
        <button @click.prevent="applyFilters"  class="search-bar__submit" type="submit"></button>
        <span v-if="textFilterIcon" class="search-bar__text-filter">"{{ textFilterIcon }}"</span>
      </div>
      <div class="search-params">
        <div class="select-wrapper">
          <label class="select-label" for="checkTypeOptions">по типу авторизации</label>
          <CustomSelect v-model:selected-value="filters.authType"
                        :options="authTypeOptions"
                        :default-heading="0"
                        :extra-class="{border:'none', color:'#EC7D18'}"
                        id="checkTypeOptions"
          />
        </div>
        <div class="select-wrapper">
          <label class="select-label" for="checkTypeOptions">по виду проверки</label>
          <CustomSelect v-model:selected-value="filters.testType"
                        :default-heading="0"
                        :options="checkTypeOptions"
                        :extra-class="{border:'none', color:'#EC7D18'}"
                        id="checkTypeOptions"
          />
        </div>
        <div class="select-wrapper">
          <label class="select-label" for="resultTypeOptions">по рез-ту проверки</label>
          <CustomSelect v-model:selected-value="filters.result"
                        :default-heading="0"
                        :options="resultTypeOptions"
                        :extra-class="{border:'none', color:'#EC7D18'}"
                        id="resultTypeOptions"
          />
        </div>
        <button  @click.prevent="applyFilters" class="filter-btn filter-btn_type_apply" type="submit">Применить</button>
        <button v-if="!resetBtnDisabled" @click="resetFilters" class="filter-btn" type="button" >Сбросить</button>
      </div>
    </form>
    <table class="results">
      <thead class="results-header">
      <tr>
        <th class="header-cell">#</th>
        <th class="header-cell">Дата</th>
        <th class="header-cell">Вид проверки</th>
        <th class="header-cell">Тип авт-ии</th>
        <th class="header-cell">Название</th>
        <th class="header-cell">Результат</th>
        <th class="header-cell">Сотрудник</th>

      </tr>
      </thead>
      <tbody>
        <tr class="body-cell" :key="item.id" v-for="(item, index) in filtredHistory" >
          <td>{{index+1}}</td>
          <td>{{formatDatetoString(item.date)}}</td>
          <td>{{item.testType}}</td>
          <td>{{item.authType}}</td>
          <td>{{item.ssid}}</td>
          <td>{{item.result}}</td>
          <td>{{`${item.customer.lastName} ${item.customer.name.slice(0,1)}.`}}</td>
        </tr>
      </tbody>
    </table>
    </section>
  </AppLayout>
</template>


<style scoped>
.history{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.search-form{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 150px;
  background-color: #2D2C2C;
  border-bottom: #EC7D18 1px solid;
}

.search-bar{
  position: relative;
  margin: 20px auto 10px;
  padding: 0 20px;
  display: flex;
  background-color: #D9D9D914;
  border-radius: 10px;
  height: 40px;
  min-width: max-content;
  max-width: 500px;
  width: 100%;
  border-bottom: #EC7D18 2px solid;

}
.search-bar__input{
  background-color: transparent;
  outline: none;
  border: none;
  color: #d0d0d0;
  padding-left: 10px;

  font-style: italic;
  width: 100%;
}
.search-bar__text-filter{

  position: absolute;
  top:10px;
  right: -70px;
  background-color: #616060;
  padding: 5px 15px;
  color: #C4C4C4;
  font-size: 16px;
  border-radius: 10px;

}
.search-bar__submit{
  width: 43px;
  height: 100%;
  background: url("@/assets/images/icons/glass.png") no-repeat center;
  border: none;
  cursor: pointer;
  transition: 0.3s ease;

}
.search-bar__submit:hover{
  opacity: 0.6;
}
.search-params{
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  display: flex;
  column-gap: 70px;
  padding-top: 20px;

}

.select-wrapper{
  position: relative;
  width: max-content;
  border: #EC7D18 1px solid;
  border-radius: 10px;
  padding: 5px;
}
.select-label{
  font-size: 12px;
  color: #EC7D18;
  position: absolute;
  top:-20px;
  left: -5px;
  width: max-content;

}
.filter-btn{
  background-color: transparent;
  color: #EC7D18;
  border: #EC7D18 1px solid;
  border-radius: 7px;

}
.filter-btn_type_apply{
  background-color: #EC7D18;
  color: white;
  font-weight: 600;
}

.filter-btn:hover{
  cursor: pointer;
  opacity: 0.6;
}

table{
  border-collapse: collapse;
  border: #EC7D18 1px solid;
  width: 100%;
  max-width: 1280px;
  table-layout: auto;

}
thead{
  color: #EC7D18;

}
th{
  border: #EC7D18 1px solid;
  height: 40px;
}
tr{

}
.body-cell{
  color: #C4C4C4;
  font-weight: 600;
  background-color: #333333;
  height: 35px;
  text-align: center;
}
.body-cell:nth-child(even){
  background-color: #3D3D3D;
}

</style>