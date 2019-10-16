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
          <post-social/>
        </header>
        <main class="content">
          <!-- <div v-html="$page.post.content" /> -->
          <VueRemarkContent/>
        </main>
        <aside>
          <PostTags :post="$page.post" />
          <post-social />
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
import PostSocial from "~/components/PostSocial";
import Author from "~/components/Author.vue";
export default {
  name: 'Post',
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        { key: "description", name: "description", content: this.$page.post.excerpt },
        { key: "twitter:description", name: "twitter:description", content: this.$page.post.excerpt },
        { key: "twitter:title",name: "twitter:title", content: this.$page.post.title },
        { key: "twitter:image",name: "twitter:image", content: this.getCoverImage() },
        { key: "og:type",name: "og:type", content: "article" },
        { key: "og:title",name: "og:title", content: this.$page.post.title },
        { key: "og:description", name: "og:description", content: this.$page.post.excerpt },
        {
          key: "article:published_time",
          name: "article:published_time",
          content: this.$page.post.date
        },
        { key: "og:image", name: "og:image",content: this.getCoverImage() },
      ],
      script: [{ src: "https://platform.twitter.com/widgets.js", async: true }]
    };
  },
  components: {
    Author,
    PostMeta,
    PostSocial,
    PostTags,

  },
  methods: {
    getCoverImage() {
      let coverImage = "";
      const cover = this.$page.post.cover_image;
      if (cover) {
        coverImage = `${this.getBaseUrl()}${this.$page.post.cover_image.src}`;
      }
      return coverImage;
    },
    getBaseUrl() {
      return 'https://news.awarded.to'
      //return process.env.GRIDSOME_BASE_URL;
    }
  }
};
</script>

<page-query>
query Post ($id: ID!) {
  post(id: $id) {
    title
    path
    excerpt
    date
    tags {
      id
      title
      path
    }
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
