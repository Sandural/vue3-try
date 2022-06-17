<template>
  <div class="cate-layout">
    <div class="cate-layout-aside-menu">
      <div class="cate-layout-collapse-btn" @click="handleToggleAside">
        <Icon color="green" size="24">
          <LayoutSidebarLeftExpand />
        </Icon>
      </div>
    </div>
    <!-- :class="{'animate-[collapse_2s]': isCollapse }" -->
    <div class="cate-layout-aside" :class="{'animate-[collapse_2s]': isCollapse }">
      <a class="cate-layout-logo" href="#">
        <img :src="Logo" alt="">
      </a>
    </div>
    <div class="cate-layout-container">
      <div class="cate-layout-breadcum">HOME</div>
      <div class="cate-layout-main"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@vicons/utils";
import { LayoutSidebarLeftExpand } from "@vicons/tabler";
import Logo from '@/assets/images/logo.png'

let isCollapse = ref(false);
let sideWidth = ref('184px');

const initSideWidth = () => {
  sideWidth.value = isCollapse.value ? "40px" : "184px";
}

const handleToggleAside =  ()  => {
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
  @apply grid h-screen w-full;
  grid-template-columns: v-bind(sideWidth) auto;

  .cate-layout-aside-menu {
    @apply absolute left-0 bottom-0 h-[102px];
    width: v-bind(sideWidth);
    background-image: linear-gradient(
      rgb(237 239 246 / 0%),
      rgb(237 239 246 / 15%) 16.66%,
      rgb(237 239 246)
    );

    .cate-layout-collapse-btn {
      @apply absolute flex right-[-12px] cursor-pointer;
    }
  }

  .cate-layout-aside {
    @apply h-full bg-cate-background;

    .cate-layout-logo {
      @apply h-[84px];
      img {
        @apply py-6 px-8;
      }
    }
  }

  .cate-layout-container {
    @apply flex flex-col bg-cate-background h-full;
    .cate-layout-breadcum {
      @include flexbox-row-center;
      @include breadcumTitle;
      @apply h-[84px];
    }

    .cate-layout-main {
      @apply h-[calc(100vh-100px)] bg-cate-white rounded-xl mr-6;
    }

  }
}
</style>
