<template>
  <!-- <div class="text-sm flex p-2 rounded border border-yellow-500"> -->
   <!--  <form :action="amazonUrl">
    <button type="submit"
      class="p-2 text-center border-yellow-500 border rounded shadow bg-yellow-400 text-sm font-semibold text-yellow-800 hover:shadow-lg hover:bg-yellow-300">Buy on Amazon</button> -->
    <!-- <a :href="amazonUrl" target="_blank" rel="noopener" class="m-0 p-0">
      Buy on Amazon
    </a> -->
  <!-- </div> -->
   <!--  </form> -->
  <a :href="amazonUrl" class="amazon-link">Buy on Amazon</a>

</template>

<script>
import axios from "axios";
export default {
  props: {
    isbn: {
      type: String,
      required: true
    },
    kindleAsin: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      amazonUrl: "",
      countryCode: "",
      urlBase: {
        us: "com",
        de: "de",
        es: "es",
        br: "com.br",
        fr: "fr",
        uk: "co.uk",
        it: "it"
      }
    };
  },
  created() {
    this.assembleAmazonUrl();
    const AmazonAff = require("../plugins/Affiliate");
    AmazonAff.attach();
  },
  methods: {
    async getCountry() {
      const ipUrl = "http://ip-api.com/json/?fields=status,message,countryCode";
      try {
        const { data } = await axios.get(ipUrl);
        //console.log(data);
        return data.countryCode;
      } catch (error) {
        console.error(error);
      }
    },
    async assembleAmazonUrl() {
      this.countryCode = await this.getCountry();
      this.countryCode = this.countryCode.toLowerCase();
      console.log(this.countryCode);
      if (this.urlBase.hasOwnProperty(this.countryCode)) {
        return (this.amazonUrl = `https://www.amazon.${this.urlBase[this.countryCode]}/dp/${
          this.isbn
        }`);
      }
      return (this.amazonUrl = `https://www.amazon.${this.urlBase.us}/dp/${this.isbn}`);
    }
  }
};
</script>

<style scoped>
a.amazon-link {
  text-decoration: none;
  background-image: none;
  background-size: auto auto;
  background-position: 0 0;
  transition: none;
  background-repeat: repeat;
  padding: 0;
  border: 0;
  @apply p-2 text-center border-yellow-500 border rounded shadow bg-yellow-400 text-sm font-semibold text-yellow-800;
}
a.amazon-link:hover {
   @apply shadow-lg bg-yellow-300;
}

</style>
