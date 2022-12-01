<template>
  <div>
    <NavMain />
    <router-view />
    <!-- footer starts here-->
    <div
      class="container-fluid text-white p-3 mt-5"
      style="
        background: #0f0c29;
        background: linear-gradient(90deg,hsla(202, 71%, 27%, 1) 0%,hsla(176, 45%, 66%, 1) 100%
        );
      "
    >
      <div class="mt-3">
        <h3 class="text-center fw-bold">Want to Work with us?</h3>
        <a
          href="mailto:admin@shestays.com"
          class="text-center text-decoration-none text-dark"
          >Click Here to Mail Us</a
        >
        <!-- <center><button class="btn btn-block btn-outline-light">Get Started</button></center> -->
        <hr />
      </div>

      <div class="row justify-content-around text-center text-md-start">
        <div class="col-md-2 text-center">
          <h1 class="fw-bold mt-3">SS</h1>
          <h4>SheStays</h4>
        </div>
        <div class="col-md-2">
          <ul class="list-unstyled">
            <li class="fw-bold my-2">Partnership</li>
            <li>
              <a href="#" class="text-decoration-none text-white">Website</a>
            </li>
            <li>
              <a href="#" class="text-decoration-none text-white">
                Social Media</a
              >
            </li>
            <li>
              <a href="#" class="text-decoration-none text-white">Branding</a>
            </li>
          </ul>
        </div>
        <div class="col-md-2">
          <ul class="list-unstyled">
            <li class="fw-bold my-2">About</li>
            <li>
              <a href="#" class="text-decoration-none text-white"
                >Our Project</a
              >
            </li>
            <li>
              <a href="#" class="text-decoration-none text-white">Careers</a>
            </li>
          </ul>
        </div>
        <div class="col-md-2">
          <ul class="list-unstyled">
            <li class="fw-bold my-2">Support</li>
            <li>
              <a href="#" class="text-decoration-none text-white">Contact</a>
            </li>
            <li>
              <a href="#" class="text-decoration-none text-white"
                >Support Request</a
              >
            </li>
          </ul>
        </div>
        <div class="col-md-2">
          <li class="fw-bold my-2 list-unstyled">Follow us</li>
          <ul
            class="
              list-unstyled
              d-flex
              justify-content-center justify-content-md-start
            "
          >
            <li>
              <a href="#" class="text-white"
                ><i class="fa-brands fa-facebook me-2 fa-1x"></i
              ></a>
            </li>
            <li>
              <a href="#" class="text-white"
                ><i class="fa-brands fa-whatsapp mx-2 fa-1x"></i
              ></a>
            </li>
            <li>
              <a href="#" class="text-white"
                ><i class="fa-brands fa-youtube mx-2 fa-1x"></i
              ></a>
            </li>
            <li>
              <a href="#" class="text-white"
                ><i class="fa-brands fa-instagram mx-2 fa-1x"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-md-12 text-center pt-2">
          <p>
            &copy; 2022 Copyright <a href="#" class="text-white">SheStays</a>
          </p>
        </div>
      </div>
    </div>
    <!-- footer ends here  -->
    <!-- login modal  -->
    <div class="modal fade" id="ModalForm" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- Login Form -->
          <form action="">
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
                />
              </div>
              <div class="mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="remember"
                  required
                />
                <label class="form-check-label" for="remember"
                  >Remember Me</label
                >
                <a href="#" class="float-end">Forgot Password</a>
              </div>
            </div>
            <div class="modal-footer pt-4">
              <button type="button" class="btn btn-success mx-auto w-100" @click="getData">
                Login
              </button>
            </div>
            <p class="text-center">Not yet account, <a href="#">Signup</a></p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavMain from "./NavMain.vue";
export default {
  name: "HomeTemplate",
  components: {
    NavMain,
  },data() {
    return {
      error: "",
      logindata:{}
    };
  },
  methods: {
    getData() {
      axios
        .get("common/get/"+this.logindata.email)
        .then((response) => {
          console.log(response.data[0].password);
          if(response.data[0].password == this.logindata.password)
          {
            console.log("Login Success")
            localStorage.setItem("user_token",true);
            localStorage.setItem("user_id",response.data[0]._id);
            this.$router.push('/user_home');
          }
          else{
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