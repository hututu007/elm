<template>
  <div id="index">
    <div class="header">
      <e-header :data='data.seller'></e-header>
    </div>
    <div class="tab">
      <e-tab></e-tab>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
  import tab from '../../components/tab'
  import header from '../../components/header'
  import axios from 'axios'
  export default {
    props: {

    },
    data() {
      return {
        data: {}
      };
    },
    computed: {

    },
    components: {
      'e-tab': tab,
      'e-header': header,
    },
    created() {
      axios.post('https://www.easy-mock.com/mock/5cb2a5fd5b6a017efd3abdd0/example_copy/elm')
        .then((res => {
          if (res.status === 200) {
            this.data = res.data
          } else {
            alert('esa mock 网站出问题了')
          }
        }))
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
  #index {}

</style>
