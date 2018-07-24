<template>
  <div class="c-select-city" @click="showDrop()" :class="{'c-select-city-show': isShowDrop}">
    <span class="c-city-name">{{defaultCity.name}}</span>
    <div class="c-city-box" v-show="isShowDrop">
      <ul>
        <li @click="showCity(0,'城市')">城市</li>
        <li v-for="city in cityLists" :key="city.id" @click="showCity(city.id, city.name)">
          {{city.name}}
        </li>
      </ul>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    isShowDefault: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isShowDrop: false,
      defaultCity: {
        name: '城市',
        id: 0
      },
      cityLists: [],
    }
  },
  methods: {
    showDrop() {
      this.isShowDrop = !this.isShowDrop
    },
    showCity(id, name){
      this.isShowDrop  = !this.isShowDrop
      this.defaultCity = {
        name: name,
        id: id
      }
    },
    getCityData(){
      this.$api.common.getCity().then((res) => {
        this.cityLists = res.data
      })
    },
    getDefaulCity(){
      this.$api.common.getDefaulCity().then((res) => {
        this.defaultCity = res.data
      })
    }
  },
  created() {
    if(this.isShowDefault) {
      this.getDefaulCity()
    }
    this.getCityData()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .c-select-city
    position relative
    width 140px
    text-align left
    border 1px solid #dcdfe6
    padding 6px 12px
    .c-city-box
      overflow auto
      color #383838
      position absolute
      top 31px
      left 0
      z-index 99
      width 516px
      border 1px solid #0e9b4f
      background #fff
      ul
        li
          float left
          width 86px
          height 37px
          line-height 37px
          text-align center
  .c-select-city-show
    background #0e9b4f
    color #fff
</style>
