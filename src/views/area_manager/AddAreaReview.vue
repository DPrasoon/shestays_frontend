<template>
  <div class="container">
    <h1>Area REview</h1>
    <button @click="getData">Load</button>
    <p>{{item_id}}</p>
    <p>Property Name</p><input type="text" v-model="data.property_name"><br>
    <p>Property Address</p><input type="text" v-model="data.address"><br>
    <p>Security Rating</p><input type="text" v-model="data.security_rating"><br>
    <p>local_police_contact</p><input type="text" v-model="data.local_police_contact"><br>
    <p>Local_tiffin_service</p><input type="text" v-model="data.local_tiffin_service"><br>
    <p>local_water_supply_service Rating</p><input type="text" v-model="data.local_water_supply_service"><br>
    <button @click="updateData">Update</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
data(){
  return{
    item_id:"",
    data:{_id:"",property_name:"",address:"",security_rating:"",local_police_contact:"",local_tiffin_service:"",local_water_supply_service:""},
  }
},
methods:{
  getData(){
    this.item_id = localStorage.getItem("item_id");
    
    axios
        .get("accomodations/get_property_details/" + this.item_id)
        .then((response) => {
          console.log(response.data);
          this.data = response.data[0];
        })
        .catch((error) => {
          console.log(error);
        });
  },
  updateData(){
    this.data._id = this.item_id;
    axios
        .put("accomodations/update",this.data)
        .then((response) => {
          console.log(response.data);
          this.data = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
  }
}
}
</script>

<style>

</style>