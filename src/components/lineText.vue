<template>
  <div class="flex-box">
    <div class="line"></div>
    <span class="text">{{text}}</span>
    <div class="line"></div>
  </div>
</template>

<script>
  export default {
    props: {
      text: {
        type: String
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
  .flex-box {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    width: 80%;
    justify-content: center;
    margin: 0 auto;

    .line {
      flex: 1;
      height: 1px;
      background: rgba(255, 255, 255, .2);
      margin: 0 12px;
    }
  }

</style>
