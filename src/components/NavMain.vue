<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/"></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
            <li class="nav-item rounded">
              <router-link class="nav-link active" aria-current="page" to="/"
                ><i class="bi bi-house-fill me-2"></i>Home</router-link
              >
            </li>

            <li class="nav-item rounded">
              <router-link
                class="nav-link"
                aria-current="page"
                to="registration_user"
                ><i class="bi bi-house-fill me-2"></i>SignUp</router-link
              >
            </li>

            <li class="nav-item rounded">
              <router-link class="nav-link" aria-current="page" to="about"
                ><i class="bi bi-house-fill me-2"></i>About</router-link
              >
            </li>
            <li class="nav-item rounded">
              <router-link class="nav-link" aria-current="page" to="contact"
                ><i class="bi bi-house-fill me-2"></i>Contact</router-link
              >
            </li>
            <li class="nav-item rounded">
              <router-link class="nav-link" aria-current="page" to="feedback"
                ><i class="bi bi-house-fill me-2"></i>Feedback</router-link
              >
            </li>
            <li class="nav-item rounded">
              <router-link class="nav-link" aria-current="page" to="login_AM"
                ><i class="bi bi-house-fill me-2"></i>AM Sign-In</router-link
              >
            </li>
          </ul>
        </div>
        <button
          class="btn btn-outline-light text-light me-3"
          data-bs-toggle="modal"
          data-bs-target="#ModalForm"
        >
          Login
        </button>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavMain",
};
</script>
<style scoped>
.navbar-brand {
  background-image: url("../assets/logo.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 48px;
  height: 48px;
}

.navbar-nav .nav-item:hover {
  background-color: rgba(180, 190, 203, 0.4);
}
</style>