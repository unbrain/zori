<template>
  <div class="toast">
    <div class="message" ref="toast">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default"></div>
    </div>
    <div class="line" v-if="!autoClose" ref="line"></div>
    <span v-if="!autoClose" class="close" @click="close">关闭</span>
  </div>
</template>

<script>
  export default {
    name: 'toast',
    props: {
      autoClose: {type: Boolean, default: true},
      closeDelay: {type: [Number, String], default: 2},
      enableHtml: {type: Boolean, default: false},
    },
    mounted () {
      this.updateStyles()
      if (this.autoClose) {setTimeout(() => {this.close()}, this.closeDelay * 1000)}
    },
    methods: {
      updateStyles () {
        this.$nextTick(() => {
          this.$refs.line.style.height =
            `${this.$refs.toast.getBoundingClientRect().height}px`
        })
      },
      close () {
        this.$el.remove()
        this.$destroy()
      },
    },
  }
</script>

<style scoped lang="scss">
  $font-size: 14px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  $border-radius: 3px;
  $min-height: 40px;
  .toast {margin: .75em 0;position: fixed;display: flex;align-items: center;top: 0;left: 50%;transform: translateX(-50%);color: white;font-size: $font-size;
    background-color: $toast-bg;box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);border-radius: $border-radius;min-height: $min-height;line-height: 1.8;word-break: break-all;}

  .message {padding: 0.5em .75em;}

  .line {border-left: 1px solid #eeeeee;}

  .close {padding: 0.5em .75em;cursor: pointer;flex-shrink: 0;}
</style>