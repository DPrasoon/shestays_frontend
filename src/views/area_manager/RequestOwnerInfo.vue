<template>
  <div class="container-fluid">
    <h1 class="fw-bold am_heading text-white bg-secondary py-2 mb-0">
      Area Manager Dashboard
    </h1>
    <h2 class="py-1 fw-bold text-dark bg-light mt-0">Info Requests</h2>
    <table class="table mt-4">
      <thead>
        <tr class="row">
          <th class="col-2"></th>
          <th class="col-4 fs-5 th-user border border-dark">Requested By</th>
          <th class="col-4 fs-5 th-item border border-dark">Requested Item</th>
          <th class="col-2"></th>
        </tr>
      </thead>
      <tbody>
        <tr class="row">
          <th class="col-2"></th>
          <th class="col-2 bg-light border-start border-dark">User Email</th>
          <th class="col-2 bg-light border-end border-dark">User ID</th>
          <th class="col-2 bg-light border-start border-dark">Property Name</th>
          <th class="col-2 bg-light border-end border-dark">Property ID</th>
          <th class="col-2"></th>
        </tr>
        <tr v-for="item in data" :key="item._id" class="row">
          <td class="col-2"></td>
          <td class="col-2 border-dark border-start fw-bold">{{ item.user_email }}</td>
          <td class="col-2 border-dark border-end">{{ item.user_id }}</td>
          <td class="col-2 border-dark border-start fw-bold">{{ item.item_name }}</td>
          <td class="col-2 border-dark border-end">{{ item.item_id }}</td>
          <td class="col-2"></td>
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
  async mounted() {
    await axios
      .get("am/view_owner_info_requests")
      .then((response) => {
        this.data = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
.am_heading {
  margin-top: 4rem;
}

.th-user {
  background-color: #145276 !important;
  color: #ffffff;
}

.th-item { 
  background-color: #81cfca !important;
}
</style>