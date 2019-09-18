<template>
  <div>
    <p class="mb-2">Latest awards and festivals news, recommendations, reviews,
      and <strong><a href="https://awarded.to/" class="title-link">Awarded</a></strong> updates. <a
          href="http://eepurl.com/dnFggL"
          target="_blank"
          rel="noopener"
          class="link-external title-link"
          >Subscribe</a
        >.</p>
        <tags-list :current-tag="currentTag"/>
  </div>
</template>

<script>
import TagsList from "~/components/TagsList"
  export default {
    name: 'IntroMenu',
    components: {
      TagsList
    },
    props: {
      currentTag: {
        type: Number,
        default: null
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
