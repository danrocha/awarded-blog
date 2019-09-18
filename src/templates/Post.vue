<template>
  <Layout>
    <article class="pt-16">

        <figure v-if="$page.post.cover_image" class="hidden xl:block">
          <g-image
            alt="Cover image"
            v-if="$page.post.cover_image"
            :src="$page.post.cover_image"
            class="rounded-lg border border-gray-200"
          />
        </figure>
      <section class="w-auto ml-auto mr-auto sm:mr-32 max-w-lg">
        <header class="mb-8">
          <h1 class="leading-tight mb-4 ">
            {{ $page.post.title }}
          </h1>
          <PostMeta :post="$page.post" />
        </header>
        <main class="content">
          <!-- <div v-html="$page.post.content" /> -->
          <VueRemarkContent/>
        </main>
        <aside>
          <PostTags :post="$page.post" />
        </aside>
        <div>
          <!-- Add comment widgets here -->
        </div>
        <!-- <Author /> -->
      </section>

    </article>
  </Layout>
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";
import Author from "~/components/Author.vue";
export default {
  components: {
    Author,
    PostMeta,
    PostTags
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: "description",
          content: this.$page.post.description
        }
      ]
    };
  }
};
</script>

<page-query>
query Post ($id: ID!) {
  post(id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

<style scoped>
@screen xl {
  article {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 2rem;
  }

}
</style>
