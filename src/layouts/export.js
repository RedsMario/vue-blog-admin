/*
 * @Date: 2023-02-20 11:20:47
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-02-25 12:36:29
 * @Description: Do not edit
 */
/**
 * @author chuzhixin 1204505056@qq.com （不想保留author可删除）
 * @description 公共布局及样式自动引入
 */

import Vue from 'vue'

const requireZxLayouts = require.context('zx-layouts', true, /\.vue$/)
requireZxLayouts.keys().forEach((fileName) => {
  const componentConfig = requireZxLayouts(fileName)
  const componentName = componentConfig.default.name
  Vue.component(componentName, componentConfig.default || componentConfig)
})
const requireComponents = require.context('./components', true, /\.vue$/)
requireComponents.keys().forEach((fileName) => {
  const componentConfig = requireComponents(fileName)
  const componentName = componentConfig.default.name
  Vue.component(componentName, componentConfig.default || componentConfig)
})
const requireThemes = require.context('@/styles/themes', true, /\.scss$/)
requireThemes.keys().forEach((fileName) => {
  require(`@/styles/themes/${fileName.slice(2)}`)
})
