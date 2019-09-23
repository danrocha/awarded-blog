<template>
  <div class="min-h-full flex flex-col items-stretch antialiased sm:px-4">
    <nav
    class="mb-4 flex flex-col flex-shrink-0 sm:justify-between sm:items-center sm:flex-row sm:flex-row-reverse"

  >
    <ul class="text-faded a-uppercase-info flex">
      <!-- <li class="mr-4">Articles</li> -->
      <li class="mr-4 mb-2">
        <a href="https://awarded.to/movies" class="title-link font-bold">Movies</a>
      </li>
      <li class="mr-4 mb-2">
        <a href="https://awarded.to/books" class="title-link font-bold">Books</a>
      </li>
      <li class="mr-4 mb-2">
        <a href="//awarded.to/about" class="title-link">About</a>
      </li>
      <li>
        <a
          href="http://eepurl.com/dnFggL"
          target="_blank"
          rel="noopener"
          class="link-external title-link"
          >Subscribe</a
        >
      </li>
    </ul>
    <g-link to="/">
      <h1
        class="font-bold text-4xl flex flex-col md:flex-row leading-tight mb-2"
      >
        <span class="mr-2 -mb-2 md:mb-0">AWARDED</span>
        <span class="text-faded uppercase">News</span>
      </h1>
    </g-link>
  </nav>
    <main class="flex-1 flex-shrink-0 mb-8">
      <slot />
    </main>
    <base-footer />
  </div>
</template>
<script>
import BaseFooter from "@/components/BaseFooter.vue";

export default {
  name: "Home",

  components: {
    BaseFooter
  }
};
</script>

<style>

</style>
