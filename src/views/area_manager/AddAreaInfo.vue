<template>
  <div class="container-fluid">
    <h1 class="heading fw-bold text-dark bg-light">
      Add Area Contacts & Safety Review
    </h1>
    <button @click="getData" class="btn btn-info mt-4 mb-4">
      Load Property Details
    </button>
    <form @submit.prevent="updateData">
      <!-- Property Name Start  -->
      <div class="row g-3 align-items-center mb-3 ml-23">
        <div class="col-2">
          <label for="txtpropname" class="col-form-label">Property Name</label>
        </div>
        <div class="col-auto">
          <input
            v-model="data.property_name"
            type="text"
            id="txtpropname"
            class="form-control"
            aria-describedby="propNameHelpInline"
            disabled
          />
        </div>
        <div class="col-auto">
          <span id="propNameHelpInline" class="form-text">
            Cannot be changed.
          </span>
        </div>
      </div>
      <!-- Property Name End  -->
      <!-- Property Address Start  -->
      <div class="row g-3 align-items-center mb-3 ml-23">
        <div class="col-2">
          <label for="txtAdd" class="col-form-label">Property Address</label>
        </div>
        <div class="col-auto">
          <input
            v-model="data.address"
            type="text"
            id="txtAdd"
            class="form-control"
            aria-describedby="propAddHelpInline"
            disabled
          />
        </div>
        <div class="col-auto">
          <span id="propAddHelpInline" class="form-text">
            Cannot be changed.
          </span>
        </div>
      </div>
      <!-- Property Name End  -->
      <!-- Security Rating start -->
      <div class="row g-3 align-items-center mb-3 ml-23">
        <div class="col-2">
          <label for="txtSecurityRating" class="col-form-label"
            >Security Rating</label
          >
        </div>
        <div class="col-auto">
          <input
            v-model="data.security_rating"
            type="text"
            id="txtSecurityRating"
            class="form-control"
            aria-describedby="securityRatingHelpInline"
          />
        </div>
        <div class="col-auto">
          <span id="securityRatingHelpInline" class="form-text">
            Between (0.0 - 10.0)
          </span>
        </div>
      </div>
      <!-- Security Rating End  -->
      <!-- Local Police Contact start -->
      <div class="row g-3 align-items-center mb-3 ml-23">
        <div class="col-2">
          <label for="txtPolicePhone" class="col-form-label"
            >Local Police Contact</label
          >
        </div>
        <div class="col-auto">
          <input
            v-model="data.local_police_contact"
            type="text"
            id="txtPolicePhone"
            class="form-control"
            aria-describedby="PolicePhoneHelpInline"
          />
        </div>
        <div class="col-auto">
          <span id="PolicePhoneHelpInline" class="form-text">
            All formats accepted
          </span>
        </div>
      </div>
      <!-- Local Police Contact End  -->
      <!-- Local Tiffin Service Contact start -->
      <div class="row g-3 align-items-center mb-3 ml-23">
        <div class="col-2">
          <label for="txtTiffinPhone" class="col-form-label"
            >Local Tiffin Service Contact</label
          >
        </div>
        <div class="col-auto">
          <input
            v-model="data.local_tiffin_service"
            type="text"
            id="txtTiffinPhone"
            class="form-control"
            aria-describedby="TiffinPhoneHelpInline"
          />
        </div>
        <div class="col-auto">
          <span id="TiffinPhoneHelpInline" class="form-text">
            All formats accepted
          </span>
        </div>
      </div>
      <!-- Local Tiffin Service Contact End  -->
      <!-- Local Water Supply Service Contact start -->
      <div class="row g-3 align-items-center mb-3 ml-23">
        <div class="col-2">
          <label for="txtWaterPhone" class="col-form-label"
            >Local Water Supply Service Contact</label
          >
        </div>
        <div class="col-auto">
          <input
            v-model="data.local_water_supply_service"
            type="text"
            id="txtWaterPhone"
            class="form-control"
            aria-describedby="WaterPhoneHelpInline"
          />
        </div>
        <div class="col-auto">
          <span id="WaterPhoneHelpInline" class="form-text">
            All formats accepted
          </span>
        </div>
      </div>
      <!-- Local Water Supply Service Contact End  -->
      <button class="btn btn-lg btn-secondary" type="submit">Update</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      item_id: "",
      data: {
        _id: "",
        property_name: "",
        address: "",
        security_rating: "",
        local_police_contact: "",
        local_tiffin_service: "",
        local_water_supply_service: "",
      },
    };
  },
  methods: {
    getData() {
      this.item_id = localStorage.getItem("item_id");

      axios
        .get("accomodations/get_property_details/" + this.item_id)
        .then((response) => {
          this.data = response.data[0];
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateData() {
      this.data._id = this.item_id;
      axios
        .put("accomodations/update", this.data)
        .then((response) => {
          this.data = response.data;
          alert("Data Updated");
          localStorage.removeItem("item_id");
          this.$router.push('/');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>