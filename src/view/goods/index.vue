<template>
  <div id="goods">
    <div class="sidebar">
      <ul class="sidebar-ul">
        <li class="sidebar-li" v-for="(item,index) in data" :key="index">
          <span class="text">{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="main" ref="foodsWrapper">
      <div class="main-item food-list-hook" v-for="(item,index) in data" :key="index">
        <div class="title">
          <span>{{item.name}}</span>
        </div>
        <ul class="item-ul">
          <li class="item-li" v-for="(food,index) in item.foods" :key="index" @click="_detaiShow(food)">
            <div class="img-box">
              <img :src="food.icon" alt="图片">
            </div>
            <div class="r">
              <span class="name">{{food.name}}</span>
              <span class="type">{{food.description}}</span>
              <div>
                <span class="num">月售{{food.sellCount}}</span>
                <span class="rating">好评率{{food.rating}}%</span>
              </div>
              <div>
                <span class="price">￥{{food.price}}</span>
                <span v-if="food.oldPrice" class="oldPrice">￥{{food.oldPrice}}</span>
              </div>
            </div>
            <div class="control-wrap">
              <e-control :foods='food'></e-control>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="foodter">
      <e-foodter :seller='seller' :selecPrice='CPfoods'></e-foodter>
    </div>
    <div class="detai-wrap" v-show="detailShow">
      <e-detail @close="_close()" :foods='selectFood'></e-detail>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import foodter from '../../components/foodter.vue'
  import control from '../../components/control.vue'
  import scroll from '../../components/scroll.vue'
  import detail from './detail.vue'
  export default {
    props: {

    },
    data() {
      return {
        data: [],
        seller: {},
        sumPrice: 0,
        detailShow: false,
        selectFood: {}
      };
    },
    computed: {
      CPfoods() {
        let arr = []
        this.data.forEach((item) => {
          item.foods.forEach((item1) => {
            if (item1.count) {
              arr.push(item1)
            }
          })
        })
        return arr
      }
    },
    components: {
      'e-foodter': foodter,
      'e-detail': detail,
      'e-control': control,
      'e-scroll': scroll,
    },
    created() {
      axios.post('https://www.easy-mock.com/mock/5cb2a5fd5b6a017efd3abdd0/example_copy/elm')
        .then((res => {
          if (res.status === 200) {
            this.data = res.data.goods
            this.seller = res.data.seller
          } else {
            alert('esa mock 网站出问题了')
          }
        }))
    },
    mounted() {},
    watch: {

    },
    methods: {
      _detaiShow(food) {
        this.selectFood = food
        this.detailShow = true
      },
      _close() {
        this.detailShow = false
      },
    },
  };

</script>

<style scoped lang="scss">
  #goods {
    display: flex;
    height: 100%;

    .foodter {
      width: 100%;
      position: fixed;
      left: 0;
      bottom: 0;
    }

    .sidebar {
      width: 80px;
      background: #f3f5f7;
      height: 100%;
      overflow-y: auto;

      .sidebar-ul {
        .sidebar-li {
          display: table;
          line-height: 14px;
          width: 56px;
          height: 54px;
          margin: 0 12px;
          border-bottom: 1px solid rgba(7, 17, 27, .1);

          .text {
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
      min-width: 0;
      overflow-y: auto;
      height: 100%;

      .main-item {

        .title {
          background: #f3f5f7;
          border-left: 2px solid #d9dde1;
          padding-left: 14px;

          span {
            color: rgb(147, 153, 169);
            font-size: 12px;
            line-height: 26px;
          }
        }

        .item-ul {

          .item-li {
            position: relative;
            margin: 18px;
            padding-bottom: 18px;
            display: flex;
            border-bottom: 1px solid rgba(7, 17, 27, .1);

            .img-box {
              width: 57px;
              height: 57px;

              img {
                border-radius: 2px;
              }
            }

            .r {
              flex: 1;
              min-width: 0;
              padding-left: 10px;

              .name {
                margin-top: 2px;
                margin-bottom: 8px;
                color: rgb(7, 17, 27);
                font-size: 14px;
                line-height: 14px;
                display: block;
              }

              .type {
                color: rgb(147, 153, 159);
                font-size: 10px;
                line-height: 12px;
                display: block;
                margin-bottom: 8px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }

              .num {
                color: rgb(147, 153, 159);
                font-size: 10px;
                line-height: 10px;
                display: inline-block;
                margin-bottom: 8px;
                margin-right: 12px;
              }

              .rating {
                color: rgb(147, 153, 159);
                font-size: 10px;
                display: inline-block;
                line-height: 10px;
                margin-bottom: 8px;
              }

              .price {
                color: red;
                font-size: 10px/14px;
                display: inline-block;
                line-height: 24px;
                font-weight: 700;
                margin-right: 8px;
              }

              .oldPrice {
                color: rgb(147, 153, 159);
                font-size: 10px;
                display: inline-block;
                line-height: 24px;
                font-weight: 700;
                text-decoration: line-through;
              }
            }

            .control-wrap {
              position: absolute;
              right: 0;
              top: 62px;
            }
          }
        }
      }
    }

    .detai-wrap {
      position: fixed;
      z-index: 1001;
      top: 0;
      left: 0;
      width: 100%;
      min-height: 100%;
      background: #fff;
    }

  }

</style>
