<template>
  <div>
    <h1 class="mt-3 mb-3 py-2 fw-bold bg-light">View Feedbacks</h1>
    <div class="container-fluid">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col" class="fs-5 py-3">Name</th>
            <th scope="col" class="fs-5 py-3">Email</th>
            <th scope="col" class="fs-5 py-3">Feedback</th>
            <th scope="col" class="fs-5 py-3">Rating</th>
            <th scope="col" class="fs-5 py-3">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for ="item in data" :key="item._id">
            <th scope="row">{{item.name}}</th>
            <td>{{item.email}}</td>
            <td>{{item.feedback}}</td>
            <td>{{item.rating}}</td>
            <td><button class="btn btn-outline-danger fw-bold" v-if="item._id" @click="deleteFeedback(item._id)">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AdminHome",
  data() {
    return {
      error: "",
      data: [],
    };
  },
  methods: {
    deleteFeedback(feedback_id){
      axios
          .delete("admin/delete_feedback/"+feedback_id)
          .then((response) => {
            this.data = response.data;
            alert("Feedback deleted.");
          })
          .catch((error) => {
            console.log(error);
          });
    }
  },
  async mounted(){
    await axios
        .get("admin/view_feedback")
        .then((response) => {
          this.data = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
  }
};
</script>

<style>
</style>