<template>
  <div class="container-fluid">
    <h1 class="fw-bold am_heading text-white bg-secondary py-2 mb-0">
      Area Manager Dashboard
    </h1>
    <h2 class="py-1 fw-bold text-dark bg-light mt-0">My Profile</h2>
    <form @submit.prevent="updateData" class="container">
      <!-- AM ID Start  -->
      <div class="row justify-content-center mb-3">
        <div class="col-sm-4 col-md-2">
          <label for="txtam_id" class="col-form-label">ID</label>
        </div>
        <div class="col-sm-4 col-md-2">
          <input
            v-model="am_id"
            type="text"
            id="txtam_id"
            class="form-control"
            aria-describedby="am_idlHelpInline"
            disabled
          />
        </div>
        <div class="col-sm-4 col-md-2">
          <span id="am_idlHelpInline" class="form-text">
            Your unique AM ID.
          </span>
        </div>
      </div>
      <!-- AM ID End  -->
      <!-- Email Start  -->
      <div class="row justify-content-center mb-3">
        <div class="col-sm-4 col-md-2">
          <label for="txtemail" class="col-form-label">Email</label>
        </div>
        <div class="col-sm-4 col-md-2">
          <input
            v-model="am_data.email"
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
            v-model="am_data.phone"
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
            v-model="am_data.password"
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
  name: "AM_HomePage",
  data() {
    return {
      error: "",
      am_data: {},
      am_id: "",
    };
  },
  methods: {
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
  async mounted(){
    this.am_id = localStorage.getItem("am_id");
      await axios
        .get("am/get_am_detail/" + this.am_id)
        .then((response) => {
          this.am_data = response.data[0];
        })
        .catch((error) => {
          console.log(error);
        });
  }
};
</script>

<style>
body{
  overflow-x: hidden;
}
.container-fluid{
  padding: 0;
}

.am_heading{
  margin-top: 4rem;
}
</style>