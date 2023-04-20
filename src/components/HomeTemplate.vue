<template>
  <div>
    <NavMain :userLoggedIn="userLoggedIn"/>
    <router-view :user_logout="user_logOut"/>
    <SiteFooter />
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
              <button
                type="submit"
                class="btn w-100"
                data-bs-dismiss="modal"
                id="btnLogin"
              >
                Login
              </button>
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
import SiteFooter from "./SiteFooter.vue";
export default {
  name: "HomeTemplate",
  components: {
    NavMain,
    SiteFooter,
  },
  data() {
    return {
      error: "",
      logindata: {},
      userLoggedIn: false,
      amLoggedIn: false,
      adminLoggedIn: false,
    };
  },
  methods: {
    getData() {
      axios
        .get("common/get/" + this.logindata.email)
        .then((response) => {
          //verifying password
          if (response.data[0].password == this.logindata.password) {
            localStorage.setItem("user_token", true);
            localStorage.setItem("user_id", response.data[0]._id);
            localStorage.setItem("user_email", this.logindata.email);

            //resetting input fields
            this.logindata.email = "";
            this.logindata.password = "";

            //redirecting to user home page
            this.$router.push("/user_home");
            location.reload();
          } else {
            alert(
              "Please check inputs. Either email and/or password is incorrect."
            );
          }
        })
        .catch((error) => {
          alert(
              "Please check inputs. Either email and/or password is incorrect."
            );
          console.log(error);
        });
    },
    user_logOut() {
      this.userLoggedIn = false;
    },
  },
};
</script>

<style scoped>
#btnLogin {
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  background-image: linear-gradient(112deg, #ba5092, #df4976 98%) !important;
}

#btnLogin:hover {
  background: -webkit-linear-gradient(
    0deg,
    hsla(323, 91%, 51%, 1) 0%,
    hsla(329, 20%, 24%, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  border: 0.1rem solid #df4976;
}

.modal-title{
  background: -webkit-linear-gradient(
    0deg,
    hsla(323, 91%, 51%, 1) 0%,
    hsla(329, 20%, 24%, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}
</style>