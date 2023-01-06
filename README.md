# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## 安装依赖(如果你使用cnpm,打包后的文件运行会报错: could not find module xxx)
```
!!! 请设置这个,不然npm安装electron可能失败
npm config set ELECTRON_CUSTOM_DIR "{{ version }}"
npm i
```

## 打包(已经配置好,打包时,把vue工程打包好的文件一同打包,并且生成的应用可以正常使用)

```
npm run build
npm run app:dist
```
