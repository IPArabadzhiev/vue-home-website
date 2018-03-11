<template>
    <div>
        <p>{{ txt.message }}</p>
        <p>{{ msg }}</p>
        <p @click="callApi()">{{ msg }}</p>
    </div>
</template>

<script>
    import pageMixins from '@/mixins/pageMixins';

    export default {
        data() {
            return {
                package: 'home',
                msg: 'Home | Home'
            }
        },
        methods: {
            callApi() {
                this.$http.get('/api').then(response => {
                    this.msg = response;
                })
            }
        },
        mixins: [pageMixins]
    }
</script>
