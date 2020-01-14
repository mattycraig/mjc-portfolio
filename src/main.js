import DefaultLayout from '~/layouts/Default.vue';

// BOOTSTRAP VUE
import BootstrapVue from 'bootstrap-vue';
import './assets/styles/main.scss';

// FONTS
require('typeface-oswald');
require('typeface-poppins');

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faTwitter,
  faDribbble,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import {
  faTimes,
  faPencilAlt,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
library.add(
  faGithub,
  faTwitter,
  faDribbble,
  faLinkedinIn,
  faTimes,
  faPencilAlt,
  faHeart
);

// ETC
// import checkIfMobile from './mixins/checkIfMobile';

export default function(Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue);
  Vue.component('Layout', DefaultLayout);
  Vue.component('font-awesome', FontAwesomeIcon);

  // Vue.mixin(checkIfMobile);
}
