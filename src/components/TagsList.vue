<template>
  <ul class="text-faded a-uppercase-info mb-2 flex flex-wrap sm:flex-col">
    <li v-if="currentTag">&larr;&nbsp;<g-link to="/" class="title-link">Home</g-link></li>
    <li v-for="{node} in $static.tags.edges" :key="node.id">
      <g-link v-if="node.id !== currentTag" :to="node.path" class="title-link">
        <span>#</span>{{ node.title }}
      </g-link>
    </li>
  </ul>
</template>
<static-query>
{
  tags: allTag{
    edges {
      node {
        id
        title
        path
      }
    }
  }
}

</static-query>
<script>
  export default {
    name: 'TagsList',
    props: {
      currentTag: {
        type: Number,
        default: null
      },
    },
  }
</script>

<style  scoped>
li {
  @apply mb-1 mr-2;
}
</style>
