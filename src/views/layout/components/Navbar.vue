<template>
  <el-menu class="navbar" mode="horizontal">
    <!--<hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>-->
    <!--<breadcrumb></breadcrumb>-->
    <img :src="title" class="title" alt="">
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <span>说明书</span>
        <img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">
        <i class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu class="user-dropdown" slot="dropdown">
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>
            Home
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <span @click="logout" style="display:block;">LogOut</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-menu>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Breadcrumb from '@/components/Breadcrumb'
  import Hamburger from '@/components/Hamburger'
  import title from '@/assets/img/title.png'

  export default {
    data() {
      return {
        title
      }
    },
    components: {
      Breadcrumb,
      Hamburger
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'avatar'
      ])
    },
    methods: {
      toggleSideBar() {
        this.$store.dispatch('ToggleSideBar')
      },
      logout() {
        this.$store.dispatch('LogOut').then(() => {
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .navbar {
    height: 68px;
    line-height: 50px;
    border-radius: 0px !important;
    background: rgba(1, 87, 155, 1);
    /*box-shadow: 30px 2px 15px #666666;*/
    filter: drop-shadow(0 0 4px #000);
    .title {
      width: 345px;
      margin-top: 15px;
      position: absolute;
      z-index: 19;
    }
    .hamburger-container {
      line-height: 58px;
      height: 50px;
      float: left;
      padding: 0 10px;
    }
    .screenfull {
      position: absolute;
      right: 90px;
      top: 16px;
      color: red;
    }
    .avatar-container {
      height: 50px;
      display: inline-block;
      position: absolute;
      right: 24px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        span {
          color: #fff;
          /* margin-right: 133px; */
          position: absolute;
          right: 80px;
          width: 120px;
          top: 4px;
        }
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 40px;
          margin-top: 8px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
  .navbar:after{
    content: "";
    position: absolute;
    /* left: 0px; */
    /* bottom: 0px; */
    width: 57px;
    left: -32px;
    top: 42px;
    z-index: 18;
    height: 57px;
    background-color: #01579b;
    -webkit-transform: rotate(45deg);
    transform: rotate(40deg);
  }
</style>

