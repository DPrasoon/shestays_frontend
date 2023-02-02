<template>
  <div>
    <h1 class="mt-3 mb-3 py-2 fw-bold bg-light">View User Profiles</h1>
    <div class="container-fluid">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col" class="fs-5 py-3">Name</th>
            <th scope="col" class="fs-5 py-3">Gender</th>
            <th scope="col" class="fs-5 py-3">Email</th>
            <th scope="col" class="fs-5 py-3">Phone</th>
            <th scope="col" class="fs-5 py-3">City</th>
            <th scope="col" class="fs-5 py-3">Full Address</th>
            <th scope="col" class="fs-5 py-3">Delete</th>
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
            <td><button class="btn btn-outline-danger fw-bold" v-if="item._id" @click="deleteUser(item._id)">Delete</button></td>
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
    deleteUser(user_id){
      axios
          .delete("admin/delete_user/"+user_id)
          .then((response) => {
            this.data = response.data;
            alert("User removed from Database.");
          })
          .catch((error) => {
            console.log(error);
          });
    }
  },
  async mounted(){
    await axios
        .get("admin/view_user_profiles")
        .then((response) => {
          this.data = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
  }
};
</script>

<style>
</style>