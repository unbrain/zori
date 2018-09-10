<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'toast',
  }
</script>

<style scoped lang="scss">
  $font-size: 14px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  $border-radius: 3px;
  .toast {
    position: fixed;display: flex;align-items: center;padding: 0.5em .75em;margin: .75em 0;top: 0;left: 50%;transform: translateX(-50%);color: white;font-size: $font-size;
    background-color: $toast-bg;box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);border-radius: $border-radius;
  }
</style>