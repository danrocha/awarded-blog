<template>
  <div class="text-faded a-uppercase-info">
    <g-link v-for="tag in post.tags" :key="tag.id" :to="tag.path">
      <span>#</span>{{ tag.title }}
    </g-link>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>
<style></style>
