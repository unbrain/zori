<template>
  <div class="wrapper" :class="{error}">
    <input type="text" :disabled="disabled" :readonly="readonly" :value="value" title="" @change="$emit('change', $event.target.value)" @input="$emit('input', $event.target.value)"
    @focus="$emit('focus', $event.target.value)"  @blur="$event('blur', $event.target.value)">
    <template v-if="error">
      <g-icon icon="error" class="icon-error"></g-icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script>
  import Icon from './icon'

  export default {
    name: 'g-input',
    components: {Icon},
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
      readonly: {
        type: Boolean,
        default: false,
      },
      value: {
        type: String,
        default: '',
      },
      error: {
        type: String,
      },
    },
  }
</script>

<style scoped lang="scss">
  $height: 32px;
  $border-color: #AEAEAE;
  $border-color-hover: #566C73;
  $border-radius: 4px;
  $font-size: 12px;
  $box-shadow-color: rgba(20, 20, 20, 0.4);
  $disabled-color: #aaa;
  $red: #E64C66;
  .wrapper {
    font-size: $font-size;display: inline-flex;align-items: center;
    > :not(:last-child) {margin-right: 0.5em}
    > input {
      height: 32px;border: 1px solid $border-color;border-radius: $border-radius;padding: 0 8px;font-size: inherit;
      &:hover {border-color: $border-color-hover;}
      &:focus {box-shadow: inset 0 1px 3px $box-shadow-color;outline: none;}
      &[disabled], &[readonly] {border-color: $disabled-color; color: $disabled-color;cursor: default;}
    }
    &.error {
      > input {border-color: $red;}
    }
    .icon-error {fill: $red;}
    .errorMessage {color: $red;}
  }
</style>