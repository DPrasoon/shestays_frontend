<template>
  <div class="container-fluid">
    <!-- Masthead-->
    <header class="masthead">
      <div class="container position-relative">
        <div class="row justify-content-center">
          <div class="col-xl-6">
            <div>
              <!-- Page heading-->
              <h1 class="fw-bold text-white brand">SheStays</h1>
              <h3 class="mb-5 fw-bold text-white">
                The Female-only Accomodation Finder
              </h3>
              <!-- Search form-->
              <form id="searchForm" class="mb-4" @submit.prevent="getData()">
                <!-- City input-->
                <div class="row">
                  <div class="col">
                    <input
                      class="form-control form-control-lg"
                      id="txtcity"
                      type="text"
                      placeholder="Enter city name..."
                      v-model="search_item"
                      @keyup="onlyText()"
                    />
                  </div>
                  <div class="col-auto">
                    <button
                      class="btn btn-outline-light fw-bold btn-lg"
                      id="submitButton"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              <h2 class="text-danger">We are present at</h2>
              <h5 class="mb-5 text-light fw-bold">
                Mumbai,&nbsp;&nbsp;Chennai,&nbsp;&nbsp;New Delhi,&nbsp;&nbsp;Pune,&nbsp;&nbsp;Bengaluru
              </h5>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Masthead ends  -->
    <!-- Search Results start -->
    <div
      class="accordion w-100 search-result-item bg-transparent"
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
          <div class="carousel-inner rounded-start">
            <div class="carousel-item active">
              <img :src="item.image1" class="w-100 d-block" alt="..." />
            </div>
            <div class="carousel-item">
              <img :src="item.image2" class="w-100 d-block" alt="..." />
            </div>
            <div class="carousel-item">
              <img :src="item.image3" class="w-100 d-block" alt="..." />
            </div>
            <div class="carousel-item">
              <img :src="item.image4" class="w-100 d-block" alt="..." />
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
            <div class="row mt-2">
              <div class="col-sm-9">
                <span class="search-result-item-heading my-3 fw-bold fs-3">{{
                  item.property_name
                }}</span>
                <span class="fw-bold text-success ms-2 fs-5">
                  ( Rating - {{ item.rating }})</span
                >
                <h4 class="info mb-3">{{ item.address }}</h4>
                <p class="description fw-bold">
                  {{ item.about }}
                </p>
              </div>
              <div class="col-sm-3 text-align-center">
                <h4 class="mt-sm my-3">
                  <span class="fw-bold text-danger"> Security Rating </span> -
                  {{ item.security_rating }}
                </h4>
                <a
                  v-if="user_id"
                  class="btn my-3"
                  id="btnOwner"
                  @click="getOwnerInfo(item._id)"
                  >Get Owner Info</a
                >
                <a
                  v-if="am_id"
                  class="btn my-3"
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
            class="accordion-button fs-5 bg-details text-light"
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
          <div class="accordion-body row">
            <div class="col-4 float-left ps-2">
              <ul>
                <li class="text-start">
                  <h6>
                    <i class="fa-solid fa-bell-concierge"></i
                    ><span class="fw-bold"> Facilities </span> -
                    {{ item.facilities }}
                  </h6>
                </li>
                <li class="text-start">
                  <h6>
                    <i class="fa-solid fa-square-h"></i
                    ><span class="fw-bold"> Property Type</span>-
                    {{ item.property_type }}
                  </h6>
                </li>
              </ul>
            </div>
            <div class="col-4 float-left ps-2">
              <ul>
                <li class="text-start">
                  <h6>
                    <i class="fa-solid fa-bowl-food"></i>
                    <span class="fw-bold"> Local Tiffin Services</span>
                    - {{ item.local_tiffin_service }}
                  </h6>
                </li>
                <li class="text-start">
                  <h6>
                    <i class="fa-solid fa-glass-water"></i>
                    <span class="fw-bold"> Local Water Supply Services</span>
                    -
                    {{ item.local_water_supply_service }}
                  </h6>
                </li>
              </ul>
            </div>
            <div class="col-4 float-left ps-2">
              <ul>
                <li class="text-start">
                  <h6>
                    <i class="fa-solid fa-building-shield"></i>
                    <span class="fw-bold"> Local Police Helpline Number</span>
                    - {{ item.local_police_contact }}
                  </h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Search Results End -->
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
      req_body: {},
    };
  },
  methods: {
    onlyText() {
      this.search_item = this.search_item.replace("  ", " ");
    },
    getData() {
      //sanitizing and controlling input
      var s_item = this.search_item.trim();
      s_item = s_item.split(" ");
      s_item = s_item.map((str) => {
        if (str != "") {
          str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
          return str;
        }
      });
      s_item = s_item.join(" ");

      //sending request
      axios
        .get("accomodations/get/" + s_item)
        .then((response) => {
          if (response.data.length != 0) {
            this.data = response.data;
            this.user_id = localStorage.getItem("user_id");
            this.am_id = localStorage.getItem("am_id");
            if (!this.user_id)
              alert(
                "Users are required to sign-in to get Owner Contact Details."
              );
          } else {
            alert("We are currently not present here. Exapanding Soon.");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getOwnerInfo(property_id) {
      this.req_body.user_id = this.user_id;
      this.req_body.item_id = property_id;
      axios.post("am/ownerInfoReq", this.req_body);
      alert("Request Sent. You will be contacted soon.");
    },
    addReview(item_id) {
      if (this.am_id) {
        localStorage.setItem("item_id", item_id);
        this.$router.push("/am_home/add_area_info");
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
.carousel-inner > .carousel-item > img {
  margin: auto;
}

.search-result-item {
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  display: block;
  overflow: hidden;
}

.search-result-item:after,
.search-result-item:before {
  content: " ";
  display: table;
}

#btnOwner,
#btnReview {
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  background-image: linear-gradient(112deg, #ba5092, #df4976 98%) !important;
}

#btnOwner:hover,
#btnReview:hover {
  background: -webkit-linear-gradient(
    0deg,
    hsla(323, 91%, 51%, 1) 0%,
    hsla(329, 20%, 24%, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  border: 0.1rem solid #df4976;
}

.search-result-item:after {
  clear: both;
}

@media (min-width: 768px) {
  .search-result-item {
    display: inline-block;
    width: 200px;
  }
  .carousel-item {
    height: 13rem;
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
  text-align: justify;
  background: -webkit-linear-gradient(
    0deg,
    hsla(323, 91%, 51%, 1) 0%,
    hsla(329, 20%, 24%, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand {
  font-size: 64px !important;
}

.bg-details {
  background: #0f0c29;
  background: linear-gradient(
    90deg,
    hsla(202, 71%, 27%, 1) 0%,
    hsla(176, 45%, 66%, 1) 100%
  );
}

.accordion-button {
  border-top-left-radius: 0px !important;
  border-top-right-radius: 0px !important;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
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