<template>
  <div id="app">
     日历组件:<y-date v-model="nowData"/>
  <y-row>
  <y-button>默认按钮</y-button>
  <y-button type="primary">主要按钮</y-button>
  <y-button type="success">成功按钮</y-button>
  <y-button type="info">信息按钮</y-button>
  <y-button type="warning">警告按钮</y-button>
  <y-button type="danger">危险按钮</y-button>
</y-row>

<y-row>
  <y-button plain>朴素按钮</y-button>
  <y-button type="primary" plain>主要按钮</y-button>
  <y-button type="success" plain>成功按钮</y-button>
  <y-button type="info" plain>信息按钮</y-button>
  <y-button type="warning" plain>警告按钮</y-button>
  <y-button type="danger" plain>危险按钮</y-button>
</y-row>

<y-row>
  <y-button round>圆角按钮</y-button>
  <y-button type="primary" round>主要按钮</y-button>
  <y-button type="success" round>成功按钮</y-button>
  <y-button type="info" round>信息按钮</y-button>
  <y-button type="warning" round>警告按钮</y-button>
  <y-button type="danger" round>危险按钮</y-button>
</y-row>


<y-container>
  <y-header>Header</y-header>
  <y-main>Main</y-main>
</y-container>

<y-container>
  <y-header>Header</y-header>
  <y-main>Main</y-main>
  <y-footer>Footer</y-footer>
</y-container>

<y-container>
  <y-aside width="200px">Aside</y-aside>
  <y-main>Main</y-main>
</y-container>

<y-container>
  <y-header>Header</y-header>
  <y-container>
    <y-aside width="200px">Aside</y-aside>
    <y-main>Main</y-main>
  </y-container>
</y-container>

<y-container>
  <y-header>Header</y-header>
  <y-container>
    <y-aside width="200px">Aside</y-aside>
    <y-container>
      <y-main>Main</y-main>
      <y-footer>Footer</y-footer>
    </y-container>
  </y-container>
</y-container>

<y-container>
  <y-aside width="200px">Aside</y-aside>
  <y-container>
    <y-header>Header</y-header>
    <y-main>Main</y-main>
  </y-container>
</y-container>

<y-container>
  <y-aside width="200px">Aside</y-aside>
  <y-container>
    <y-header>Header</y-header>
    <y-main>Main</y-main>
    <y-footer>Footer</y-footer>
  </y-container>
</y-container>

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
export default {
  name: "app",
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

// 
 .y-header, .y-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .y-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .y-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .y-container {
    margin-bottom: 40px;
  }
  
  .y-container:nth-child(5) .y-aside,
  .y-container:nth-child(6) .y-aside {
    line-height: 260px;
  }
  
  .y-container:nth-child(7) .y-aside {
    line-height: 320px;
  }
 
</style>
