<template>
  <article class="flex border-t md:border-l border-gray-400 pt-4 md:pl-4  md:-ml-12 pb-12 -mb-8 mt-8">
    <figure class="mr-4 shadow flex-none">
      <book-cover :image-url="book.imageUrl" :isbn="book.isbn10 || book.isbn13" />
    </figure>
    <section>
      <h3 class="my-0">{{book.title}}</h3>
      <p class="mb-0 text-base">by
        <span class="font-semibold" v-for="(author, index) in book.authors" :key="author.id"
          >{{author.name}}<span v-if="index < book.authors.length -1">,&nbsp;</span></span>
      </p>
      <ClientOnly><book-links-shopping :isbn="book.isbn10 || book.isbn13"/></ClientOnly>
    </section>
  </article>
</template>

<script>
import BookCover from '~/components/BookCover'
import BookLinksShopping from '~/components/BookLinksShopping'
  export default {
    name: 'BookRecommendation',
    components: {
      BookLinksShopping,
      BookCover,
    },
    props: {
      book: {
        type: Object,
        required: true
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
