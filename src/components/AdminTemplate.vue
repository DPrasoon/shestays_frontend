<template>
  <div>
    <Admin_Nav />
    <router-view/>
    <!-- footer -->
    <!-- <div class="bg-dark text-white footer">
      <p class="text-center p-4 m-0">Footer Content</p>
    </div> -->
  </div>
</template>

<script>
import Admin_Nav from "./Admin_Nav.vue";
export default {
  name: "AdminTemplate",
  components: {
    Admin_Nav,
  },
};
</script>