<template>
  <button
    :class="[
      'y-button',
      type ? `y-button--${type}` : '',
      {
        'is-plain': plain,
        'is-round':round,
        'is-disabled' : disabled
      }
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "YButton",
  props: {
    type: {
      type: String,
      validator: val =>
        ["primary", "success", "warning", "danger", "info", "text"].includes(
          val
        )
    },
    plain: Boolean,
    round: Boolean,
    disabled: Boolean
  }
};
</script>
<style scoped lang='scss'>
.y-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0 5px;

  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }
}

.y-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &.is-plain {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
  }
}

.y-button--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &.is-plain {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;
}
}
.y-button--info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
    &.is-plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
}
}
.y-button--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &.is-plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
}
}
.y-button--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &.is-plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
}
}
</style>