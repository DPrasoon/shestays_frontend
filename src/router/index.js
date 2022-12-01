import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '../views/HomePage.vue';
import HomeTemplate from '../components/HomeTemplate.vue';

// login
import LoginUser from '../views/pages/LoginUser.vue';
import LoginAM from '../views/pages/LoginAM.vue';

// registration
import RegistrationUser from '../views/pages/RegistrationUser.vue';

// common
import AboutUs from '../views/common/AboutUs.vue';
import ContactUs from '../views/common/ContactUs.vue';
import FeedbackPortal from '../views/common/FeedbackPortal.vue';

//admin
import AdminPanel from '../views/admin/Admin_Panel.vue'
import AdminTemplate from '../components/AdminTemplate.vue'
import AdminHome from '../views/admin/AdminHome.vue'
import AddAM from '../views/admin/AddAM.vue';
import AdminProfile from '../views/admin/AdminProfile.vue';
import ViewAMProfile from '../views/admin/AMProfiles.vue';
import ViewUserProfile from '../views/admin/UserProfiles.vue';
import ViewFeedback from '../views/admin/ViewFeedback.vue';

//area manager
import AM_HomePage from '../views/area_manager/AM_HomePage.vue';
import AM_HomeTemplate from '../components/AM_HomeTemplate.vue';
import RequestOwnerInfo from '../views/area_manager/RequestOwnerInfo.vue';
import AddAreaContacts from '../views/area_manager/AddAreaContacts.vue';
import AddAreaReview from '../views/area_manager/AddAreaReview.vue';
import AMProfile from '../views/area_manager/AMProfile.vue';

//user
import UserProfile from '../views/user/UserProfile.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/', component: HomeTemplate, children: [
      { path: '', component: HomePage },
      { path: 'login_user', component: LoginUser },

      { path: 'registration_user', component: RegistrationUser },
      { path: 'about', component: AboutUs },
      { path: 'contact', component: ContactUs },
      { path: 'feedback', component: FeedbackPortal },
      { path: 'add_areaManager', component: AddAM },
      { path: 'admin_profile', component: AdminProfile },
      { path: 'view_am_profile', component: ViewAMProfile },
      { path: 'view_user_profile', component: ViewUserProfile },

      { path: 'login_am', component: LoginAM },

      { path: 'admin_panel', component: AdminPanel },

    ]
  },
  {
    path: '/am_home', component: AM_HomeTemplate, children: [
      { path: '', component: AM_HomePage, meta: { am_auth: true } },
      { path: 'info_requests', component: RequestOwnerInfo, meta: { am_auth: true } },
      { path: 'add_area_contacts', component: AddAreaContacts, meta: { am_auth: true } },
      { path: 'add_area_review', component: AddAreaReview, meta: { am_auth: true } },
      { path: 'am_profile', component: AMProfile, meta: { am_auth: true } },

    ]
  },
  {
    path: '/user_home', component: HomeTemplate, children: [
      { path: '', component: UserProfile, meta: { user_auth: true } }
    ]
  },
  {
    path: '/admin_home', component: AdminTemplate, children: [
      { path: '', component: AdminHome, meta: { admin_auth: true } },
      { path: 'admin_profile', component: AdminProfile, meta: { admin_auth: true } },
      { path: 'view_am_profiles', component: ViewAMProfile, meta: { admin_auth: true } },
      { path: 'view_user_profiles', component: ViewUserProfile, meta: { admin_auth: true } },
      { path: 'view_feedback', component: ViewFeedback, meta: { admin_auth: true } },
      { path: 'add_new_am', component: AddAM, meta: { admin_auth: true } },

    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
