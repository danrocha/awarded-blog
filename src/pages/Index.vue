<template>
  <Layout>
    <!-- List posts -->
    <div class="home-grid">
      <aside class="text-sm">
        <intro-menu/>
      </aside>
      <div  class="post-list">
        <post-card
          v-for="edge in $page.posts.edges"
          :key="edge.node.id"
          :post="edge.node"
        />
      </div>
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
        excerpt
        tags {
          id
          title
          path
        }
        date (format: "D. MMMM YYYY")
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
  name: 'Home',
  metaInfo: {
    title: "Awarded News",
    titleTemplate: null,
  },
  components: {
    Author,
    IntroMenu,
    PostCard,
  },
};
</script>
<style scoped>
.home-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
}
@screen sm {
  .home-grid {
    grid-template-columns: 200px 1fr;
  }
}
@screen md {
  .home-grid {
    grid-template-columns: 300px 1fr;
  }
}

.post-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
}

</style>
