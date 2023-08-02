<template>
  <div v-show="slideCurrent === index">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    slideCurrent: {
      type: Number,
      default: 0
    },
    index: {
      type: Number,
      default: 0
    }
  }
}