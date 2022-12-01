<template>
    <div class="text-center">
      <main class="form-signin w-100 m-auto">
        <form>
          <img
            class="mb-4"
            src="../../assets/logo.png"
            alt=""
            width="72"
            height="57"
          />
          <h1 class="h3 mb-3 fw-normal">Admin Panel</h1>
  
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              v-model="logindata.email"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              v-model="logindata.password"
            />
            <label for="floatingPassword">Password</label>
          </div>
  
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" @click.prevent="getData">
            Sign in
          </button>
          <p class="mt-5 mb-3 text-muted">© 2023</p>
        </form>
      </main>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: "LoginAM",
    data() {
      return {
        error: "",
        logindata:{}
      };
    },
    methods: {
      getData() {
        axios
          .get("admin/get/"+this.logindata.email)
          .then((response) => {
            console.log(response.data[0].password);
            if(response.data[0].password == this.logindata.password)
            {
              console.log("Login Success")
              localStorage.setItem("admin_token",true);
              localStorage.setItem("admin_id",response.data[0]._id);
              this.$router.push('/admin_home');
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
  
  <style scoped>
  html,
  body {
    height: 100%;
  }
  
  body {
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
  }
  
  .form-signin {
    max-width: 330px;
    padding: 15px;
  }
  
  .form-signin .form-floating:focus-within {
    z-index: 2;
  }
  
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  </style>