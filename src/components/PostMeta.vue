<template>
  <div class="flex items-center text-faded a-uppercase-info">
    <span>
      {{ post.date | formatDate('MMMM do, yyyy') }}
    </span>
    <template v-if="post.timeToRead">
      <span><star-separator />{{ post.timeToRead }} min read</span>
    </template>
  </div>
</template>

<script>
import StarSeparator from "~/components/StarSeparator";
export default {
  components: {
    StarSeparator
  },
  props: ["post"]
};
</script>

<style lang="scss" scoped>
</style>
