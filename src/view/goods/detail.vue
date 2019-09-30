<template>
  <div id="detai">
    <div class="close" @click="close">X</div>
    <div class="img">
      <img :src="foods.image" alt="详情图" width="375" height="375">
    </div>
    <div class="gou-mai">
      <span class="name">{{foods.name}}</span>
      <div class="yue-shou-wrap">
        <span class="yue-shou">月售{{foods.sellCount}}份</span>
        <span class="ping-jia">好评率{{foods.rating}}</span>
      </div>
      <div class="price-wrap">
        <span class="now-price">￥{{foods.price}}</span>
        <span v-show="foods.oldPrice" class="old-price">￥{{foods.oldPrice}}</span>
      </div>
      <div class="btn">加入购物车</div>
    </div>
    <div class="bc"></div>
    <div class="jie-shao">
      <span>商品介绍</span>
      <p>{{foods.info}}</p>
    </div>
    <div class="bc"></div>
    <div class="ping-jia">
      <span class="title">商品评价</span>
      <div class="ping-jia-wrap">
        <span>全部<p>33</p></span>
        <span>推荐<p>33</p></span>
        <span>吐槽<p>33</p></span>
      </div>
    </div>
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
      close() {
        this.$emit('close')
      }
    },
  };

</script>

<style scoped lang="scss">
  #detai {
    position: relative;
    overflow-y: auto;
    height: 100vh;

    .close {
      position: absolute;
      padding: 6px;
      font-size: 16px;
      cursor: pointer;
    }

    .gou-mai {
      padding: 18px;
      position: relative;

      .name {
        font-size: 14px;
        color: rgb(7, 17, 27);
        font-weight: 700;
        line-height: 14px;
        margin-bottom: 8px;
        display: inline-block;
      }

      .yue-shou-wrap {
        margin-bottom: 18px;
        font-size: 10px;
        color: rgb(147, 153, 159);
        line-height: 10px;

        .yue-shou {
          padding-right: 12px;
        }
      }

      .price-wrap {
        font-size: 14px;
        color: red;
        line-height: 24px;
        font-weight: 700;

        .old-price {
          padding-left: 12px;
          color: rgb(147, 153, 159);
          text-decoration: line-through;
        }
      }

      .btn {
        width: 74px;
        height: 24px;
        background: rgb(0, 160, 220);
        color: #fff;
        text-align: center;
        font-size: 10px;
        line-height: 24px;
        border-radius: 12px;
        position: absolute;
        right: 18px;
        bottom: 18px;
      }
    }

    .bc {
      height: 16px;
      background: #f3f5f7;
      border-top: 1px solid rgba(7, 17, 27, .1);
      border-bottom: 1px solid rgba(7, 17, 27, .1);
    }

    .jie-shao {
      padding: 18px;
      font-size: 14px;
      line-height: 24px;
      font-weight: 200;
      color: rgb(77, 85, 93);

      span {
        font-weight: 700;
        color: black;
      }
    }

    .ping-jia {
      padding: 18px;

      .title {
        font-size: 14px;
        line-height: 24px;
        font-weight: 700;
        color: black;
        display: inline-block;
      }

      .ping-jia-wrap {
        margin-top: 18px;

        span {
          padding: 8px 12px;
          color: #fff;
          font-size: 14px;
          line-height: 16px;
          display: inline-block;
          border-radius: 4px;

          // &:nth-of-type(1) {
          //   background: rgb(0, 160, 220);
          // }
          // &:nth-of-type(2) {
          //   background: rgba(0, 160, 220,.2);
          // }
          // &:nth-of-type(3) {
          //   background: rgba(71, 85, 92,.2);
          // }
          &:nth-child(1) {
            background: rgb(0, 160, 220);
          }
          &:nth-child(2) {
            background: rgba(0, 160, 220,.2);
          }
          &:nth-child(3) {
            background: rgba(71, 85, 92,.2);
          }

          p {
            display: inline-block;
            padding: 0 4px;
            font-size: 10px;
            line-height: 10px;
          }
        }
      }
    }
  }

</style>
