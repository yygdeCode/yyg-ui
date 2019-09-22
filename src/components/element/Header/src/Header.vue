<template>
  <div class="y-header" :style="{height}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'YHeader',
  props: {
    height: {
      type: String,
      default: '60px',
    },
  },
};
</script>
<style scoped lang='scss'>
  .y-header{
    box-sizing: border-box;
    flex-shrink: 0;
    padding: 0 20px;
  }
</style>
