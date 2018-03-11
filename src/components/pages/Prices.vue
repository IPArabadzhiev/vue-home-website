<template>
    <div>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
    import pageMixins from '@/mixins/pageMixins';

    export default {
        data() {
            return {
                package: 'prices',
                msg: 'Home | Prices'
            }
        },
        mixins: [pageMixins]
    }
</script>

<style scoped>

</style>
