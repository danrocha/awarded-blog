<template>
  <article class="mb-8 md:flex md:border-t md:border-gray-300 lg:w-3/4 lg:-mr-4">
    <figure class="full-width mb-4 md:mb-0 md:w-1/2 md:-ml-4 md:object-cover lg:ml-0">
      <g-image
        alt="Cover image"
        v-if="post.cover_image"
        :src="post.cover_image"
        class="w-full md:h-full md:object-cover"
      />
    </figure>
    <main class="md:w-1/2 md:p-4">
      <h3 class="mb-1">
        <g-link :to="post.path" class="title-link"> {{ post.title }}</g-link>
      </h3>
      <post-meta :post="post" class="mb-4" />

      <p v-html="post.description" class="mb-4" />
      <aside class="flex flex-wrap">
        <post-tags :post="post" />
      </aside>
    </main>
  </article>
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";
export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ["post"]
};
</script>

<style scoped>

</style>
