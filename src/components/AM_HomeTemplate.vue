<template>
  <div>
    <AM_Nav />
    <router-view/>
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
  </div>
</template>

<script>
import AM_Nav from "./AM_Nav.vue";
export default {
  name: "AM_HomeTemplate",
  components: {
    AM_Nav,
  },
};
</script>