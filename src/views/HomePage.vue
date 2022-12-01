<template>
  <div class="container-fluid">
    <!-- Masthead-->
    <header class="masthead">
      <div class="container position-relative">
        <div class="row justify-content-center">
          <div class="col-xl-6">
            <div
              class=""
            >
              <!-- Page heading-->
              <h1 class="fw-bold text-white brand">SheStays</h1>
              <h3 class="mb-5 fw-bold text-white">The Female-only Accomodation Finder</h3>
              <!-- Search form-->
              <form id="searchForm" class="mb-4">
                <!-- Email address input-->
                <div class="row">
                  <div class="col">
                    <input
                      class="form-control form-control-lg"
                      id="txtcity"
                      type="text"
                      placeholder="Enter city name.."
                      v-model="search_item"
                    />
                  </div>
                  <div class="col-auto">
                    <button
                      class="btn btn-primary btn-lg"
                      id="submitButton"
                      @click.prevent="getData()"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              <h2 class="text-danger">
                We are present at
              </h2>
              <h4 class="mb-5 text-light fw-bold">
                Mumbai,&nbsp;&nbsp;Chennai,&nbsp;&nbsp;New Delhi,&nbsp;&nbsp;Pune,&nbsp;&nbsp;Bengaluru
              </h4>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Masthead ends  -->
    <div
      class="accordion w-100 search-result-item"
      id="accordionExample"
      v-for="(item, index) in data"
      :key="index"
    >
      <div class="accordion-item">
        <!-- carousel here -->
        <div
          :id="'unique' + index"
          class="carousel slide w-25 carousel_image"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="item.image1" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img :src="item.image2" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img :src="item.image3" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img :src="item.image4" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            :data-bs-target="'#unique' + index"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            :data-bs-target="'#unique' + index"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <!-- carousel end -->
        <!-- info start -->
        <div class="carousel_image w-75">
          <div class="search-result-item-body">
            <div class="row">
              <div class="col-sm-9">
                <h4 class="search-result-item-heading">
                  <a href="#">{{ item.property_name }}</a>
                </h4>
                <p class="info">{{ item.address }}</p>
                <p class="description">
                  {{ item.about }}
                </p>
              </div>
              <div class="col-sm-3 text-align-center">
                <p class="value3 mt-sm">Rating - {{ item.rating }}</p>
                <a
                  v-if="user_id"
                  class="btn btn-primary btn-info btn-sm"
                  id="btnOwner"
                  @click="getOwnerInfo(item._id)"
                  >Get Owner Info</a
                >
                <hr />
                <a
                  v-if="am_id"
                  class="btn btn-primary btn-info btn-sm"
                  id="btnReview"
                  @click="addReview(item._id)"
                  >Add Review & Contact</a
                >
              </div>
            </div>
          </div>
        </div>
        <!-- info end  -->
        <!-- details start  -->
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#collapseOne' + index"
            aria-expanded="true"
            :aria-controls="'collapseOne' + index"
          >
            Details
          </button>
        </h2>
        <div
          :id="'collapseOne' + index"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              Local Police Helpline Number - {{ item.local_police_contact }}
            </p>
            <p>Local Tiffin Services - {{ item.local_tiffin_service }}</p>
            <p>
              Local Water Supply Services -
              {{ item.local_water_supply_service }}
            </p>
            <p class="fs-mini text-muted">Facilities - {{ item.facilities }}</p>
            <p>Property Type- {{ item.property_type }}</p>
            <p>Security Rating - {{ item.security_rating }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
export default {
  name: "SearchPage",
  data() {
    return {
      error: "",
      data: [],
      search_item: "",
      user_id: "",
      item_id: "",
      am_id: "",
    };
  },
  methods: {
    getData() {
      axios
        .get("accomodations/get/" + this.search_item)
        .then((response) => {
          console.log(response.data);
          this.data = response.data;
          this.user_id = localStorage.getItem("user_id");
          this.am_id = localStorage.getItem("am_id");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getOwnerInfo(item_id) {
      console.log("Inside Get Owner");

      console.log("USer ID" + this.user_id);
      console.log("ITem id" + item_id);
      axios.post("am/ownerInfoReq", this.user_id);
      alert("Request Sent. You will be contacted soon.");
    },
    addReview(item_id) {
      console.log("Item ID" + item_id);
      console.log("AM ID" + this.am_id);
      if (this.am_id) {
        localStorage.setItem("item_id", item_id);
        this.$router.push("/am_home/add_area_review");
      } else {
        alert("AM need to SignIn");
      }
    },
  },
};
</script>
  
<style scoped>
.container-fluid {
  padding-right: 0;
  padding-left: 0;
  margin-right: auto;
  margin-left: auto;
}

.carousel_image {
  display: flex;
  float: left;
}

.carousel-item {
  height: 180px;
}

.search-result-item {
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  display: block;
  overflow: hidden;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.search-result-item:after,
.search-result-item:before {
  content: " ";
  display: table;
}

.search-result-item:after {
  clear: both;
}

@media (min-width: 768px) {
  .search-result-item {
    display: inline-block;
    width: 200px;
  }
}

@media (max-width: 767px) {
  .search-result-item {
    max-height: 200px;
  }
}

.search-result-item {
  max-width: 100%;
}

.search-result-item .info {
  margin-top: 2px;
  font-size: 12px;
  color: #999;
}

.search-result-item .description {
  font-size: 13px;
}

.brand{
  font-size: 64px !important;
}

header.masthead {
  position: relative;
  background: hsla(323, 91%, 51%, 1);
  background: linear-gradient(
    90deg,
    hsla(323, 91%, 51%, 1) 0%,
    hsla(329, 20%, 24%, 1) 100%
  );
  background: -moz-linear-gradient(
    90deg,
    hsla(323, 91%, 51%, 1) 0%,
    hsla(329, 20%, 24%, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    hsla(323, 91%, 51%, 1) 0%,
    hsla(329, 20%, 24%, 1) 100%
  );
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F4119E", endColorstr="#4A313E", GradientType=1 );
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#020344", endColorstr="#28B8D5", GradientType=1 );
  background-size: cover;
  padding-top: 8rem;
  padding-bottom: 8rem;
}
header.masthead:before {
  content: "";
  position: absolute;
  background-color: #1c375e;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0.5;
}
header.masthead h1,
header.masthead {
  font-size: 2rem;
}

@media (min-width: 768px) {
  .search-result-item-body {
    margin-left: 50px;
  }
}

.search-result-item-heading {
  font-weight: 400;
}

.search-result-item-heading > a {
  color: #555;
}

@media (min-width: 768px) {
  .search-result-item-heading {
    margin: 0;
  }
}
</style>