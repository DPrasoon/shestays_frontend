<template>
  <div class="container">
    <h1>AM Profile</h1>
    <button @click="getData">Get My Profile</button>
    <p>Email</p><input type="text" v-model="am_data.email"><br>
    <p>Phone</p><input type="text" v-model="am_data.phone"><br>
    <p>Password</p><input type="text" v-model="am_data.password"><br>
    <button @click="updateData">Update</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AMProfile",
  data() {
    return {
      error: "",
      am_data: {},
      am_id:"",
    };
  },
  methods: {
    getData() {
      this.am_id = localStorage.getItem("am_id");
      // console.log(this.am_id);
      axios
        .get("am/get_am_detail/" + this.am_id)
        .then((response) => {
          this.am_data = response.data[0];
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },updateData(){
    this.am_data._id = this.am_id;
    axios
        .put("am/update",this.am_data)
        .then((response) => {
          console.log(response.data);
          this.data = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
  }
  },
};
</script>

<style>
</style>