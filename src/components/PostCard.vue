<template>
  <article>
    <figure >
      <g-image
        alt="Cover image"
        v-if="post.cover_image"
        :src="post.cover_image"
        class="md:object-cover rounded-lg border border-gray-200"
      />
    </figure>
    <main class="-mt-8">
      <h2 class="mb-4 leading-tight md:text-2xl">
        <g-link :to="post.path" class="title-link"> {{ post.title }}</g-link>
      </h2>
      <post-meta :post="post" class="mb-4" />

      <p v-html="post.excerpt" class="mb-4" />
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
