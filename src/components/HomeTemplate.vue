<template>
  <div>
    <NavMain />
    <router-view />
    <SiteFooter/>
    <!-- login modal  -->
    <div class="modal fade" id="ModalForm" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- Login Form -->
          <form @submit.prevent="getData">
            <div class="modal-header">
              <h5 class="modal-title">User Login</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="Username"
                  >Email<span class="text-danger">*</span></label
                >
                <input
                  type="email"
                  name="txtemail"
                  class="form-control"
                  id="Email"
                  placeholder="Enter Email"
                  v-model="logindata.email"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="Password"
                  >Password<span class="text-danger">*</span></label
                >
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  id="Password"
                  placeholder="Enter Password"
                  v-model="logindata.password"
                  required
                />
              </div>
              <div class="mb-3">
                <a href="mailto:admin@shestays.com" class="float-end"
                  >Forgot Password</a
                >
              </div>
            </div>
            <div class="modal-footer mt-4">
              <button type="submit" class="btn btn-success w-100">Login</button>
            </div>
            <p class="text-center">
              Don't have account, <a href="/registration_user">Signup</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavMain from "./NavMain.vue";
import SiteFooter from './SiteFooter.vue';
export default {
  name: "HomeTemplate",
  components: {
    NavMain,SiteFooter
  },
  data() {
    return {
      error: "",
      logindata: {},
    };
  },
  methods: {
    getData() {
      axios
        .get("common/get/" + this.logindata.email)
        .then((response) => {
          if (response.data[0].password == this.logindata.password) {
            localStorage.setItem("user_token", true);
            localStorage.setItem("user_id", response.data[0]._id);
            this.logindata.email = "";
            this.logindata.password = "";
            this.$router.push("/user_home");
          } else {
            alert("Invalid Creds");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>