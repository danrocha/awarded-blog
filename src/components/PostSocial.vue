<template>
<div class="text-xs flex my-8">
  <client-only>

  <component v-for="(component, index) in $options.components" :key="index" :is="component"
    :page_title="pageTitle"
    has_icon
    button_design="outline"
    >
  </component>
  </client-only>
</div>
</template>

<script>
import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";
import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue";
import VueGoodshareLinkedin from "vue-goodshare/src/providers/LinkedIn.vue";
import VueGoodshareReddit from "vue-goodshare/src/providers/Reddit.vue";
import VueGoodshareWhatsapp from "vue-goodshare/src/providers/WhatsApp.vue";
import VueGoodshareEmail from "vue-goodshare/src/providers/Email.vue";
export default {
 components: {
   VueGoodshareTwitter,
   VueGoodshareFacebook,
   VueGoodshareReddit,
   VueGoodshareLinkedin,
   VueGoodshareWhatsapp,
   VueGoodshareEmail,
 },
 data() {
   return {
     pageTitle: this.$page.title
   }
 }


};
</script>

<style lang="scss" scoped>
</style>
