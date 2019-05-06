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
import Layout from './component/layout/index.vue'
import 'element-ui/lib/theme-chalk/index.css'
export default {
  components: {
    Layout
  },
  methods: {}
}
</script>
