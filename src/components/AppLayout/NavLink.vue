
<script>
export default {
  name: "NavLink",
  props: {
    linkData: {
      type: Object,
      required: true
    },
    minimized: {
      type:Boolean,
      required: true
    }
  }

}
</script>


<template>
  <li :class="['nav__link', {nav__link_active:this.$route.path===linkData.route}]" >{{minimized? linkData.name.slice(0,1):linkData.name }}</li>
</template>


<style scoped>
.nav__link{
  box-sizing: border-box;
  min-height: 35px;
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  line-height: 17px;
  text-align: center;
  color: white;
  text-decoration: none;
  padding: 15px 10px;
  list-style: none;
  overflow: hidden;

}

.nav__link:hover{
  opacity: 0.6;
  background-color: #2d2d2d;
  cursor: pointer;
}
.nav__link_active{
  background-color: #2d2d2d;
}
</style>