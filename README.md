# 项目说明

## 更新`packahe.json`版本
- `npm version patch`

## 设计稿尺寸
- `750px`

## 类型定义
- 全局类型定义在`@/types/global`
- 使用`namespace`,例:api文件类型定义`@/types/api`

## 自动引入 api
-  `vue`,`vue-router`,`pinia` 无需手动引入

## 项目结构

```sh
📁v3-ts-vite
├─ 📄pnpm-lock.yaml
├─ 📄.env.production
├─ 📄tsconfig.node.json
├─ 📄index.html
├─ 📄postcss.config.cjs
├─ 📄.eslintrc.cjs
├─ 📄.editorconfig
├─ 📄Readme.md
├─ 📄.gitignore
├─ 📄package-lock.json
├─ 📄package.json
├─ 📄.env
├─ 📄tsconfig.json
├─ 📄.eslintignore
├─ 📄vite.config.ts
├─ 📄.prettierrc.cjs
├─ 📄.env.development
├─ 📄auto-imports.d.ts // vue,router,pinia自动引入
├─ 📁public
│  └─ 📄vite.svg
├─ 📁src
│  ├─ 📄App.vue
│  ├─ 📄main.ts
│  ├─ 📄vite-env.d.ts
│  ├─ 📁types
│  ├─ 📁layout
│  ├─ 📁utils
│  ├─ 📁styles
│  ├─ 📁components
│  ├─ 📁hooks
│  ├─ 📁api
│  ├─ 📁service
│  ├─ 📁assets
│  ├─ 📁store
│  ├─ 📁router
│  └─ 📁view

