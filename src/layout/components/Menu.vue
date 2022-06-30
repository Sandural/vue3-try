<template>
  <div class='cate-menu-sidebar'>
    <div v-for='(menu, index) in menuList' :key='menu.key'>
      <div v-if='menu.children?.length'>
        <div class='cate-menuItem' @click='activeStyle(index, menu.children.length)'>
          {{ menu.label }}
          <Icon color="#868687" size="16">
            <component
                :is="curMenuState.curIdx === index && curMenuState.isShow ?  MdArrowDropup: MdArrowDropdown"></component>
          </Icon>
        </div>
        <Menu :menuList='menu.children'></Menu>
      </div>
      <div v-else class='cate-subMenuItem'
           @click='activeStyle(index, menu.children.length)'
           :class='[["core"].includes(menu.key) ? "pl-2" :"pl-4", index === curMenuState.curIdx && curMenuState.isActive && !curMenuState.hasChildren ? "bg-cate-primaryBg !text-cate-primary font-bold" : ""]'>
        {{ menu.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {defineProps, reactive, ref} from "vue";
import {Icon} from "@vicons/utils";
import {MdArrowDropdown, MdArrowDropup} from "@vicons/ionicons4"

const props = defineProps<{
  menuList: any
}>()


const curMenuState = reactive({
  isActive: false,
  curIdx: 0,
  hasChildren: false,
  isShow: false
})

const activeStyle = (index: number, children: number) => {
  console.log('children', children);
  // let oldIdx = curMenuState.curIdx;
  curMenuState.curIdx = index;
  if (children) {
    // curMenuState.curIdx = oldIdx;
    // 有sub item，则只是展开
    curMenuState.isShow = !curMenuState.isShow;
    curMenuState.hasChildren = true;
  } else {
    curMenuState.isActive = true;
    curMenuState.hasChildren = false;
  }
}
</script>

<style lang='scss' scoped>
.cate-menu-sidebar {
  @apply pl-2;
  .cate-menuItem {
    @apply p-2 pr-0 hover:bg-cate-warningBg rounded-xl cursor-pointer flex justify-between items-center;
    color: rgba(0, 0, 0, 0.5);
    
    .cate-menu-text {
    
    }
  }
  
  .cate-subMenuItem {
    @apply py-2 hover:bg-cate-warningBg rounded-xl cursor-pointer;
    color: rgba(0, 0, 0, 0.5);
    
    .cate-subMenuItem-text {
    
    }
  }
}
</style>