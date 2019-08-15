<template>
  <div id="header">
    <div class="detail">
      <div class="avatar">
        <img width="64" height="64" :src="data.avatar" alt="头像">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{data.name}}</span>
        </div>
        <div class="time">
          <span>{{data.description}}/{{data.deliveryTime}}分钟送达</span>
        </div>
        <div class="MJ" v-if="data.supports">
          <span class="icon" :class="classMap[data.supports[0].type]"></span>
          <span class="text">{{data.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="data.supports" class="num" @click="modelShow = true">
        <span>{{data.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="backgrund">
      <img :src="data.avatar" alt="背景" width="100%" height="100%">
    </div>
    <div class="gong-gao" @click="modelShow = true">
      <span class="img"></span>
      <span class="text">{{data.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <!-- 遮罩层 -->
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div class="model-wrap" v-show="modelShow">
        <div class="bj-wrap clearfix">
          <div class="main-wrap">
            <div class="title">
              <span>{{data.name}}</span>
            </div>
            <div class="star-wrap">
              <e-star :size='48' :score='data.score'></e-star>
            </div>
            <div class="you-hui">
              <e-lineText text='优惠信息'></e-lineText>
            </div>
            <ul v-if="data.supports">
              <li v-for="(item,index) in data.supports" :key="index">
                <span class="icon" :class="classMap[index]"></span>
                <span class="text">{{data.supports[index].description}}</span>
              </li>
            </ul>
            <div class="shang-jia-gong-gao">
              <e-lineText text='商家公告'></e-lineText>
            </div>
            <div class="gong-gao-text">
              <p>{{data.bulletin}}</p>
            </div>
          </div>
        </div>
        <div class="close-wrap" @click="modelShow = false">
          <i class="icon-close"></i>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
  import star from '../components/star'
  import lineText from '../components/lineText'
  export default {
    props: {
      data: {
        type: Object,
        default () {
          return {

          }
        },
      }
    },
    data() {
      return {
        modelShow: false
      };
    },
    computed: {
      classMap() {
        let arr = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
        return arr
      }
    },
    components: {
      'e-star': star,
      'e-lineText': lineText,
    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {},
  };

</script>

<style scoped lang="scss">
  @import '../assets/css/variable';
  @import '../assets/css/mixin';

  #header {
    width: 100%;
    background: rgba(7, 17, 27, 0.5);
    position: relative;
    overflow: hidden;

    .detail {
      display: flex;
      padding: 24px 16px 18px 24px;
      position: relative;

      .avatar {
        img {
          border-radius: 4px;
        }
      }

      .content {
        padding-left: 16px;
        flex: 1;
        min-width: 0;

        .title {
          height: 36px/$size;
          font-size: 0;
          margin: 2px 0 8px 0;

          .brand {
            width: 30px;
            height: 18px;
            @include bg-image('../assets/img/brand');
            display: inline-block;
            vertical-align: top;
          }

          .name {
            color: rgb(255, 255, 255);
            font-size: 32px/$size;
            line-height: 36px/$size;
            padding-left: 6px;
          }
        }

        .time {
          color: rgb(255, 255, 255);
          font-size: 24px / $size;
          line-height: 24px / $size;
          margin-bottom: 10px
        }

        .MJ {
          .icon {
            width: 12px;
            height: 12px;
            display: inline-block;
            vertical-align: top;

            @include huo-dong(1);
          }

          .text {
            color: rgb(255, 255, 255);
            font-size: 20px/$size;
            line-height: 24px/$size;
            // vertical-align: middle;
            display: inline-block;
          }
        }
      }

      .num {
        position: absolute;
        right: 20px;
        bottom: 15px;
        height: 24px;
        border-radius: 14px;
        padding-left: 6px;
        padding-right: 2px;
        background: rgba(0, 0, 0, 0.2);
        color: #fff;

        span {
          line-height: 24px;
          
        }

        .icon-keyboard_arrow_right {
          line-height: 24px;
        }
      }

    }

    .backgrund {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      filter: blur(10px);
      z-index: -1;
    }

    .gong-gao {
      position: relative;
      padding: 8px 22px 8px 12px;
      height: 56px/$size;
      background: rgba(7, 17, 27, 0.2);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #fff;

      .img {
        display: inline-block;
        vertical-align: top;
        width: 22px;
        height: 12px;
        @include bg-image('../assets/img/bulletin');
      }

      .text {
        font-size: 20px/$size;
        color: rgb(255, 255, 255);
        line-height: 12px;
        margin-right: 4px;
      }

      .icon-keyboard_arrow_right {
        position: absolute;
        top: 9px;
        right: 12px;
        font-size: 10px;
      }
    }

    .model-wrap {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(7, 17, 27, .9);
      overflow: auto;
      z-index: 100;

      // z-index: 100;
      .bj-wrap {
        width: 100%;
        min-height: 100%;

        .main-wrap {
          margin-top: 64px;
          padding-bottom: 64px;
          color: #fff;

          .title {
            text-align: center;
            font-size: 16px;
            font-weight: 700;
            line-height: 16px;
          }

          .star-wrap {
            margin: 16px auto 28px auto;
            // margin-top: 18px;
            text-align: center;
          }

          .you-hui {
            margin-bottom: 24px;
          }

          ul {
            width: 80%;
            margin: 0 auto;

            li {
              font-size: 12px;
              margin-top: 12px;

              .icon {
                width: 16px;
                height: 16px;
                border-radius: 2px;
                display: inline-block;
                vertical-align: middle;
                margin-right: 6px;
                @include huo-dong(2);
              }
              .text{
                display: inline-block;
                vertical-align: middle;
                line-height: 16px;
              }
            }
          }

          .shang-jia-gong-gao {
            margin-top: 28px;
            margin-bottom: 24px;
          }

          .gong-gao-text {
            font-size: 12px;
            line-height: 24px;
            width: 80%;
            margin: 0 auto;

            p {
              padding: 0 24px;
            }
          }
        }
      }

      .close-wrap {
        position: relative;
        width: 32px;
        height: 32px;
        margin: -64px auto 0 auto;
        clear: both;
        font-size: 32px;
      }
    }
  }

</style>
