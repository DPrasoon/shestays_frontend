<template>
  <div>
    <h1>View AMs</h1>
    <div class="container">
      <button @click="getData">Load AM Profiles</button><br />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">City</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for ="item in data" :key="item._id">
            <th scope="row">{{item._id}}</th>
            <td>{{item.full_name}}</td>
            <td>{{item.email}}</td>
            <td>{{item.phone}}</td>
            <td>{{item.city}}</td>
            <td><button @click="deleteAM(item._id)">Delete</button></td>
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
    getData() {
      axios
        .get("admin/view_am_profiles")
        .then((response) => {
          console.log(response.data);
          this.data = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteAM(am_id){
      axios
          .delete("admin/delete_am/"+am_id)
          .then((response) => {
            console.log(response.data);
            this.data = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
    }
  },
  // mounted(){
  //   getData();
  // }
};
// onMounted(() => {
//   getData();
//   })
</script>

<style>
</style>