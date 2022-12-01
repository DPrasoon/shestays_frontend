<template>
  <div class="container">
    <h1>Admin Profile</h1>
    <button @click="getData">Get My Profile</button>
    <p>Email</p><input type="text" v-model="admin_data.email"><br>
    <p>Phone</p><input type="text" v-model="admin_data.phone"><br>
    <p>Password</p><input type="text" v-model="admin_data.password"><br>
    <button @click="updateData">Update</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AdminProfile",
  data() {
    return {
      error: "",
      admin_data: {},
      admin_id:"",
    };
  },
  methods: {
    getData() {
      this.admin_id = localStorage.getItem("admin_id");
      // console.log(this.admin_id);
      axios
        .get("admin/get_admin/" + this.admin_id)
        .then((response) => {
          this.admin_data = response.data[0];
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },updateData(){
    this.admin_data._id = this.admin_id;
    axios
        .put("admin/update",this.admin_data)
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