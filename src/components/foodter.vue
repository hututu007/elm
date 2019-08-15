<template>
  <div class="e-foodter">
    <div class="yuan" :class="{'highlighted':totalPrice > 0}">
      <i class="icon-shopping_cart" :class="{'highlighted':totalPrice > 0}"></i>
    </div>
    <div class="ding-dan-jia" :class="{'highlighted':totalPrice > 0}">
      <span>￥{{totalPrice}}</span>
    </div>
    <div class="pei-song-jia">
      <span>另需配送费￥{{seller.deliveryPrice}}</span>
    </div>
    <div class="qi-song-jia" :class="{'highlighted':totalPrice >= seller.minPrice}">
      <span>{{btnText}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      seller: {
        type: Object,
        default () {
          return {

          }
        }
      },
      selecPrice: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {};
    },
    computed: {
      btnText() {//按钮文字
        if (this.totalPrice === 0) {
          return `￥${this.seller.minPrice || '?'}起送`
        } else if (this.seller.minPrice > this.totalPrice) {
          let num = this.seller.minPrice - this.totalPrice
          return `还差${num}起送`
        } else {
          return '去结算'
        }
        return str
      },
      totalPrice() {//下单总价
        let sum = 0
        this.selecPrice.forEach((item) => {
          sum += item.count * item.price
        })
        return sum
      }
    },
    components: {

    },
    created() {},
    mounted() {

    },
    watch: {

    },
    methods: {

    },
  };

</script>

<style scoped lang="scss">
  .e-foodter {
    background: #07111b;
    height: 48px;
    position: relative;
    display: flex;

    .yuan {
      position: absolute;
      top: -12px;
      left: 18px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: 6px solid #07111b;
      background: #2b343c;
      padding: 6px;

      &.highlighted {
        background: #00a1dc;
      }

      .icon-shopping_cart {
        font-size: 24px;
        line-height: 24px;
        color: #80858a;
        text-align: center;

        &.highlighted {
          color: #fff;
        }
      }
    }

    .ding-dan-jia {
      flex: 1;
      margin: 4px 0 4px 64px;
      padding: 0 12px 0 18px;
      border-right: 1px solid rgba(255, 255, 255, .1);
      font-size: 18px;
      font-weight: 700;
      line-height: 40px;
      color: rgba(255, 255, 255, .4);
      text-align: center;

      &.highlighted {
        color: #fff;
      }
    }

    .pei-song-jia {
      width: 150px;
      padding-left: 12px;
      font-size: 12px;
      font-weight: 700;
      line-height: 48px;
      color: rgba(255, 255, 255, .4);
    }

    .qi-song-jia {
      text-align: center;
      width: 105px;
      padding: 0 8px;
      font-size: 12px;
      font-weight: 700;
      line-height: 48px;
      color: rgba(255, 255, 255, .4);
      background: #2b333b;

      &.highlighted {
        background: #00a1dc;
      }
    }
  }

</style>
