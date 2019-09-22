<template>
  <div :class="['y-container', {'is-vertical': isVertical}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'YContainer',
  props: {
    direction: {
      type: String,
      validator: val => ['horizontal', 'vertical'].includes(val),
    },
  },
  computed: {
    isVertical() {
      if (this.direction === 'vertical') {
        return true;
      } if (this.direction === 'horizontal') {
        return false;
      }

      return this.$slots && this.$slots.default
        ? this.$slots.default.some((vNode) => {
          const tag = vNode.componentOptions && vNode.componentOptions.tag;
          return tag === 'y-header' || tag === 'y-footer';
        })
        : false;
    },
  },
};
</script>
<style scoped lang='scss'>
  .y-container{
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;
  }
  .is-vertical{
    flex-direction: column;
  }
</style>