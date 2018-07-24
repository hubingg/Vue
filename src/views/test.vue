<template>
  <div class="app-container">
    <span v-on:click="clickMe()">
      this is {{name}}!
    </span>
    <select-city></select-city>
  </div>
</template>

<script>
import SelectCity from '@/components/select-city'
export default {
  name: 'test',
  components: {
    SelectCity
  },
  data() {
    return {
      name: 'directly',
    }
  },
}
</script>

