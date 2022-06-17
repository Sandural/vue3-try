import vue from "@vitejs/plugin-vue";

/**
 * * vite-plugin-vue-setup-extend：扩展setup插件，支持在script标签中使用name属性
 * usage: <script setup name="MyComp"></script>
 * vite-plugin-html：一个针对 index.html，提供压缩和基于 ejs 模板功能的 vite 插件
 * unocss： 出自antfu的原子化css
 */
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import { configHtmlPlugin } from './html'

export function createVitePlugins(viteEnv: any, isBuild: any) {
  const plugins = [vue(), VueSetupExtend(), configHtmlPlugin(viteEnv, isBuild)];

  return plugins;
}
