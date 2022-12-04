<template>
  <div class="container">
  <h1 class="mt-3 fw-bold text-dark">Admin Profile</h1>
    <button @click="getData" class="btn btn-info mt-4 mb-4">
      Get My Details
    </button>
    <form @submit.prevent="updateData">
      <!-- Email start  -->
      <div class="row g-3 align-items-center mb-3 ml-23">
        <div class="col-2">
          <label for="txtemail" class="col-form-label">Email</label>
        </div>
        <div class="col-auto">
          <input
            v-model="admin_data.email"
            type="email"
            id="txtemail"
            class="form-control"
            aria-describedby="emailHelpInline"
            disabled
          />
        </div>
        <div class="col-auto">
          <span id="emailHelpInline" class="form-text">
            Cannot be changed.
          </span>
        </div>
      </div>
      <!-- Email End  -->
      <!-- Phone start -->
      <div class="row g-3 align-items-center mb-3 ml-23">
        <div class="col-2">
          <label for="txtphone" class="col-form-label">Phone Number</label>
        </div>
        <div class="col-auto">
          <input
            v-model="admin_data.phone"
            type="text"
            id="txtphone"
            class="form-control"
            aria-describedby="phoneHelpInline"
            required
          />
        </div>
        <div class="col-auto">
          <span id="phoneHelpInline" class="form-text">
            All formats accepted
          </span>
        </div>
      </div>
      <!-- Phone End  -->
      <!-- Password start -->
      <div class="row g-3 align-items-center mb-3 ml-23">
        <div class="col-2">
          <label for="inputPassword" class="col-form-label">Password</label>
        </div>
        <div class="col-auto">
          <input
            v-model="admin_data.password"
            type="password"
            id="inputPassword"
            class="form-control"
            aria-describedby="passwordHelpInline"
            required
          />
        </div>
        <div class="col-auto">
          <span id="passwordHelpInline" class="form-text">
            Must be 8-20 characters long.
          </span>
        </div>
      </div>
      <!-- Password End  -->
      <button class="btn btn-lg btn-secondary" type="submit">Update</button>
    </form>
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
      axios
        .get("admin/get_admin/" + this.admin_id)
        .then((response) => {
          this.admin_data = response.data[0];
        })
        .catch((error) => {
          console.log(error);
        });
    },updateData(){
    this.admin_data._id = this.admin_id;
    axios
        .put("admin/update",this.admin_data)
        .then((response) => {
          this.data = response.data;
          alert("Data updated successfully");
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