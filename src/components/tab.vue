<template>
  <div id="tab">
    <div class="tab-item">
      <router-link to="/goods" tag="a">商品</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/comment" tag="a">评价</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/merchant" tag="a">商家</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: {

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
  #tab {
    display: flex;
    text-align: center;
    width: 100%;
    height: 40px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);

    .tab-item {
      flex: 1;
      line-height: 40px;

      a {
        display: block;
        font-size: 14px;
        color: rgb(77, 85, 93);
      }

      .active {
        color: red;
      }
    }
  }

</style>
