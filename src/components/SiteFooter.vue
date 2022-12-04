<template>
  <!-- footer starts here-->
  <div class="container-fluid text-white p-3 mt-5 bg-grad">
      <div class="mt-3">
        <h3 class="text-center fw-bold">Want to Work with us?</h3>
        <a
          href="mailto:admin@shestays.com"
          class="text-center text-decoration-none text-dark"
          >Click Here to Mail Us</a
        >
        <hr />
      </div>

      <div class="row justify-content-around text-center text-md-start">
        <div class="col-md-2 text-center">
          <h1 class="fw-bold mt-3"><router-link to="/admin_panel" class="text-decoration-none text-white">SS</router-link></h1>
          <h4>SheStays</h4>
        </div>
        <div class="col-md-2">
          <ul class="list-unstyled">
            <li class="fw-bold my-2">Partnership</li>
            <li>
              <router-link to="/" class="text-decoration-none text-white">Website</router-link>
            </li>
            <li>
              <a href="https://github.com/DPrasoon/SheStays" class="text-decoration-none text-white">
                Contribute</a
              >
            </li>
            <li>
              <router-link to="/about" class="text-decoration-none text-white">Branding</router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-2">
          <ul class="list-unstyled">
            <li class="fw-bold my-2">About</li>
            <li>
              <router-link to="/about" class="text-decoration-none text-white"
                >Our Project</router-link
              >
            </li>
            <li>
              <router-link to="/about" class="text-decoration-none text-white">Careers</router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-2">
          <ul class="list-unstyled">
            <li class="fw-bold my-2">Support</li>
            <li>
              <router-link to="/contact" class="text-decoration-none text-white">Contact</router-link>
            </li>
            <li>
              <router-link to="/feedback" class="text-decoration-none text-white"
                >Feedback</router-link>
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
              <a href="https://www.facebook.com/" class="text-white"
                ><i class="fa-brands fa-facebook me-2 fa-1x"></i
              ></a>
            </li>
            <li>
              <a href="https://www.youtube.com/" class="text-white"
                ><i class="fa-brands fa-youtube mx-2 fa-1x"></i
              ></a>
            </li>
            <li>
              <a href="https://www.instagram.com/" class="text-white"
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
            &copy; 2022 Copyright <router-link to="/" class="text-white">SheStays</router-link>
          </p>
        </div>
      </div>
    </div>
    <!-- footer ends here  -->
</template>

<script>
export default {
name:"SiteFooter",
}
</script>
<style scoped>
.bg-grad{
  background: #0f0c29;
  background: linear-gradient(90deg,hsla(202, 71%, 27%, 1) 0%,hsla(176, 45%, 66%, 1) 100%);
}
</style>