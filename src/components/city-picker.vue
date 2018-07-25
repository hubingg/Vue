<template>
  <div class="c-city-picker" @click="showDrop()" :class="{'c-city-picker-selected': isShowDrop}" v-clickoutside="warpClick">
    <span class="c-city-name">{{city.name}}</span>
    <!-- <i class="el-select__caret el-input__icon el-icon-arrow-up" :class="{'is-reverse': isShowDrop}"></i> -->
    <transition name="fade">
      <div class="c-city-box" v-show="isShowDrop">
        <ul>
          <li @click="showCity(0,'城市')">城市</li>
          <li v-for="item in cityLists" :key="item.id" @click.stop="showCity(item.id, item.name)">
            {{item.name}}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import Clickoutside from 'element-ui/src/utils/clickoutside'

export default {
  name: 'CityPicker',
  directives: { Clickoutside },
  props: {
    isDefault: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isShowDrop: false,
      city: {
        name: '城市',
        id: 0
      },
      cityLists: []
    }
  },
  methods: {
    getDefaulCity () {
      this.$api.common.getDefaulCity().then((res) => {
        this.city = res.data
      })
    },
    getCityData () {
      this.$api.common.getCity().then((res) => {
        this.cityLists = res.data
      })
    },
    showDrop () {
      this.isShowDrop = !this.isShowDrop
    },
    showCity (id, name) {
      this.isShowDrop = false
      this.city = {
        name: name,
        id: id
      }
    },
    warpClick () {
      this.isShowDrop = false
    }
  },
  created () {
    if (this.isDefault) {
      this.getDefaulCity()
    }
    this.getCityData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .c-city-picker
    position relative
    width 140px
    text-align left
    border 1px solid #dcdfe6
    padding 6px 12px
    cursor pointer
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
  .c-city-picker-selected
    background #0e9b4f
    color #fff
</style>
