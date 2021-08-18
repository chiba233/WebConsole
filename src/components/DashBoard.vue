<template>
  <div class="DashBoard">
    <el-scrollbar>
      <div>{{ WebConsole }}</div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useTranslation from '@/utils/useTranslation'

export default defineComponent({
  name: 'DashBoard',
  setup () {
    const t = useTranslation()
    return {
      t,
      WebConsole: ref('')
    }
  }
})
</script>

<style scoped lang="scss">
.DashBoard {
  display: flex;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  min-width: 500px;
  min-height: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (prefers-color-scheme: dark) {
    background-color: rgb(0 0 0 / 75%);
    .el-icon-bottom {
      color: white;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100vw;
    height: 100vh;
  }
  @media screen and (min-width: 600px) {
    border-radius: 15px;
    box-shadow: rgb(0 0 0 / 75%) 0px 0px 35px -5px;
  }
}
</style>
