<template>
  <div>
    <Admin_Nav />
    <router-view/>
    <SiteFooter/>
  </div>
</template>

<script>
import Admin_Nav from "./Admin_Nav.vue";
import SiteFooter from './SiteFooter.vue';
export default {
  name: "AdminTemplate",
  components: {
    Admin_Nav,SiteFooter
  },
};
</script>

<style scoped>