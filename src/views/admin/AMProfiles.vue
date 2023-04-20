<template>
  <div>
    <h1 class="mt-3 mb-3 py-2 fw-bold bg-light">View Area Manager Profiles</h1>
    <div class="container-fluid">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col" class="fs-5 py-3">ID</th>
            <th scope="col" class="fs-5 py-3">Name</th>
            <th scope="col" class="fs-5 py-3">Email</th>
            <th scope="col" class="fs-5 py-3">Phone</th>
            <th scope="col" class="fs-5 py-3">City</th>
            <th scope="col" class="fs-5 py-3">Remove AM</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for ="item in data" :key="item._id">
            <th scope="row">{{item._id}}</th>
            <td>{{item.full_name}}</td>
            <td>{{item.email}}</td>
            <td>{{item.phone}}</td>
            <td>{{item.city}}</td>
            <td><button class="btn btn-outline-danger fw-bold" v-if="item._id" @click="deleteAM(item._id)">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AMProfiles",
  data() {
    return {
      error: "",
      data: [],
    };
  },
  methods: {
    deleteAM(am_id){
      axios
          .delete("admin/delete_am/"+am_id)
          .then((response) => {
            console.log(response.data);
            this.data = response.data;
            alert("Area Manager removed from Database.");
            location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
    }
  },
  async mounted(){
    await axios
        .get("admin/view_am_profiles")
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