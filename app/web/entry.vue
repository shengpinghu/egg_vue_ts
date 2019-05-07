<template>
  <Layout>
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
  </Layout>
</template>
<script>
import './framework/vue/hooks/component-hooks'
import 'element-ui/lib/theme-chalk/icon.css'
import Layout from './component/layout/index.vue'
export default {
  components: {
    Layout
  },
  methods: {}
}
</script>
