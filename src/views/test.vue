<template>
  <div class="app-container">
  </div>
</template>

<script>
import CityPicker from '@/components/city-picker'
export default {
  name: 'test',
  components: {
    CityPicker
  },
  data () {
    return {
      name: 'directly'
    }
  }
}
</script>
