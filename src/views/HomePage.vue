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
                      Search
                    </button>
                  </div>
                </div>
              </form>
              <h2 class="text-danger">We are present at</h2>
              <h5 class="mb-5 text-light fw-bold">
                Mumbai,&nbsp;&nbsp;Chennai,&nbsp;&nbsp;New
                Delhi,&nbsp;&nbsp;Pune,&nbsp;&nbsp;Bengaluru
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
            <div class="carousel-item mini-carousel active">
              <img
                :src="item.image1"
                class="w-100 d-block"
                alt="property_image 1"
              />
            </div>
            <div class="carousel-item mini-carousel">
              <img
                :src="item.image2"
                class="w-100 d-block"
                alt="property_image 2"
              />
            </div>
            <div class="carousel-item mini-carousel">
              <img
                :src="item.image3"
                class="w-100 d-block"
                alt="property_image 3"
              />
            </div>
            <div class="carousel-item mini-carousel">
              <img
                :src="item.image4"
                class="w-100 d-block"
                alt="property_image 4"
              />
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
                  @click="getOwnerInfo(item._id, item.property_name)"
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

    <!-- Main Carousel Start -->
    <h1 class="py-3 fw-bold mt-3 txt-shadow">For Every Need</h1>
    <div
      id="mainCarousel"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div class="carousel-inner main-carousel-inner shadow-lg">
        <div class="carousel-item active" data-bs-interval="3000">
          <img src="../assets/sittingArea.jpg" class="d-block" alt="..." />
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src="../assets/couch.jpg" class="d-block" alt="..." />
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src="../assets/workHall.jpg" class="d-block" alt="..." />
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src="../assets/kitchen.jpg" class="d-block" alt="..." />
        </div>
      </div>
    </div>
    <!-- Main Carousel End-->

    <!-- Services Start -->
    <div class="container-fluid mt-4">
      <h1 class="py-5 txt-shadow" id="services">Services</h1>
      <div class="row mx-2">
        <div class="col-3">
          <div class="card ms-3 me-3">
            <div class="card-body shadow-lg">
              <h5 class="card-title">Search Accommodations</h5>
              <hr class="m-0">
              <p class="card-text mt-2">
                Anyone can search for accommodations in different cities. To get
                Property Owner's contact details, one must register and login.
              </p>
              <a href="#" class="btn btn-info">Search</a>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card ms-3 me-3">
            <div class="card-body shadow-lg">
              <h5 class="card-title">Property Showcase</h5>
              <hr class="m-0">
              <p class="card-text mt-2">
                To showcase your property on our platform, email the details to
                us. We will get back to you for further process.
              </p>
              <a href="mailto:admin@shestays.com" class="btn btn-info">Email Us</a>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card ms-3 me-3">
            <div class="card-body shadow-lg">
              <h5 class="card-title">Contact Us</h5>
              <hr class="m-0">
              <p class="card-text mt-2">
                Have queries? Want to give suggestions? Contact us through the
                given form. Just click the button below.
              </p>
              <router-link to="/contact" class="btn btn-info">Fill the form</router-link>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card ms-3 me-3">
            <div class="card-body shadow-lg">
              <h5 class="card-title">Feedback</h5>
              <hr class="m-0">
              <p class="card-text mt-2">
                Help us to improve ourselves by providing your valuable
                feedback. This helps us to serve you better. We are looking
                forward to it.
              </p>
              <router-link to="/feedback" class="btn btn-info">Go for it!</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Services End -->
  </div>
</template>
  
  <script>
import axios from "axios";
export default {
  name: "HomePage",
  data() {
    return {
      error: "",
      data: [],
      search_item: "",
      user_id: "",
      item_id: "",
      user_email:"",
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
            this.user_email = localStorage.getItem("user_email");
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
    getOwnerInfo(property_id, property_name) {
      this.req_body.user_id = this.user_id;
      this.req_body.item_id = property_id;
      this.req_body.user_email = this.user_email;
      this.req_body.item_name = property_name;
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
.carousel-inner > .mini-carousel > img {
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
#btnReview:hover{
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

  .search-result-item-heading {
    margin: 0;
  }

  .search-result-item {
    display: inline-block;
    width: 200px;
  }
  .mini-carousel {
    height: 13rem;
  }

  .main-carousel-inner {
    max-height: 30rem;
    width: max-content;
    margin: 0rem 15rem;
  }
}

.search-result-item-heading {
  font-weight: 400;
}

.search-result-item-heading > a {
  color: #555;
}

.card-title{
  font-weight: 700 !important;
}

.txt-shadow{
  text-shadow: 0px 2px 2px rgba(0,0,0,0.4);
}

#services{
letter-spacing: 0.5rem;
font-weight: 900;
}
</style>