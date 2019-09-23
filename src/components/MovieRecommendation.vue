<template>
  <article class="flex  md:-ml-12 pb-16 -mb-8 mt-8 items-center">
    <figure class="mr-4 shadow flex-none">
      <movie-poster :tmdb-id="movie.tmdbId"/>
    </figure>
    <section>
      <h3 class="my-0"><a :href="`https://awarded.to/movies/movie/${movie.id}/${cleanTitle}`" target="_blank">{{movie.title}}</a></h3>
      <p class="mb-0 text-base">directed by
        <span class="font-semibold" v-for="(director, index) in movie.directors" :key="director.id"
          >{{director.name}}<span v-if="index < movie.directors.length -1">,&nbsp;</span></span>
      </p>
      <ClientOnly>
        <section>
          <movie-links :imdb-id="movie.imdbId" :tmdb-id="movie.tmdbId" :movie-title="movie.title" :asins="movie.asins" class="mb-2"/>
        </section>
      </ClientOnly>
    </section>
  </article>
</template>

<script>
import MoviePoster from '~/components/MoviePoster'
import MovieLinksShopping from '~/components/MovieLinksShopping'
import MovieLinks from '~/components/MovieLinks'
  export default {
    name: 'MovieRecommendation',
    components: {
      MovieLinks,
      MovieLinksShopping,
      MoviePoster,
    },
    props: {
      movie: {
        type: Object,
        required: true
      }
    },
    computed: {
      cleanTitle() {
      //remove everything after a colon
      const title = this.movie.title;
      if (title.indexOf(":") > 1) {
        title = title.slice(0, title.indexOf(":"));
      }
      //remove spaces and punctuation, making everything lowercase and split by dashes
      return title
        .toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");
    }
    }
  }
</script>

<style lang="scss" scoped>

</style>
