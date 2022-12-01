<template>
  <div class="container">
    <h1 class="heading fw-bold text-dark">User Profile</h1>
    <button @click="getData" class="btn btn-info mt-4 mb-4">
      Get My Details
    </button>
      <div class="row g-3 align-items-center mb-3 ml-23">
        <div class="col-2">
          <label for="txtemail" class="col-form-label">Email</label>
        </div>
        <div class="col-auto">
          <input
            v-model="user_data.email"
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
            v-model="user_data.phone"
            type="text"
            id="txtphone"
            class="form-control"
            aria-describedby="phoneHelpInline"
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
            v-model="user_data.password"
            type="password"
            id="inputPassword"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div class="col-auto">
          <span id="passwordHelpInline" class="form-text">
            Must be 8-20 characters long.
          </span>
        </div>
      </div>
      <!-- Password End  -->
      <button class="btn btn-lg btn-secondary" @click="updateData">Update</button>
      <hr />
      <button class="btn btn-outline-danger btn-lg" @click="logout" >Logout</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserProfile",
  data() {
    return {
      error: "",
      user_data: {},
      user_id: "",
    };
  },
  methods: {
    getData() {
      this.user_id = localStorage.getItem("user_id");
      axios
        .get("common/get_user_detail/" + this.user_id)
        .then((response) => {
          this.user_data = response.data[0];
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateData() {
      this.user_data._id = this.user_id;
      axios
        .put("common/update", this.user_data)
        .then((response) => {
          console.log(response.data);
          this.data = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    logout() {
      localStorage.removeItem("user_token");
      localStorage.removeItem("user_id");
      this.$router.push("/");
    },
  },
};
</script>

<style>
.heading {
  margin-top: 4rem;
  text-decoration: underline;
}
.ml-23 {
  margin-left: 23.5rem;
}
</style>