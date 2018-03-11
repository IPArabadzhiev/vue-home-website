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
                package: 'contacts',
                msg: 'Home | Contacts'
            }
        },
        mixins: [pageMixins]
    }
</script>

<style scoped></style>
