<template>
  <div>
    <h1 style="text-align: center">We value your feedback!</h1>
    <section>
      <div class="container">
        <form>
          <fieldset>
            <div class="form-group">
              <label for="txtfname">Name</label><br />
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
              <label for="txtfeedback">Feedback</label><br />
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="feedback"
                name="feedback"
                v-model="formData.feedback"
                required
              />
            </div>
            <br />

            <div class="form-group">
              <label for="txtmail">Ratings</label><br />
              <select
                class="form-select"
                aria-label="Default select example"
                name="rating"
                id="selectedRating"
              >
                <option selected>Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <br />
          </fieldset>
          <br />
          <button type="submit" id="btnSubmit" @click="addFeedback">Submit</button>
          <button type="reset" id="btnReset">Reset</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "FeedbackPortal",
  data() {
    return {
      error: "",
      formData: {
        name: "",
        email: "",
        feedback: "",
        rating: "",   //---------------------------work on this
      },
    };
  },
  methods: {
    addFeedback() {
      axios
        .post("common/feedback", this.formData)
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
  min-height: 80vh;
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