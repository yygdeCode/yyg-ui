<template>
  <div
    :class="[
        'y-row',
        {'y-row--flex':$attrs.type==='flex'},
        justify !== 'start' && `is-justify-${justify}`,
        align !== 'top' && `is-align=${align}`
        ]"
    :style="style"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YRow",
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    justify: {
      type: String,
      default: "start",
      validator: val =>
        ["start", "end", "center", "space-between", "space-around"].includes(
          val
        )
    },
    align: {
      type: String,
      default: "top",
      validator: val => ["top", "middle", "bottom"].includes(val)
    }
  },
  computed: {
    style() {
      const style = {};
      if (this.gutter) {
        style.marginLeft = "-10px";
        style.marginRight = style.marginLeft;
      }
      return style;
    }
  }
};
</script>
<style lang='scss' scoped>
.y-row {
  &--flex {
    display: flex;
  }
}
.is-justify-end {
  justify-content: flex-end;
}
.is-justify-center {
  justify-content: center;
}
.is-justify-space-between {
  justify-content: space-between;
}
.is-justify-space-around {
  justify-content: space-around;
}
.is-align-middle{
    align-items: center;
}
.is-align-bottom{
    align-items: flex-end;
}

</style>