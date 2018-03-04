<template>
    <div>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
        msg: 'Welcome to Your Vue.js App | Home'
    }
  }
}
</script>

<style scoped lang="scss">
    p {
        color: $color-light-blue;
    }
</style>
