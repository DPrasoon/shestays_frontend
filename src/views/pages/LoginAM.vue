<template>
  <div class="text-center">
    <main class="form-signin w-100 m-auto">
      <form @submit.prevent="getData">
        <img
          class="mb-4 mt-5 pt-3"
          src="../../assets/logo.png"
          alt=""
          width="128"
          height="140"
        />
        <h1 class="h3 mb-3 fw-normal">Area Manager Login</h1>

        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            v-model="logindata.email"
            required
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
            required
          />
          <label for="floatingPassword">Password</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
        <p class="mt-5 mb-3 text-muted">© 2022</p>
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
        .get("am/get/"+this.logindata.email)
        .then((response) => {
          if(response.data[0].password == this.logindata.password)
          {
            localStorage.setItem("am_token",true);
            localStorage.setItem("am_id",response.data[0]._id);
            this.$router.push('/am_home');
          }
          else{
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