<template>
  <div>
    <h1 class="mt-5 pt-3 pb-1 text-center fw-bold">Contact Us</h1>
    <section class="pt-3 pb-5">
      <div class="container">
        <form @submit.prevent="addQuery">
          <fieldset>
            <div class="form-group">
              <label class="fw-bold" for="txtfname">Name<span class="text-danger">*</span></label><br />
              <input
                type="text"
                id="txtname"
                name="txtfname"
                placeholder="Enter name"
                v-model="formData.name"
                required
              />
            </div>
            <br />

            <div class="form-group">
              <label class="fw-bold" for="txtmail">Email<span class="text-danger">*</span></label><br />
              <input
                type="email"
                id="txtmail"
                class="txtmail"
                name="txtmail"
                placeholder="Enter your email"
                v-model="formData.email"
                required
              />
            </div>
            <br />

            <div class="form-group">
              <label class="fw-bold" for="txtmsg">Message/Query<span class="text-danger">*</span></label><br />
              <textarea
                class="form-control"
                placeholder=" Write here"
                id="msg"
                name="msg"
                v-model="formData.query"
                required
              />
            </div>
            <br />
          </fieldset>
          <br />
          <button type="submit" id="btnSubmit">Submit</button>
          <button type="reset" id="btnReset">Reset</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ContactUs",
  data() {
    return {
      error: "",
      formData: {
        name: "",
        email: "",
        query: "",
        am_id: "",
      },
    };
  },
  methods: {
    addQuery() {
      this.formData.am_id = localStorage.getItem("am_id");
      console.log(this.formData);
      debugger
      axios
        .post("common/contact", this.formData)
        .then(() => {
          alert("Thanks for contacting us. We will reach you back soon!");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Montserrat";
}

section {
  text-align: left !important;
  min-height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    to right top,
    #051937,
    #004d7a,
    #008793
  );
}
.container {
  max-width: 600px;
  width: 90%;
  padding: 20px;
  box-shadow: 0px 0px 20px #00000020;
  border-radius: 8px;
  background-color: white;
  margin-top: 20px;
}

label {
  font-weight: 500;
}

.form-group {
  width: 100%;
  margin-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
}

.form-group input {
  width: 100%;
  border: 1.5px solid rgba(128, 128, 128, 0.419);
  padding: 5px;
  font-size: 18px;
  margin-top: 5px;
  border-radius: 4px;
}

select {
  width: 50%;
  border: 1.5px solid rgba(128, 128, 128, 0.419);
  padding: 5px;
  font-size: 18px;
  margin-top: 5px;
  border-radius: 4px;
}

fieldset {
  box-shadow: 0px 0px 20px #00000020;
  border-radius: 8px;
}

textarea {
  font-family: inherit;
  line-height: inherit;
  margin-top: 5px;
  font-size: 18px;
}

#btnSubmit,
#btnReset {
  float: right;
  padding: 10px 30px;
  border: none;
  outline: none;
  background-color: rgb(180, 220, 255);
  font-family: "Montserrat";
  font-size: 18px;
  cursor: pointer;
  /* text-align:right; */
}

#btnReset:hover,
#btnSubmit:hover {
  background-color: lightpink;
}

#btnReset {
  float: left;
}

#btnSubmit {
  background-color: aquamarine;
}
</style>