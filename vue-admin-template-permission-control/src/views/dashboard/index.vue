<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <div class="dashboard-text">roles: <span v-for="role in roles" :key="role">{{ role }}</span></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },

  mounted() {
    console.log(this)
    this.test([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])
  },
  methods: {
    test(intervals, newInterval) {
      console.log(intervals, newInterval)
      const result = []
      const mixNum = newInterval[0]
      // const maxNum = newInterval[1]
      for (let i = 0; i < intervals.length; i++) {
        console.log(intervals[i])
        if (mixNum < intervals[i][1]) {
          console.log(i)
        }
      }
      console.log(result)
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
