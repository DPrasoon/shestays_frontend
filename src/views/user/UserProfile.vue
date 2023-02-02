<template>
  <div class="container">
    <h1 class="heading fw-bold text-dark">User Profile</h1>
    <form @submit.prevent="updateData" class="container">
      <!-- Email start  -->
      <div class="row justify-content-center mb-3">
        <div class="col-sm-4 col-md-2">
          <label for="txtemail" class="col-form-label">Email</label>
        </div>
        <div class="col-sm-4 col-md-2">
          <input
            v-model="user_data.email"
            type="email"
            id="txtemail"
            class="form-control"
            aria-describedby="emailHelpInline"
            disabled
          />
        </div>
        <div class="col-sm-4 col-md-2">
          <span id="emailHelpInline" class="form-text">
            Cannot be changed.
          </span>
        </div>
      </div>
      <!-- Email End  -->
      <!-- Phone start -->
      <div class="row justify-content-center mb-3">
        <div class="col-sm-4 col-md-2 ">
          <label for="txtphone" class="col-form-label">Phone Number</label>
        </div>
        <div class="col-sm-4 col-md-2 ">
          <input
            v-model="user_data.phone"
            type="text"
            id="txtphone"
            class="form-control"
            aria-describedby="phoneHelpInline"
            required
          />
        </div>
        <div class="col-sm-4 col-md-2">
          <span id="phoneHelpInline" class="form-text">
            All formats accepted
          </span>
        </div>
      </div>
      <!-- Phone End  -->
      <!-- Password start -->
      <div class="row justify-content-center mb-3">
        <div class="col-sm-4 col-md-2 ">
          <label for="inputPassword" class="col-form-label">Password</label>
        </div>
        <div class="col-sm-4 col-md-2 ">
          <input
            v-model="user_data.password"
            type="password"
            id="inputPassword"
            class="form-control"
            aria-describedby="passwordHelpInline"
            required
          />
        </div>
        <div class="col-sm-4 col-md-2">
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
  name: "UserProfile",
  data() {
    return {
      error: "",
      user_data: {},
      user_id: "",
    };
  },
  methods: {
    updateData() {
      this.user_data._id = this.user_id;
      axios
        .put("common/update", this.user_data)
        .then((response) => {
          this.data = response.data;
          alert("Data Updated");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  async mounted(){
      this.user_id = localStorage.getItem("user_id");
      await axios
        .get("common/get_user_detail/" + this.user_id)
        .then((response) => {
          this.user_data = response.data[0];
        })
        .catch((error) => {
          console.log(error);
        });
  }
};
</script>

<style>
.heading {
  margin-top: 4rem;
  text-decoration: underline;
}
</style>