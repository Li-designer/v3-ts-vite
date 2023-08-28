import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import DefineOptions from "unplugin-vue-define-options/vite";
// import { viteVConsole } from "vite-plugin-vconsole";
import { visualizer } from "rollup-plugin-visualizer";
import { UserConfigExport, ConfigEnv, loadEnv } from "vite";
import path, { resolve } from "path";
import removeConsole from "vite-plugin-remove-console";
import * as process from "process";
import { VueHooksPlusResolver } from "@vue-hooks-plus/resolvers";
/** 当前执行node命令时文件夹的地址（工作目录） */
const root: string = process.cwd();
/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};
// console.log(process.env, process.env.VITE_PORT, "ENV");
// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const env = loadEnv(mode, root, "");
  const { VITE_BASE_URL } = env;
  return {
    base: command !== "serve" ? "./" : "/",
    root,
    // 服务端渲染
    server: {
      hmr: {
        overlay: false
      },
      // 是否开启 https
      https: false,
      // 端口号
      port: 9527,
      host: "0.0.0.0",
      open: true,
      // 本地跨域代理 https://cn.vitejs.dev/config/server-options.html#server-proxy
      proxy: {
        // "/expert-adventure": {
        //   target: "http://localhost:3000",
        //   changeOrigin: true,
        //   rewrite: path => path.replace(/^\/expert-adventure/, "/expert-adventure")
        // },
      }
    },
    plugins: [
      vue(),
      DefineOptions(),
      removeConsole(),
      visualizer({
        emitFile: false,
        filename: "analyse.html", //分析图生成的文件名
        open: true //如果存在本地服务端口，将在打包后自动展示
      }),
      // viteVConsole
      // viteVConsole({
      //   entry: path.resolve("src/main.ts"), // 或者可以使用这个配置: [path.resolve('src/main.ts')]
      //   localEnabled: mode !== "prod",
      //   enabled: mode !== "prod",
      //   config: {
      //     maxLogNumber: 1000,
      //     theme: "dark"
      //   }
      // }),
      AutoImport({
        // targets to transform
        include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],

        // global imports to register
        imports: [
          // 插件预设支持导入的api
          "vue",
          "vue-router",
          "pinia"
          // 自定义导入的api
        ],

        // Generate corresponding .eslintrc-auto-import.json file.
        // eslint-disable-next-line max-len
        // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
        eslintrc: {
          enabled: false, // Default `false`
          // Default `./.eslintrc-auto-import.json`
          filepath: "./.eslintrc-auto-import.json",
          // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
          globalsPropValue: true
        },

        // Filepath to generate corresponding .d.ts file.
        // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
        // Set `false` to disable.
        dts: "./auto-imports.d.ts",
        resolvers: [VueHooksPlusResolver()]
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src") // src 路径
      }
    },
    build: {
      sourcemap: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 4000,
      // 打包文件名
      outDir: "dist",
      minify: "terser",
      terserOptions: {
        compress: false,
        mangle: false
      },
      rollupOptions: {
        input: {
          index: pathResolve("index.html")
        },
        // 静态资源分类打包
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]"
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/styles/mixins.scss";`
        }
      }
    }
  };
};
