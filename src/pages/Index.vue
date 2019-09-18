<template>
  <Layout>
    <!-- List posts -->

      <div class="post-list">
      <aside class="text-sm mb-8 sm:w-1/2 md:w-2/3 lg:w-1/2">
        <intro-menu/>
      </aside>
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
import IntroMenu from "~/components/IntroMenu.vue";
export default {
  components: {
    Author,
    IntroMenu,
    PostCard,
  },
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>
<style scoped>
@screen md
{
  .post-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
}
@screen xl
{
  .post-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
  }
}
</style>
