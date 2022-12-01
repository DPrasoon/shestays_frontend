<template>
  <div>
    <h1>View User Profiles</h1>
    <div class="container">
      <button @click="getData">Load User Profiles</button><br />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">City</th>
            <th scope="col">Full Address</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for ="item in data" :key="item._id">
            <th scope="row">{{item.first_name+item.middle_name+item.last_name}}</th>
            <td>{{item.gender}}</td>
            <td>{{item.email}}</td>
            <td>{{item.phone}}</td>
            <td>{{item.city}}</td>
            <td>{{item.address_line1+", "+item.address_line2+", "+item.address_line3+", "+item.city+", "+item.pincode+", "+item.country}}</td>
            <td><button @click="deleteUser(item._id)">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserProfiles",
  data() {
    return {
      error: "",
      data: [],
    };
  },
  methods: {
    getData() {
      axios
        .get("admin/view_user_profiles")
        .then((response) => {
          console.log(response.data);
          this.data = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },deleteUser(user_id){
      axios
          .delete("admin/delete_user/"+user_id)
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