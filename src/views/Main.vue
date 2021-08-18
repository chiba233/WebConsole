<template>
  <div class="Main">
<!--    <p>{{ t('abc') }}</p>-->
    <dash-board></dash-board>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import useTranslation from '@/utils/useTranslation'
import DashBoard from '@/components/DashBoard.vue'

export default defineComponent({
  name: 'Main',
  components: { DashBoard },
  setup () {
    const t = useTranslation()
    return { t }
  }
})
</script>

<style lang="scss">
.Main{
}
</style>
