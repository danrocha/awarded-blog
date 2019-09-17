<template>
  <div class="overflow-hidden">
    <img class="shadow flex-none" :src="imageUrl" :width="w" :height="h" />
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    w: {
      type: String,
      default: "100"
    },
    h: {
      type: String,
      default: "150"
    },

  },

};
</script>
