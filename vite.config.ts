import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { createVitePlugins } from "./build/plugin";
import { wrapperEnv  } from './build/utils'

// 拼接路径
const resolve = (dir: string) => require("path").join(__dirname, dir);

// 1. defineConfig: 不用 jsdoc 注解也可以获取类型提示
// 2. 找不到模块“path”或其相应的类型声明 或者 找不到名称“__dirname 安装 @types/node

export default defineConfig(({ command, mode }) => {
  console.log('catelina', process.cwd());
  const env = loadEnv(mode, process.cwd())
  const viteEnv = wrapperEnv(env);
  const isBuild = command === 'build'
  const { VITE_PUBLIC_PATH } = viteEnv
  return {
    plugins: createVitePlugins(viteEnv, isBuild),
    base: VITE_PUBLIC_PATH || '/',
    resolve: {
      // 设置别名
      alias: {
        "@": resolve("src"),
      },
    },
    css: {
      preprocessorOptions: {
        //define global scss variable
        scss: {
          additionalData: `@import '@/styles/variables.scss';`,
        },
      },
    },
  };
});
