<template>
  <div class="container-fluid">
    <h1 class="fw-bold am_heading text-white bg-secondary">
      Area Manager Dashboard
    </h1>
    <h1 class="heading fw-bold text-dark bg-light mt-0">My Profile</h1>
    <button @click="getData" class="btn btn-info mt-4 mb-4">
      Get My Details
    </button>
    <form @submit.prevent="updateData">
      <!-- Email Start  -->
      <div class="row g-3 align-items-center mb-3 ml-23">
        <div class="col-2">
          <label for="txtemail" class="col-form-label">Email</label>
        </div>
        <div class="col-auto">
          <input
            v-model="am_data.email"
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
            v-model="am_data.phone"
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
            v-model="am_data.password"
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
      <button class="btn btn-lg btn-secondary" type="submit">Update</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AM_HomePage",
  data() {
    return {
      error: "",
      am_data: {},
      am_id: "",
    };
  },
  methods: {
    getData() {
      this.am_id = localStorage.getItem("am_id");
      axios
        .get("am/get_am_detail/" + this.am_id)
        .then((response) => {
          this.am_data = response.data[0];
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateData() {
      this.am_data._id = this.am_id;
      axios
        .put("am/update", this.am_data)
        .then((response) => {
          this.data = response.data;
          alert("Profile Updated.");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
body{
  overflow-x: hidden;
}
.container-fluid{
  padding: 0;
}
.heading {
  text-decoration: underline;
}
.ml-23 {
  margin-left: 23.5rem;
}

.am_heading{
  margin-top: 4rem;
}
</style>