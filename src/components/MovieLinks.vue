<template>
  <ul>
    <li>
      <movie-links-shopping :asins="asins" :movie-title="movieTitle">
        <template slot-scope="{amazonUrl}">
          <a :href="amazonUrl" target="_blank" rel="noopener" class="link-external link-amazon">Amazon</a>
        </template>
      </movie-links-shopping>
    </li>
    <li>
      <a
        :href="`https://www.themoviedb.org/movie/${tmdbId}/`"
        target="_blank"
        rel="noopener"
        class="link-external"
        >TMDB</a
      >
    </li>
    <li>
      <a
        :href="`https://www.imdb.com/title/${imdbId}/`"
        target="_blank"
        rel="noopener"
        class="link-external"
        >IMDb<span v-if="imdbRating" class="pl-1 text-faded">{{ imdbRating }}</span></a
      >
    </li>
    <li v-if="rt">
      <a
        :href="`https://www.rottentomatoes.com/search/?search=${movieTitle}`"
        target="_blank"
        rel="noopener"
        class="link-external"
        >RT<span class="pl-1 text-faded">{{ rt }}</span></a
      >
    </li>
    <li v-if="metacritic">
      <a
        :href="`https://www.metacritic.com/search/movie/${movieTitle}/results`"
        target="_blank"
        rel="noopener"
        class="link-external"
        >Metacritic <span class="pl-1 text-faded">{{ metacritic }}</span></a
      >
    </li>
    <li>
      <a
        :href="`https://www.youtube.com/results?search_query=${movieTitle} trailer`"
        target="_blank"
        rel="noopener"
        class="link-external"
        >YouTube Trailer</a
      >
    </li>
  </ul>
</template>

<script>
import axios from "axios";
import MovieLinksShopping from "~/components/MovieLinksShopping"
export default {
  props: {
    imdbId: {
      type: String,
      required: true
    },
    movieTitle: {
      type: String,
      required: true
    },
    tmdbId: {
      type: Number,
      required: true
    },
    asins: {
      type: Array,
      default: () => []
    }
  },
  components: {
    MovieLinksShopping
  },
  data() {
    return {
      rating: null,
      imdbRating: null,
      metacritic: null,
      rt: null
    };
  },
  mounted() {
    this.getOMDBInfo();
  },
  methods: {
    async getOMDBInfo() {
      const url = `http://www.omdbapi.com/?apikey=${process.env.GRIDSOME_OMDB_API_KEY}&i=${
        this.imdbId
      }`;
      try {
        const { data } = await axios.get(url);
        if (!data.hasOwnProperty("Ratings")) return;
        this.rt = this.findValue("Rotten Tomatoes", data.Ratings);
        this.metacritic = this.findValue("Metacritic", data.Ratings);
        this.imdbRating = this.findValue("Internet Movie Database", data.Ratings);
      } catch (error) {
        console.log(error);
      }
    },
    findValue(name, ratings) {
      const idx = ratings.findIndex(rating => rating.Source === name);
      if (idx >= 0) {
        return ratings[idx].Value;
      }
      return null;
    }
  }
};
</script>

<style scoped>
ul {
 @apply flex text-xs flex-wrap;
}
li {
  @apply mr-1 mb-2;
}
a {
  background: none;
  @apply p-1 border border-gray-300 rounded;
}
a:hover {
  @apply bg-gray-100;
}
a.link-amazon {
  @apply font-semibold border-yellow-500;
}
a.link-amazon:hover {
  @apply bg-yellow-500;
}
</style>
