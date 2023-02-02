<template>
  <div>
    <h1 class="fw-bold py-2 mb-4 text-white bg-secondary">
      Admin Dashboard
    </h1>
    <div class="container-fluid">
      <h2 class="fw-bold mt-1 mb-2">Queries</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Area Manager ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Message</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item._id">
            <th scope="row">{{ item.am_id }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.query }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AdminHome",
  data() {
    return {
      error: "",
      data: [],
    };
  },
  async mounted(){
    await axios
        .get("admin/view_queries")
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