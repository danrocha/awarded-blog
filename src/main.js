// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import { format } from 'date-fns'
import { en } from 'date-fns/locale'
import '~/assets/main.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.filter('formatDate', function (value, dateFormat = 'dd.MMM.yy') {
    if (value) {
      return format(new Date(String(value)), dateFormat, { en })
    }
  })

}
