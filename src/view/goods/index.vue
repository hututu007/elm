<template>
  <div id="goods">
    <div class="sidebar">
      <ul class="sidebar-ul">
        <li class="sidebar-li" v-for="(item,index) in data" :key="index">
          <span class="text">{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="mian">
      <div class="main-item">
        <ul class="item-ul">
          <li class="item-li">
            <img :src="data.image" alt="图片">
            <div class="r">
              <span class="name"></span>
              <span class="type"></span>
              <span class="num"></span>
              <span class="price"></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    props: {

    },
    data() {
      return {
        data: []
      };
    },
    computed: {

    },
    components: {},
    created() {
      axios.post('https://www.easy-mock.com/mock/5cb2a5fd5b6a017efd3abdd0/example_copy/elm')
        .then((res => {
          if (res.status === 200) {
            this.data = res.data.goods
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
  #goods {
    display: flex;
    position: absolute;
    top: 175px;
    bottom: 46px;

    .sidebar {
      width: 80px;
      background: #f3f5f7;
      .sidebar-ul{
        .sidebar-li{
          display: table;
          line-height: 14px;
          width: 56px;
          height: 54px;
          margin: 0 12px;
          border-bottom: 1px solid rgba(7,17,27,.1);
          .text{
            display: table-cell;
            vertical-align: middle;
            font-size: 12px;
            color: #07111b;
          }
        }
      }
    }

    .main {
      flex: 1;
    }
  }

</style>
