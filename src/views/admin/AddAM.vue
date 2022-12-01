<template>
  <div>
    <h1 style="text-align: center">Add new Area Manager</h1>
    <section>
      <div class="container">
        <form>
          <fieldset>

            <div class="form-group">
              <label for="txtfname">Full Name</label><br />
              <input
                type="text"
                id="txtfname"
                class="txtfname"
                name="txtfname"
                placeholder="Enter your full name"
                v-model="formData.full_name"
                required
              />
            </div>
            <br />

            <div class="form-group">
              <label for="txtmail">Email</label><br />
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
              <label for="txtphone">Phone Number</label><br />
              <input
                type="number"
                id="txtphone"
                class="txtphone"
                name="txtphone"
                v-model="formData.phone"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <br />

            <div class="form-group">
              <label for="txtaddr1">Address Line 1</label><br />
              <input
                type="text"
                id="txtaddr1"
                v-model="formData.address_line1"
                class="txtaddr1"
                name="txtaddr1"
                placeholder="Enter Address Line 1"
                required
              />
            </div>
            <br />

            <div class="form-group">
              <label for="txtaddr2">Address Line 2</label><br />
              <input
                type="text"
                id="txtaddr2"
                v-model="formData.address_line2"
                class="txtaddr2"
                name="txtaddr2"
                placeholder="Enter Address Line 2"
                required
              />
            </div>
            <br />

            <div class="form-group">
              <label for="txtaddr3">Address Line 3</label><br />
              <input
                type="text"
                v-model="formData.address_line3"
                id="txtaddr3"
                class="txtaddr3"
                name="txtaddr3"
                placeholder="Enter Address Line 3"
              />
            </div>
            <br />

            <div class="form-group">
              <label for="txtpin">Pin Code</label><br />
              <input
                type="number"
                id="txtpin"
                v-model="formData.pincode"
                class="txtpin"
                name="txtpin"
                placeholder="Enter your Pin Code"
              />
            </div>
            <br />

            <div class="form-group">
              <label for="txtcity">City</label><br />
              <input
                type="text"
                id="txtcity"
                class="txtcity"
                name="txtcity"
                placeholder="Enter your city"
                v-model="formData.city"
                required
              />
            </div>
            <br />

            <div class="form-group">
              <label for="txtstate">State</label><br />
              <input
                type="text"
                id="txtstate"
                class="txtstate"
                name="txtstate"
                v-model="formData.state"
                placeholder="Enter your State's Name"
                required
              />
            </div>
            <br />

            <div class="form-group">
              <label for="txtcountry">Country</label><br />
              <input
                type="text"
                id="txtcountry"
                class="txtcountry"
                name="txtcountry"
                v-model="formData.country"
                placeholder="Enter your Country's Name"
                required
              />
            </div>
            <br />
          </fieldset>
          <br />

          <button type="submit" id="btnSubmit" @click="addAM">Submit</button>
          <button type="reset" id="btnReset">Reset</button>
        </form>
      </div>
    </section>
  </div>
</template>
  
  <script>
import axios from "axios";
export default {
  name: "RegistrationUser",
  data() {
    return {
      error: "",
      formData: {
        full_name: "",
        email: "",
        phone: 0,
        address_line1: "",
        address_line2: "",
        address_line3: "",
        pincode: 0,
        city: "",
        state: "",
        country: "",
        password: "12345",
      },
    };
  },
  methods: {
    addAM() {
      axios
        .post("admin/am_registration", this.formData)
        .then((response) => {
          console.log(response.data);
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
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    to right top,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
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