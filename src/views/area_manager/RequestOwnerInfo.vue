<template>
  <div class="container-fluid">
    <h1 class="fw-bold am_heading text-white bg-secondary py-2 mb-0">
      Area Manager Dashboard
    </h1>
    <h2 class="py-1 fw-bold text-dark bg-light mt-0">Info Requests</h2>
    <!-- <button @click="getData" class="btn btn-outline-dark btn-lg fw-bold mt-4">Load Requests</button> -->
    <table class="table table-striped mt-4">
        <thead>
          <tr>
            <th scope="col">User ID</th>
            <th scope="col">Requested Item ID</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for ="item in data" :key="item._id">
            <th scope="row">{{item.user_id}}</th>
            <td>{{item.item_id}}</td>
          </tr>
        </tbody>
      </table>
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
  async mounted(){
    await axios
        .get("am/view_owner_info_requests")
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
.am_heading{
  margin-top: 4rem;
}
</style>