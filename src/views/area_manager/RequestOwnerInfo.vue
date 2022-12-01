<template>
  <div class="container">
    <h1>Info Requests</h1>
    <button @click="getData">Load Requests</button>
    <div class="container" v-for = "item in data" :key="item._id">
      <p>User Id =  {{item.user_id}}</p>
      <p>Item Id = {{item.item_id}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RequestOwnerInfo",
  data() {
    return {
      error: "",
      data: [],
    };
  },
  methods: {
    getData() {
      axios
        .get("am/view_owner_info_requests")
        .then((response) => {
          console.log(response.data);
          this.data = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>

</style>