<template>
  <div class="app-container">
    <span v-on:click="clickMe()">
      this is {{name}}!
    </span>
    <city-picker></city-picker>
  </div>
</template>

<script>
import CityPicker from '@/components/city-picker'
export default {
  name: 'test',
  components: {
    CityPicker
  },
  data() {
    return {
      name: 'directly',
    }
  },
}
</script>

