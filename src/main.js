// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import '~/assets/main.css';
import DefaultLayout from '~/layouts/Default.vue';
import SocialSharing from 'vue-social-sharing';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(SocialSharing);
  Vue.filter('formatDate', function(value, dateFormat = 'dd.MMM.yy') {
    if (value) {
      return format(new Date(String(value)), dateFormat, { enUS });
    }
  });
  head.meta.push({
    key: 'og:description',
    name: 'og:description',
    content: `Keep track of the most important book and movie awards and festivals.`,
  });

  head.meta.push({
    key: 'twitter:description',
    name: 'twitter:description',
    content: `Keep track of the most important book and movie awards and festivals.`,
  });
  head.meta.push({ key: 'author', name: 'author', content: 'Daniel da Rocha' });
  head.meta.push({
    key: 'description',
    name: 'description',
    content: 'Keep track of the most important book and movie awards and festivals.',
  });
  head.meta.push({ name: 'twitter:title', content: 'Awarded' });
  head.meta.push({ name: 'twitter:site', content: '@awardedto' });
  head.meta.push({ name: 'twitter:creator', content: '@danroc' });
  head.meta.push({
    name: 'twitter:image',
    content: `https://news.awarded.to/images/awarded-banner.jpg`,
  });
  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: 'og:url',
      name: 'og:url',
      content: process.env.GRIDSOME_BASE_PATH + to.path,
    });
    next();
  });
}
