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
                to="/am_home/info_requests"
                ><i class="bi bi-house-fill me-2"></i>Requests</router-link
              >
            </li>
            <li class="nav-item rounded">
              <router-link
                class="nav-link"
                aria-current="page"
                to="/am_home/add_area_review"
                ><i class="bi bi-house-fill me-2"></i>Add Review</router-link
              >
            </li>
            <li class="nav-item rounded">
              <router-link
                class="nav-link"
                aria-current="page"
                to="/am_home/add_area_contacts"
                ><i class="bi bi-house-fill me-2"></i>Add Contacts</router-link
              >
            </li>
            <li class="nav-item rounded">
              <router-link
                class="nav-link"
                aria-current="page"
                to="/am_home/am_profile"
                ><i class="bi bi-house-fill me-2"></i>My Profile</router-link
              >
            </li>
          </ul>
        </div>
        <button class="btn btn-outline-light text-light" @click="logout">
          Logout
        </button>
      </div>
    </nav>
  </div>
</template>
  <script>
export default {
  name: "AM_Nav",
  data() {
    return {
      error: "",
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("am_token");
      localStorage.removeItem("am_id");
      this.$router.push("/login_am");
    },
  },
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