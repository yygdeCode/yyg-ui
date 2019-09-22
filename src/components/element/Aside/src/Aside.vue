<template>
  <div class="y-aside" :style="{width}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'YAside',
  props: {
    width: {
      type: String,
      default: '300px',
    },
  },
};
</script>
<style scoped lang='scss'>
  .y-aside{
        flex-shrink: 0;
  }
</style>
