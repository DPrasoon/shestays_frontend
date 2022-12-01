<template>
  <div>
    <h1>View Feedback</h1>
    <div class="container">
      <button @click="getData">Load Feedback</button><br />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Feedback</th>
            <th scope="col">Rating</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for ="item in data" :key="item._id">
            <th scope="row">{{item.name}}</th>
            <td>{{item.email}}</td>
            <td>{{item.feedback}}</td>
            <td>@{{item.rating}}</td>
            <td><button @click.prevent="deleteFeedback(item._id)">Delete</button></td>
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
    getData() {
      axios
        .get("admin/view_feedback")
        .then((response) => {
          console.log(response.data);
          this.data = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteFeedback(feedback_id){
      axios
          .delete("admin/delete_feedback/"+feedback_id)
          .then((response) => {
            console.log(response.data);
            this.data = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
    }
  },
};
</script>

<style>
</style>