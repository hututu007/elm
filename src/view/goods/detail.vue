<template>
  <div id="detai">
    <div class="img">
      <img :src="foods.image" alt="详情图" width="375" height="375">
    </div>
    <div class="gou-mai"></div>
    <div class="jie-shao"></div>
    <div class="ping-jia"></div>
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
      return {

      };
    },
    computed: {

    },
    components: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {

    },
  };

</script>

<style scoped lang="scss">
  #detai {}

</style>
