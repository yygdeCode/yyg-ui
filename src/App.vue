<template>
  <div id="app">
     日历组件:<y-date v-model="nowData"/>
    <h2>基础布局 实现col组件 :span功能</h2>
    <y-row>
      <y-col :span="24">
        <div class="grid-content bg-purple-dark"></div>
      </y-col>
    </y-row>
    <y-row>
      <y-col :span="12">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :span="12">
        <div class="grid-content bg-purple-light"></div>
      </y-col>
    </y-row>
    <y-row>
      <y-col :span="8">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :span="8">
        <div class="grid-content bg-purple-light"></div>
      </y-col>
      <y-col :span="8">
        <div class="grid-content bg-purple"></div>
      </y-col>
    </y-row>
    <y-row>
      <y-col :span="6">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :span="6">
        <div class="grid-content bg-purple-light"></div>
      </y-col>
      <y-col :span="6">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :span="6">
        <div class="grid-content bg-purple-light"></div>
      </y-col>
    </y-row>
    <y-row>
      <y-col :span="4">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :span="4">
        <div class="grid-content bg-purple-light"></div>
      </y-col>
      <y-col :span="4">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :span="4">
        <div class="grid-content bg-purple-light"></div>
      </y-col>
      <y-col :span="4">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :span="4">
        <div class="grid-content bg-purple-light"></div>
      </y-col>
    </y-row>
    <h2>分栏间隔 实现row组件 :gutter</h2>
    <y-row :gutter="20">
      <y-col :span="6">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :span="6">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :span="6">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :span="6">
        <div class="grid-content bg-purple"></div>
      </y-col>
    </y-row>
    <h2>混合布局</h2>
    <y-row :gutter="20">
      <y-col :span="16">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :span="8">
        <div class="grid-content bg-purple"></div>
      </y-col>
    </y-row>
    <y-row :gutter="20">
      <y-col :span="8">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :span="8">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :span="4">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :span="4">
        <div class="grid-content bg-purple"></div>
      </y-col>
    </y-row>
    <y-row :gutter="20">
      <y-col :span="4">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :span="16">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :span="4">
        <div class="grid-content bg-purple"></div>
      </y-col>
    </y-row>
    <h2>分栏偏移 实现col组件的 :offset :push :pull</h2>
    <y-row :gutter="20">
      <y-col :span="6">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :span="6" :offset="6">
        <div class="grid-content bg-purple"></div>
      </y-col>
    </y-row>
    <y-row :gutter="20">
      <y-col :span="6" :offset="6">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :span="6" :pull="12">
        <div class="grid-content bg-purple"></div>
      </y-col>
    </y-row>
    <y-row :gutter="20">
      <y-col :span="12" :push="6">
        <div class="grid-content bg-purple"></div>
      </y-col>
    </y-row>
    <h2>对齐方式通过 flex 布局来对分栏进行灵活的对齐</h2>
    <y-row type="flex" class="row-bg">
      <y-col :span="6">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :span="6">
        <div class="grid-content bg-purple-light"></div>
      </y-col>
      <y-col :span="6">
        <div class="grid-content bg-purple"></div>
      </y-col>
    </y-row>
    <y-row type="flex" class="row-bg" justify="center">
      <y-col :span="6">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :span="6">
        <div class="grid-content bg-purple-light"></div>
      </y-col>
      <y-col :span="6">
        <div class="grid-content bg-purple"></div>
      </y-col>
    </y-row>
    <y-row type="flex" class="row-bg" justify="end">
      <y-col :span="6">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :span="6">
        <div class="grid-content bg-purple-light"></div>
      </y-col>
      <y-col :span="6">
        <div class="grid-content bg-purple"></div>
      </y-col>
    </y-row>
    <y-row type="flex" class="row-bg" justify="space-between">
      <y-col :span="6">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :span="6">
        <div class="grid-content bg-purple-light"></div>
      </y-col>
      <y-col :span="6">
        <div class="grid-content bg-purple"></div>
      </y-col>
    </y-row>
    <y-row type="flex" class="row-bg" justify="space-around">
      <y-col :span="6">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :span="6">
        <div class="grid-content bg-purple-light"></div>
      </y-col>
      <y-col :span="6">
        <div class="grid-content bg-purple"></div>
      </y-col>
    </y-row>

   
  </div>
</template>

<script>
// import elRow from "@element/Row.vue";
// import yCol from "@element/Col.vue";
export default {
  name: "app",
  components: {
    // elRow,
    // yCol
  },
  data(){
        return {
            nowData : new Date()
        }
    }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  width: 870px;
  margin: 10px auto;
}
.y-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.y-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
