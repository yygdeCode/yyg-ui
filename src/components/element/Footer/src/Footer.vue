<template>
  <div class="y-footer" :style="{height}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'YFooter',
  props: {
    height: {
      type: String,
      default: '60px',
    },
  },
};
</script>
<style scoped lang='scss'>
  .y-footer{
    box-sizing: border-box;
    flex-shrink: 0;
    padding: 0 20px;
  }
</style>