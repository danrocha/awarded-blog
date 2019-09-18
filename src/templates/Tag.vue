<template>
  <Layout>
    <h2  class="leading-none mb-8 uppercase"><span class="text-faded">TAG&nbsp;</span># {{ $page.tag.title }}</h2>

    <div  class="post-list">
      <aside class="text-sm mb-8 sm:w-1/2 md:w-2/3 lg:w-1/2">

        <intro-menu :current-tag="$page.tag.id"/>

      </aside>
      <PostCard
        v-for="edge in $page.tag.belongsTo.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    id
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "D. MMMM YYYY")

            description
            cover_image (width: 860, blur: 10)
            content
          }
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
    PostCard
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
