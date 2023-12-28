<script setup>

  import success from "@/assets/images/icons/icon-success.png"
  import failed from "@/assets/images/icons/icon-failed.png"
  import inprogress from "@/assets/images/icons/icon-inprogress.png"

  const props = defineProps({
    results:Object
  })
  const emojiMapper = (result)=>{
    switch (result){
      case "success":
        return success
      case "failed":
        return failed
      case "inprogress":
        return inprogress
    }
  }

</script>


<template>
  <div class="results">
    <p  class="subtitle">Подключение:<img class="result_emoji"
                                          :src="emojiMapper(results.connection)"
                                          :alt="results.connection">
    </p>

    <ul class="test-types">
      <li class="test-type" :class="results.sms">
        <p class="subtitle">смс:</p>
        <img class="result_emoji"
             :src="emojiMapper(results.sms)"
             :alt="results.sms">
      </li>
      <li class="test-type">
        <p class="subtitle">звонок:</p>
<!--        <img class="result_emoji"-->
<!--             :src="emojiMapper(results.sms)"-->
<!--             :alt="results.sms">-->
      </li>
      <li class="test-type">
        <p class="subtitle">есиа:</p>
<!--        <img class="result_emoji"-->
<!--             :src="emojiMapper(results.sms)"-->
<!--             :alt="results.sms">-->
      </li>
      <li class="test-type">
        <p class="subtitle">номер к.:</p>
<!--        <img class="result_emoji"-->
<!--             :src="emojiMapper(results.sms)"-->
<!--             :alt="results.sms">-->
      </li>
     <li class="test-type">
       <p class="subtitle">закрытая:</p>
<!--       <img class="result_emoji"-->
<!--            :src="emojiMapper(results.sms)"-->
<!--            :alt="results.sms">-->
     </li>
    </ul>
  </div>

</template>


<style scoped>
.results{
  padding: 20px 10px;
  border-top: #EC7D18 1px solid;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.result_emoji{
  width: 14px;
  height: 14px;
  margin-left: 10px;
}
.test-types{
  list-style: none;
  margin: 0;
  padding: 15px 0 0 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

}
.test-type{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
}
/*.success{*/
/*  background-color: rgba(4,240,0,0.58);*/
/*}*/
</style>