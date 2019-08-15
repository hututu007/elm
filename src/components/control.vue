<template>
  <div class="e-control">
    <span v-show="foods.count>0" class="item" @click="handelDelete">
      <i class="icon-remove_circle_outline"></i>
    </span>
    <span v-show="foods.count>0" class="text">{{foods.count}}</span>
    <span class="item" @click="handelAdd">
      <i class="icon-add_circle"></i>
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      foods: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data() {
      return {};
    },
    computed: {},
    components: {

    },
    created() {
      // console.log(this.foods)
    },
    mounted() {

    },
    watch: {

    },
    methods: {
      handelDelete() {
        if (this.foods.count) {
          this.foods.count--;
        }
        // this.$emit('handelNum', this.num)
      },
      handelAdd() {
        if (!this.foods.count) {
          this.$set(this.foods, 'count', 1)
        } else {
          this.foods.count++;
        }

        // this.$emit('handelNum', this.num)
      },
    },
  };

</script>

<style scoped lang="scss">
  .e-control {
    .item {
      display: inline-block;
      font-size: 24px;
      color: rgb(0, 160, 220);
      line-height: 24px;
      vertical-align: top;
    }

    .text {
      display: inline-block;
      font-size: 12px;
      color: rgb(147, 153, 159);
      line-height: 24px;
      padding: 0 4px;
    }
  }

</style>
