<template>
  <div class="app-wrapper" :class="classObj">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>
    <div class="logo"><img :src="logo" alt=""></div>
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <div class="top_main">
        <navbar class="nav"></navbar>
        <tags-view class="tag"></tags-view>
      </div>
      <app-main class="appmain"></app-main>
    </div>
  </div>
</template>

<script>
  /* eslint-disable object-curly-spacing */

  import {Navbar, Sidebar, AppMain, TagsView} from './components'
  import ResizeMixin from './mixin/ResizeHandler'
  import logo from '@/assets/img/logo.png'

  export default {
    name: 'layout',
    data() {
      return {
        logo
      }
    },
    components: {
      Navbar,
      Sidebar,
      AppMain,
      TagsView
    },
    mixins: [ResizeMixin],
    computed: {
      sidebar() {
        return this.$store.state.app.sidebar
      },
      device() {
        return this.$store.state.app.device
      },
      classObj() {
        return {
          hideSidebar: !this.sidebar.opened,
          withoutAnimation: this.sidebar.withoutAnimation,
          mobile: this.device === 'mobile'
        }
      }
    },
    methods: {
      handleClickOutside() {
        this.$store.dispatch('CloseSideBar', {withoutAnimation: false})
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";

  .app-wrapper {
    /*.nav, .tag, .appmain {*/
    /*width: 100%;*/
    /*position: fixed;*/
    /*}*/
    /*.tag {*/
    /*top: 68px;*/
    /*}*/
    /*.main-container1{*/
    /*position: fixed;*/
    /*width: 100%;*/
    /*top: 0px;*/
    /*left: 180px;*/
    /*z-index: 99999;*/
    /*}*/
    .appmain{
      padding-top: 113px;
    }
    .top_main {
      position: fixed;
      width: calc(100% - 180px);
      z-index: 99;
      .nav, .tag {
      width: calc(100% - 180px);
      position: fixed;
      }
      .nav{
        z-index: 9;
      }
      .tag{
        top: 68px;
      }

    }
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    .logo {
      position: fixed;
      top: 0px;
      z-index: 100;
      width: 180px;
      height: 113px;
      background: rgba(1, 87, 155, 1);
      img {
        width: 70px;
        height: 70px;
        position: absolute;
        left: 50%;
        margin-left: -35px;
        top: 50%;
        margin-top: -35px;

      }
    }
    .en1 {
      /*width: 100%;*/
      /*position: fixed;*/
      /*z-index: 99999;*/
    }
    .fix {
      width: 100%;
      position: fixed;
    }
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
</style>
