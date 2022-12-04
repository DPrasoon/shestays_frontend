<template>
  <div>
    <AM_Nav />
    <router-view/>
    <SiteFooter/>
  </div>
</template>

<script>
import AM_Nav from "./AM_Nav.vue";
import SiteFooter from './SiteFooter.vue';
export default {
  name: "AM_HomeTemplate",
  components: {
    AM_Nav,SiteFooter
  },
};
</script>