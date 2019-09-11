<template>
  <div :class="['y-col',classList]" :style="style">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "YCol",
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    },
    push: {
      type: Number,
      default: 0
    },
    pull: {
      type: Number,
      default: 0
    }
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.name !== "YRow") {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    },
    style() {
      const style = {};
      if (this.gutter) {
        style.paddingLeft = this.gutter / 2 + "px";
        style.paddingRight = style.paddingLeft;
      }
      return style;
    },
    classList() {
      const list = [];
      ["span", "offset", "push", "pull"].forEach(prop => {
        if (this[prop]) {
          list.push(
            prop === "span"
              ? `y-col-${this[prop]}`
              : `y-col-${prop}-${this[prop]}`
          );
        }
      });

      return list;
    }
  }
};
</script>
<style lang='scss' scoped>
.y-col {
  display: inline-block;
  box-sizing: border-box;
}

@for $i from 0 through 24 {
  .y-col-#{$i} {
    width: $i / 24 * 100%;
  }
  .y-col-offset-#{$i} {
    margin-left: $i / 24 * 100%;
  }
  .y-col-push-#{$i} {
    position: relative;
    left: $i / 24 * 100%;
  }
  .y-col-pull-#{$i} {
    position: relative;
    right: $i / 24 * 100%;
  }
}
</style>