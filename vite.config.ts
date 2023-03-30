import legacy from "@vitejs/plugin-legacy";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import DefineOptions from "unplugin-vue-define-options/vite";
import { viteVConsole } from "vite-plugin-vconsole";
import { UserConfigExport, ConfigEnv } from "vite";
import path, { resolve } from "path";
import removeConsole from "vite-plugin-remove-console";

/** 当前执行node命令时文件夹的地址（工作目录） */
const root: string = process.cwd();
/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  return {
    base: command !== "serve" ? "./" : "/",
    root,
    // 服务端渲染
    server: {
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
      legacy({
        targets: ["defaults", "not IE 11"]
      }),
      viteVConsole({
        entry: path.resolve("src/main.ts"), // 或者可以使用这个配置: [path.resolve('src/main.ts')]
        // localEnabled: command === "serve",
        localEnabled: command === "serve",
        enabled: process.env.NODE_ENV === "production",
        config: {
          maxLogNumber: 1000,
          theme: "dark"
        }
      }),
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
        // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
        eslintrc: {
          enabled: false, // Default `false`
          filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },

        // Filepath to generate corresponding .d.ts file.
        // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
        // Set `false` to disable.
        dts: "./auto-imports.d.ts"
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
          additionalData: `@import "${path.resolve(__dirname, "src/styles/mixins.scss")}";`
        }
      }
    }
  };
};
