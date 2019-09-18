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
        excerpt
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
  name: 'Home',
  metaInfo: {
    title: "Awarded News",
    titleTemplate: null,
    meta: [
      { name: "author", content: "Daniel da Rocha" },
      {
        name: "description",
        content: "Keep track of the most important book and movie awards and festivals."
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:description", content: "Keep track of the most important book and movie awards and festivals." },
      { name: "twitter:title", content: "Awarded" },
      { name: "twitter:site", content: "@awardedto" },
      {
        name: "twitter:image",
        content: `https://news.awarded.to/images/awarded-banner.jpg`
      },
      { name: "twitter:creator", content: "@danroc" }
    ]
  },
  components: {
    Author,
    IntroMenu,
    PostCard,
  },
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
