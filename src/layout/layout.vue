<template>
  <div class="cate-layout">
    <div class="cate-layout-aside-menu transition-[width]">
      <div class="cate-layout-collapse-btn" @click="handleToggleAside">
        <Icon color="green" size="24">
          <component :is="isCollapse ? LayoutSidebarLeftExpand : LayoutSidebarLeftCollapse"></component>
        </Icon>
      </div>
    </div>
    <div class="cate-layout-aside transition-[width]">
      <a class="cate-layout-logo" href="#">
        <img :src="Logo" alt="">
      </a>
      <div class='cate-menu'>
        <Menu :menuList='menuList'></Menu>
      </div>
    </div>
    <div class="cate-layout-container">
      <div class="cate-layout-breadcrumb">HOME</div>
      <div class="cate-layout-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {Icon} from "@vicons/utils";
import {LayoutSidebarLeftExpand, LayoutSidebarLeftCollapse} from "@vicons/tabler";
import Logo from '@/assets/images/logo.png'
import Menu from './components/Menu.vue'
import MenuData from "@/mock/menu.js"

const menuList: [] = MenuData.body.routeMap;

let isCollapse = ref(false);
let sideWidth = ref('184px');
const initSideWidth = () => {
  sideWidth.value = isCollapse.value ? "40px" : "184px";
}

const handleToggleAside = () => {
  isCollapse.value = !isCollapse.value;
  initSideWidth()
}


</script>

<style scoped lang="scss">
@mixin flexbox-row-center {
  @apply flex flex-row items-center;
}

@mixin breadcumTitle {
  @apply text-[#000000e6] font-medium text-lg;
}

.cate-layout {
  @apply flex h-screen w-full;
  
  .cate-layout-aside-menu {
    @apply absolute left-0 bottom-0 h-[102px];
    width: v-bind(sideWidth);
    background-image: linear-gradient(
            rgb(237 239 246 / 0%),
            rgb(237 239 246 / 15%) 16.66%,
            rgb(237 239 246)
    );
    
    .cate-layout-collapse-btn {
      @apply absolute flex right-[-12px] cursor-pointer hover:drop-shadow-cate-sm;
    }
  }
  
  .cate-layout-aside {
    width: v-bind(sideWidth);
    @apply h-full bg-cate-background;
    
    .cate-layout-logo {
      @apply h-[84px];
      img {
        @apply py-6 px-8;
      }
    }
    
    .cate-menu {
      @apply h-[calc(100vh-84px)]  pb-[140px] overflow-y-auto pl-4 pr-3;
    }
  }
  
  .cate-layout-container {
    @apply flex flex-col flex-1 bg-cate-background h-full;
    .cate-layout-breadcrumb {
      @include flexbox-row-center;
      @include breadcumTitle;
      @apply h-[60px];
    }
    
    .cate-layout-main {
      @apply h-[calc(100vh-80px)] bg-cate-white rounded-xl mr-6 p-[16px];
    }
    
  }
}
</style>
