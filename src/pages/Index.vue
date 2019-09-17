<template>
  <Layout>
    <!-- List posts -->
    <div class="lg:flex lg:justify-end lg:flex-wrap">
      <post-card
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
{
  posts: allPost{
    edges {
      node {
        id
        title
        path
        tags {
          id
          title
          path
        }
        date (format: "D. MMMM YYYY")

        description
        cover_image (width: 770, height: 380, blur: 10)
        ...on Post {
            id
            title
            path
        }
      }
    }
  }
}
</page-query>

<script>
import Author from "~/components/Author.vue";
import PostCard from "~/components/PostCard.vue";
export default {
  components: {
    Author,
    PostCard
  },
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>
<style>
</style>
