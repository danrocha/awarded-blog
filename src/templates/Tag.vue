<template>
  <Layout>
    <h1  class="leading-none mb-8 uppercase"># {{ $page.tag.title }}</h1>

    <div  class="lg:flex lg:justify-end lg:flex-wrap">
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
<style></style>
